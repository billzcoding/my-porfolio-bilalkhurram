import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { Code2, BrainCircuit, Server, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Group = {
  title: string;
  icon: LucideIcon;
  accent: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Languages",
    icon: Code2,
    accent: "from-orange-500/25 to-transparent",
    items: ["Python", "C++", "C", "C#", "TypeScript", "JavaScript", "SQL", "PostgreSQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    accent: "from-blue-500/25 to-transparent",
    items: [
      "LLMs",
      "Fine-tuning",
      "LoRA",
      "Unsloth",
      "RAG",
      "Agentic Workflows",
      "n8n",
      "PyTorch",
      "Computer Vision",
    ],
  },
  {
    title: "Web & Backend",
    icon: Server,
    accent: "from-emerald-500/20 to-transparent",
    items: [".NET Core", "Entity Framework", "FastAPI", "Flask", "React", "Streamlit", "Blazor"],
  },
  {
    title: "Data & Tooling",
    icon: Database,
    accent: "from-purple-500/20 to-transparent",
    items: ["NumPy", "Pandas", "Git", "llama.cpp", "Hugging Face", "Proteus", "Linux", "GGUF"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-400">
                / Toolkit
              </div>
              <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-[-0.03em] text-white">
                Technical <span className="text-gradient italic">stack.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              The languages, frameworks and tools I reach for when something
              needs to ship — fast, locally, at scale.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 0.07}>
                <TiltCard intensity={5} className="h-full">
                  <div className="bento group relative h-full overflow-hidden p-6">
                    <div
                      className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${g.accent} opacity-80 blur-3xl`}
                    />
                    <div className="relative flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {g.title}
                      </h3>
                    </div>

                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
