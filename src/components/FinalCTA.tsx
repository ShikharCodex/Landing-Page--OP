import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-foreground text-background text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Stop losing your best prompts.
        </h2>
        <p className="text-xl md:text-2xl text-background/70 font-medium">
          Give them a home.
        </p>
        <div className="pt-8">
          <Link 
            href="#waitlist" 
            className="inline-block px-8 py-4 bg-background text-foreground font-medium rounded-md hover:bg-background/90 transition-colors"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
