import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { GraduationCap, Code2, Brain } from "lucide-react";

const stats = [
  { label: "Years building", value: "3+", icon: Code2 },
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
                AI Engineer based in Pakistan.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
                <p>
                  I&apos;m a Computer Science student at the{" "}
                  <span className="text-white">Ghulam Ishaq Khan Institute</span>,
                  focused on applied AI and backend engineering.
                </p>
                <p>
                  I&apos;ve interned at{" "}
                  <span className="text-white">Fauji Fertilizer Company</span>{" "}
                  building a Blazor WebAssembly platform, and at{" "}
                  <span className="text-white">NUST MCS</span> working on
                  cryptographic C code for the Camellia cipher.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
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
