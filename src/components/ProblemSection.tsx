export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30" id="product">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          Your best prompts are everywhere.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-lg md:text-xl text-muted-foreground font-medium">
          <span>Chats.</span>
          <span>Notes.</span>
          <span>Documents.</span>
          <span>Bookmarks.</span>
          <span>Communities.</span>
          <span>AI tools.</span>
        </div>

        <div className="pt-8 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
          <p className="text-xl md:text-2xl font-medium text-foreground mt-8">
            OpenPrompt brings them together.
          </p>
        </div>
      </div>
    </section>
  );
}
