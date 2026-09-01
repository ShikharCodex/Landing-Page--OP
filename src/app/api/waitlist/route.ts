import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  honeypot: z.string().optional(),
});

// Simple in-memory rate limiting (Note: in serverless environments, this resets per lambda cold start, but is better than nothing)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // max 5 requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    // Rate limit check
    const now = Date.now();
    const rateLimitData = rateLimitMap.get(ip) || { count: 0, lastReset: now };
    
    if (now - rateLimitData.lastReset > RATE_LIMIT_WINDOW) {
      rateLimitData.count = 1;
      rateLimitData.lastReset = now;
    } else {
      rateLimitData.count += 1;
    }
    rateLimitMap.set(ip, rateLimitData);

    if (rateLimitData.count > RATE_LIMIT) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    
    // Validate request body
    const result = waitlistSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, honeypot } = result.data;

    // Honeypot check: If the hidden field is filled, it's likely a bot. 
    // We return a fake success to not tip off the bot.
    if (honeypot) {
      return NextResponse.json({ success: true, message: "You're on the list." });
    }

    const normalizedEmail = email.toLowerCase().trim();

    try {
      // Save to database
      const entry = await prisma.waitlist.create({
        data: {
          email: normalizedEmail,
        },
      });

      // Send confirmation email
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: "OpenPrompt <onboarding@resend.dev>", // Resend test domain
          to: normalizedEmail, // Note: For testing, this must be the email you signed up to Resend with
          subject: "You're on the OpenPrompt waitlist 🎉",
          text: `You're in.\n\nThanks for joining the OpenPrompt waitlist.\n\nWe're building a home for every AI prompt — a place to save, organize, discover, and share your best prompts.\n\nWe'll email you when OpenPrompt is ready.\n\n— OpenPrompt`,
          html: `<div style="font-family: sans-serif; color: #171717; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p><strong>You're in.</strong></p>
            <p>Thanks for joining the OpenPrompt waitlist.</p>
            <p>We're building a home for every AI prompt — a place to save, organize, discover, and share your best prompts.</p>
            <p>We'll email you when OpenPrompt is ready.</p>
            <p>— OpenPrompt</p>
          </div>`,
        });

        // Update confirmation sent at
        await prisma.waitlist.update({
          where: { id: entry.id },
          data: { confirmationSentAt: new Date() },
        });
      }

      return NextResponse.json({ success: true, message: "You're on the list." });

    } catch (dbError: unknown) {
      // Handle unique constraint violation (duplicate email)
      if ((dbError as any).code === 'P2002') {
        return NextResponse.json({ success: true, message: "You're already on the OpenPrompt waitlist." });
      }
      throw dbError;
    }

  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
