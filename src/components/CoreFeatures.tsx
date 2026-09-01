export default function CoreFeatures() {
  return (
    <section className="py-24 md:py-32 px-6" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-foreground">Save</h3>
            <p className="text-muted-foreground leading-relaxed">
              Keep your best prompts somewhere built specifically for them. Stop digging through chat histories and fragmented notes.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-foreground">Organize</h3>
            <p className="text-muted-foreground leading-relaxed">
              Collections, categories, and tags keep your library useful. Build a personal knowledge base that scales with your work.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-foreground">Discover</h3>
            <p className="text-muted-foreground leading-relaxed">
              Find useful prompts from people and communities around the world. Discover new ways to use the tools you already love.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-foreground">Share</h3>
            <p className="text-muted-foreground leading-relaxed">
              Publish your prompts and build a reputation around your work. Share links to exactly what you built, directly from your library.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
