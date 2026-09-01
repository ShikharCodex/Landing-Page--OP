"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // omit honeypot for real users
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message);
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-border/60 bg-card rounded-xl text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-xl font-medium text-foreground">{message}</h3>
        <p className="text-muted-foreground">Thanks for joining OpenPrompt. We&apos;ll let you know when we&apos;re ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {/* Honeypot field - hidden from users but visible to bots */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[140px]"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Join the waitlist"
          )}
        </button>
      </div>
      
      {status === "error" && (
        <p className="text-sm text-destructive text-center font-medium animate-in fade-in">
          {message}
        </p>
      )}
      
      <p className="text-xs text-muted-foreground text-center pt-2">
        We&apos;ll only email you about OpenPrompt and its launch.
      </p>
    </form>
  );
}
