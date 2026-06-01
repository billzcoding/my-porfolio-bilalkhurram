import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import bilal from "@/assets/bilal-original.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 min-h-screen w-full overflow-hidden"
    >
      {/* Full bleed background photo */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bilal}
          alt="Raja Bilal Khurram"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#0D0D0E]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0D0D0E] via-[#0D0D0E]/60 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 pt-32 pb-10 sm:pt-40">
        {/* Top copy block */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Available for AI engineering roles · 2026
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-2xl font-medium leading-snug text-white sm:text-3xl"
          >
            I build AI systems and backends —{" "}
            <span className="text-neutral-400">
              clean, fast, and shipped.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="mailto:khurrambilal647@gmail.com?subject=Let's%20work%20together"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="https://github.com/billzcoding"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-neutral-200 backdrop-blur transition-all hover:border-orange-500/40 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/raja-bilal-khurram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-neutral-200 backdrop-blur transition-all hover:border-orange-500/40 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Giant name at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none mt-16 select-none"
        >
          <h1
            className="font-bold leading-[0.85] tracking-[-0.05em] text-white"
            style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
          >
            Bilal Khurram
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
