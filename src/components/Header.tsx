import { Github, Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-strong flex items-center gap-1 sm:gap-2 rounded-full px-3 py-2 shadow-2xl shadow-black/40">
        <a
          href="#top"
          className="px-3 py-1.5 text-sm font-semibold tracking-tight text-white"
        >
          RBK<span className="text-[oklch(0.72_0.18_50)]">.DEV</span>
        </a>
        <div className="mx-1 h-5 w-px bg-white/10" />
        <a href="#about" className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white">
          About
        </a>
        <a href="#skills" className="hidden sm:inline-block rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white">
          Skills
        </a>
        <a href="#projects" className="rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white">
          Projects
        </a>
        <a href="#experience" className="rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white">
          Experience
        </a>
        <div className="mx-1 h-5 w-px bg-white/10" />
        <a
          href="https://github.com/billzcoding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid h-9 w-9 place-items-center rounded-full text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/raja-bilal-khurram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
