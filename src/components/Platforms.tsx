export default function Platforms() {
  const categories = [
    {
      title: "Text",
      tools: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity"]
    },
    {
      title: "Image",
      tools: ["Midjourney", "FLUX", "DALL·E", "Ideogram"]
    },
    {
      title: "Video",
      tools: ["Veo", "Kling", "Runway", "Pika"]
    },
    {
      title: "Audio",
      tools: ["Suno", "Udio", "ElevenLabs"]
    },
    {
      title: "Coding",
      tools: ["Cursor", "GitHub Copilot", "Claude Code"]
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            One library. Every AI.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Keep prompts for the tools you use today — and the ones you&apos;ll use tomorrow. OpenPrompt is platform-independent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-left">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-border/60 pb-6 gap-4"
            >
              <h3 className="text-sm font-semibold tracking-widest text-foreground uppercase md:w-32 shrink-0">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-medium md:justify-end">
                {cat.tools.map((tool, j) => (
                  <span key={j}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
          
          <div className="pt-4 text-center">
            <span className="text-sm font-medium text-muted-foreground italic">
              ...and many more.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
