import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Cpu, Layers, MapPin } from "lucide-react";
import bilal from "@/assets/bilal.png";

export function Hero() {
  return (
    <section id="top" className="relative z-10 px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <MapPin className="h-3 w-3" />
            Pakistan • GIK Institute
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
          >
            AI Engineer &
            <br />
            <span className="text-gradient italic">Systems Architect.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-neutral-400 sm:text-lg"
          >
            Building localized, low-latency agentic applications and robust
            high-concurrency systems that resolve complex computational and
            structural bottlenecks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              Download my CV
              <span className="text-neutral-500">[PDF]</span>
            </a>
            <a
              href="mailto:khurrambilal647@gmail.com?subject=Let's%20Build%20Something"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200"
            >
              khurrambilal647@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Right: bento with portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/5"
            style={{
              background:
                "linear-gradient(160deg, rgba(40,30,20,0.6) 0%, rgba(15,15,16,0.9) 100%)",
            }}
          >
            {/* Massive BILAL background text */}
            <div className="absolute inset-x-0 bottom-[-2%] flex items-end justify-center overflow-hidden">
              <span
                className="select-none font-bold tracking-[-0.06em] leading-none text-white/[0.07]"
                style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
              >
                BILAL
              </span>
            </div>

            {/* Portrait */}
            <img
              src={bilal}
              alt="Raja Bilal Khurram"
              className="absolute inset-0 mx-auto h-full w-auto object-contain object-bottom"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
              }}
            />

            {/* Floating Cpu card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute left-4 top-6 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-2xl shadow-black/40"
            >
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-orange-500/20 text-orange-400">
                <Cpu className="h-3.5 w-3.5" />
              </div>
              <div className="text-[10px] leading-tight">
                <div className="font-semibold text-white">0.5B LLM</div>
                <div className="text-neutral-400">sub-200ms</div>
              </div>
            </motion.div>

            {/* Floating Layers card */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass-strong absolute right-4 top-1/3 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-2xl shadow-black/40"
            >
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-blue-500/20 text-blue-300">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <div className="text-[10px] leading-tight">
                <div className="font-semibold text-white">Systems</div>
                <div className="text-neutral-400">Architecture</div>
              </div>
            </motion.div>

            {/* corner badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-2.5 backdrop-blur-md">
              <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Currently
              </span>
              <span className="text-xs font-medium text-white">
                Open to AI roles
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
