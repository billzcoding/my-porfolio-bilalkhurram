import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";
import { Building2, Trophy, Shield, Megaphone, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Exp = {
  org: string;
  role: string;
  period: string;
  body: string;
  icon: LucideIcon;
  variant?: "default" | "orange";
};

const items: Exp[] = [
  {
    org: "Fauji Fertilizer Company",
    role: "Software Engineering Intern (BTT) & Campus Ambassador",
    period: "Jul 2025 — Sep 2025",
    body: "Engineered high-concurrency Blazor WebAssembly architectures inside a unified .NET environment to map evaluations for 500+ employees. Built robust custom synchronizations pushing data accuracy to 97%.",
    icon: Building2,
  },
  {
    org: "GIKI Run Club",
    role: "Vice Captain",
    period: "Ongoing",
    body: "Leading team orchestration frameworks, pacing schedules, and physical logistics for regional running initiatives.",
    icon: Trophy,
    variant: "orange",
  },
  {
    org: "Military College of Signals — NUST",
    role: "Cybersecurity Intern",
    period: "Jul 2024 — Aug 2024",
    body: "Refactored and fine-tuned over 1,500 lines of operational C code tracking the Camellia cryptographic cipher, applying manual loop unrolling.",
    icon: Shield,
  },
  {
    org: "Cultural Dramatics & Entertainment Society",
    role: "Head of Technology & Digital Branding",
    period: "Oct 2024 — Present",
    body: "Supervised technical deployments spanning 40+ asset channels for major events, scaling user acquisition by 23%.",
    icon: Megaphone,
  },
  {
    org: "GIKI Consulting Group",
    role: "Subhead of Inductions",
    period: "Mar 2025 — Apr 2025",
    body: "Spearheaded strategic member selection campaigns, converting outreach pipelines into over 50 targeted sign-ups.",
    icon: Users,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-400">
                / Timeline & Influence
              </div>
              <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-[-0.03em] text-white">
                Professional Experience &{" "}
                <span className="text-gradient italic">Leadership.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              From cryptographic ciphers to high-concurrency Blazor systems —
              shipping where it matters.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric bento mosaic */}
        <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-12">
          {/* FFC — wide */}
          <Reveal className="md:col-span-6 lg:col-span-7" delay={0.05}>
            <ExpCard exp={items[0]} large />
          </Reveal>

          {/* Run Club — orange tinted */}
          <Reveal className="md:col-span-6 lg:col-span-5" delay={0.1}>
            <ExpCard exp={items[1]} />
          </Reveal>

          {/* NUST */}
          <Reveal className="md:col-span-3 lg:col-span-4" delay={0.15}>
            <ExpCard exp={items[2]} />
          </Reveal>

          {/* CDES — wide */}
          <Reveal className="md:col-span-3 lg:col-span-5" delay={0.2}>
            <ExpCard exp={items[3]} />
          </Reveal>

          {/* GCG */}
          <Reveal className="md:col-span-6 lg:col-span-3" delay={0.25}>
            <ExpCard exp={items[4]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ExpCard({ exp, large = false }: { exp: Exp; large?: boolean }) {
  const Icon = exp.icon;
  const orange = exp.variant === "orange";

  return (
    <TiltCard className="h-full" intensity={6}>
      <div
        className={`bento relative flex h-full flex-col overflow-hidden p-6 ${
          orange ? "border-orange-500/20" : ""
        }`}
        style={
          orange
            ? {
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0.04) 50%, rgba(23,23,23,0.6) 100%)",
              }
            : undefined
        }
      >
        {orange && (
          <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />
        )}

        <div className="relative flex items-start justify-between gap-4">
          <div
            className={`grid h-10 w-10 place-items-center rounded-xl ${
              orange
                ? "bg-orange-500/20 text-orange-300"
                : "bg-white/5 text-neutral-300"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-400">
            {exp.period}
          </span>
        </div>

        <h3
          className={`relative mt-6 font-bold leading-tight tracking-tight text-white ${
            large ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {exp.org}
        </h3>
        <div className="relative mt-1.5 text-sm text-neutral-400">{exp.role}</div>

        <p className="relative mt-4 text-sm leading-relaxed text-neutral-400">
          {exp.body}
        </p>
      </div>
    </TiltCard>
  );
}
