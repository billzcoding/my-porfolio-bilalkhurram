import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, MapPin } from "lucide-react";
import bilal from "@/assets/bilal-original.png";

export function Hero() {
  return (
    <section id="top" className="relative z-10 overflow-hidden px-4 pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Massive background name */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[52%] -translate-y-1/2 select-none text-center font-bold leading-[0.85] tracking-[-0.06em] text-white/[0.04]"
        style={{ fontSize: "clamp(5rem, 18vw, 22rem)" }}
      >
        RAJA BILAL
        <br />
        KHURRAM
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12">
        {/* Left: copy */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <MapPin className="h-3 w-3" />
            Rawalpindi, Pakistan · GIK Institute
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(2.4rem,6.5vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
          >
            Raja Bilal
            <br />
            Khurram —
            <br />
            <span className="text-gradient italic">AI Engineer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-neutral-400 sm:text-lg"
          >
            I build AI systems and backends — clean, fast, and shipped.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/20 hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              Download CV
              <span className="text-neutral-500">[PDF]</span>
            </a>
            <a
              href="mailto:khurrambilal647@gmail.com?subject=Let's%20Build%20Something"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="flex gap-2">
              <a
                href="https://github.com/billzcoding"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-300 backdrop-blur transition-all hover:border-orange-500/30 hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/raja-bilal-khurram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-300 backdrop-blur transition-all hover:border-orange-500/30 hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait blended into page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
            {/* glow */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-y-12 scale-90 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 60%, rgba(249,115,22,0.35), rgba(249,115,22,0) 60%)",
              }}
            />

            {/* portrait — blends into bg via mask */}
            <img
              src={bilal}
              alt="Raja Bilal Khurram, AI Engineer"
              className="absolute inset-0 h-full w-full object-cover object-top"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 75% 85% at 60% 45%, #000 55%, transparent 95%)",
                maskImage:
                  "radial-gradient(ellipse 75% 85% at 60% 45%, #000 55%, transparent 95%)",
                filter: "contrast(1.05) saturate(0.95)",
              }}
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}
