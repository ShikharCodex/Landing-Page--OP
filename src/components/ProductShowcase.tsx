import { Search, Bookmark, Play, Code, FileText, Settings2 } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto space-y-32">
        
        {/* Personal Library */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Personal Library</h3>
            <h4 className="text-3xl font-medium text-foreground">Everything in its right place.</h4>
            <p className="text-muted-foreground leading-relaxed">
              Find exactly what you need in seconds. Group prompts into collections, add custom tags, and search your entire library instantly.
            </p>
          </div>
          <div className="flex-1 w-full bg-card rounded-xl border border-border/60 shadow-xl shadow-black/5 overflow-hidden">
            <div className="p-4 border-b border-border/40 flex justify-between items-center bg-secondary/30">
              <div className="flex items-center gap-4">
                <span className="font-medium text-sm">Collections</span>
                <span className="text-xs text-muted-foreground">8 Folders</span>
              </div>
              <Settings2 className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              {[
                { name: "Code Assistants", count: 12, icon: Code, color: "text-blue-500" },
                { name: "Copywriting", count: 24, icon: FileText, color: "text-green-500" },
                { name: "SEO Optimization", count: 8, icon: Search, color: "text-orange-500" },
                { name: "Video Gen", count: 5, icon: Play, color: "text-purple-500" }
              ].map((c, i) => (
                <div key={i} className="p-3 border border-border/40 rounded-lg flex flex-col gap-2 bg-background hover:border-border transition-colors cursor-default">
                  <c.icon className={`w-4 h-4 ${c.color}`} />
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.count} prompts</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discover */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <div className="flex-1 space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Discover</h3>
            <h4 className="text-3xl font-medium text-foreground">Learn from the best.</h4>
            <p className="text-muted-foreground leading-relaxed">
              Explore trending prompts across all major AI models. See what top creators are building and adapt their techniques for your own work.
            </p>
          </div>
          <div className="flex-1 w-full bg-card rounded-xl border border-border/60 shadow-xl shadow-black/5 overflow-hidden">
             <div className="p-4 border-b border-border/40 flex justify-between items-center bg-secondary/30">
              <span className="font-medium text-sm">Trending This Week</span>
            </div>
            <div className="divide-y divide-border/40">
              {[
                { title: "React Component Generator", model: "Claude 3.5 Sonnet", saves: "2.4k" },
                { title: "Cold Email Sequence", model: "GPT-4o", saves: "1.8k" },
                { title: "Midjourney Cinematic Portrait", model: "Midjourney v6", saves: "1.2k" },
              ].map((p, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">{p.title}</div>
                    <div className="text-xs text-muted-foreground">{p.model}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Bookmark className="w-3 h-3" />
                    {p.saves}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prompt Page */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Prompt Page</h3>
            <h4 className="text-3xl font-medium text-foreground">Your work, beautifully presented.</h4>
            <p className="text-muted-foreground leading-relaxed">
              Every prompt gets its own dedicated page. Share clean, distraction-free links with variables, platform requirements, and usage examples.
            </p>
          </div>
          <div className="flex-1 w-full bg-card rounded-xl border border-border/60 shadow-xl shadow-black/5 overflow-hidden flex flex-col h-[320px]">
            <div className="p-5 border-b border-border/40 flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Next.js API Route Boilerplate</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-4 h-4 rounded-full bg-secondary" alt="avatar" /> @alex
                  </span>
                  <span>·</span>
                  <span>TypeScript</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-border rounded-md text-xs font-medium hover:bg-secondary transition-colors">Save</button>
                <button className="px-3 py-1.5 bg-foreground text-background rounded-md text-xs font-medium hover:bg-foreground/90 transition-colors">Copy</button>
              </div>
            </div>
            <div className="p-5 bg-secondary/10 flex-1 overflow-hidden relative">
              <div className="text-sm font-mono text-muted-foreground opacity-70 absolute inset-5 pointer-events-none">
                Write a Next.js 14 App Router API route for handling [Action]. It should use [Database] and include proper error handling, status codes, and type safety with Zod validation...
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
