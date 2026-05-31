import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";

const projects = [
  {
    n: "01",
    title: "Pocket Agent",
    tag: "Local AI Engine",
    body: "Local AI agent engine engineered by fine-tuning a 0.5B LLM utilizing Unsloth and LoRA frameworks. Achieved 100% tool-calling precision and sub-200ms CPU execution limits via GGUF 4-bit quantization.",
    stack: ["Python", "Unsloth", "GGUF"],
    accent: "from-orange-500/30 via-orange-500/5 to-transparent",
  },
  {
    n: "02",
    title: "EatGuru",
    tag: "Predictive Allocation",
    body: "A predictive allocation and budget algorithm built to safely handle real-time macro-nutrient and expense surpluses. Scaled execution to onboard 24 active paying tiers within 3 days (Fixed Survivor tier at 200 PKR).",
    stack: ["TypeScript", "FastAPI", "Algorithms"],
    accent: "from-blue-500/25 via-blue-500/5 to-transparent",
  },
  {
    n: "03",
    title: "BlinkTalk Suite",
    tag: "Assistive CV",
    body: "An offline-ready computer vision assistive infrastructure driven by MediaPipe gesture frameworks. Bridges eye-blink sequencing with localized pipeline transformations under a 300ms delay envelope.",
    stack: ["OpenCV", "MediaPipe", "Python"],
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-400">
                / Selected Works
              </div>
              <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-[-0.03em] text-white">
                Flagship <span className="text-gradient italic">Architecture.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              Three systems. Each one solves a real bottleneck — latency, allocation,
              or accessibility — at the edge.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="bento group relative flex h-full flex-col overflow-hidden p-6 transition-colors hover:border-white/10">
                  <div
                    className={`pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-70 blur-3xl`}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="text-xs font-mono text-neutral-500">{p.n}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-300">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-8 text-3xl font-bold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-neutral-400">
                    {p.body}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/5 bg-black/30 px-2 py-1 font-mono text-[10px] text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-auto flex items-center justify-between pt-8">
                    <span className="text-xs text-neutral-500">Case study</span>
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
