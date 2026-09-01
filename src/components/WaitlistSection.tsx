import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border/40" id="waitlist">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            Give every prompt a home.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            OpenPrompt is coming soon. Join the early access list and we&apos;ll let you know when it&apos;s ready.
          </p>
        </div>

        <WaitlistForm />

      </div>
    </section>
  );
}
