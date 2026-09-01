import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo className="scale-90" />
        <div className="text-sm text-muted-foreground">
          The home for every AI prompt.
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} OpenPrompt
        </div>
      </div>
    </footer>
  );
}
