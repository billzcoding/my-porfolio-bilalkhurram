import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { GraduationCap, Rocket, Code2, Brain } from "lucide-react";

const stats = [
  { label: "Years building", value: "3+", icon: Code2 },
  { label: "Production users shipped to", value: "500+", icon: Rocket },
  { label: "Languages in active use", value: "7", icon: Brain },
  { label: "GIKI Computer Science", value: "BS '27", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-400">
                / About
              </div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                I engineer systems that{" "}
                <span className="text-gradient italic">refuse to break</span> —
                under load, at the edge, offline.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
                <p>
                  I&apos;m a Computer Science undergrad at the{" "}
                  <span className="text-white">Ghulam Ishaq Khan Institute</span>,
                  specializing in applied AI and high-concurrency backend
                  architecture. My work spans fine-tuned local LLMs, offline
                  computer vision, and enterprise .NET systems serving hundreds
                  of users.
                </p>
                <p>
                  At <span className="text-white">Fauji Fertilizer Company</span>,
                  I shipped a Blazor WebAssembly platform digitizing appraisals
                  for 500+ employees with a 97% data accuracy sync engine. At{" "}
                  <span className="text-white">NUST Military College of Signals</span>,
                  I optimized 1,500+ lines of cryptographic C code for the
                  Camellia cipher.
                </p>
                <p>
                  Outside work, I lead technology and digital branding for
                  GIKI&apos;s Cultural Dramatics &amp; Entertainment Society —
                  because shipping is also a creative discipline.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <TiltCard key={s.label} intensity={5}>
                      <div className="bento relative h-full overflow-hidden p-5">
                        <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl" />
                        <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-orange-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {s.value}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                          {s.label}
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
