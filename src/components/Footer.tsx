import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's build something{" "}
              <span className="text-gradient italic">unreasonably good.</span>
            </h3>
            <a
              href="mailto:khurrambilal647@gmail.com?subject=Let's%20Build%20Something"
              className="group mt-5 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300"
            >
              khurrambilal647@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="flex md:justify-end">
            <div className="flex gap-3">
              <a
                href="https://github.com/billzcoding"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/raja-bilal-khurram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-neutral-500">
          <span>© 2026 Raja Bilal Khurram. All rights reserved.</span>
          <span className="font-mono">RBK.DEV · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
