import { Search, Folder, Bookmark, Command, Copy } from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/5 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
      {/* Sidebar */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border/40 bg-secondary/30 p-4 flex flex-col gap-6">
        <div className="flex items-center gap-2 px-2 text-foreground font-medium">
          <Command className="w-4 h-4" />
          <span>OpenPrompt</span>
        </div>
        
        <nav className="flex flex-col gap-1">
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
            My Library
          </div>
          <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-secondary text-foreground text-sm font-medium">
            <Folder className="w-4 h-4 text-muted-foreground" />
            All Prompts
          </a>
          <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground text-sm font-medium transition-colors">
            <Folder className="w-4 h-4 text-muted-foreground" />
            Collections
          </a>
          <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground text-sm font-medium transition-colors">
            <Bookmark className="w-4 h-4 text-muted-foreground" />
            Saved
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col gap-8 bg-background">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium">All Prompts</h2>
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search prompts..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-ring transition-shadow"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Prompt Card 1 */}
          <div className="p-5 border border-border/60 rounded-lg hover:border-border transition-colors flex flex-col h-full bg-card group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-foreground">SaaS Architecture</h3>
              <button className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
              Build a production ready application architecture document detailing the frontend, backend, and database schema for a multi-tenant SaaS...
            </p>
            <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                Claude
              </span>
              <span>Coding</span>
            </div>
          </div>

          {/* Prompt Card 2 */}
          <div className="p-5 border border-border/60 rounded-lg hover:border-border transition-colors flex flex-col h-full bg-card group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-foreground">Landing Page Copy</h3>
              <button className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
              Create a clean, compelling landing page copy focusing on the problem of prompt fragmentation. Use a calm, confident, editorial tone...
            </p>
            <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                ChatGPT
              </span>
              <span>Writing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
