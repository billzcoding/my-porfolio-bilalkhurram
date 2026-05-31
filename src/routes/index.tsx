import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { AmbientOrbs } from "@/components/AmbientOrbs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raja Bilal Khurram — AI Engineer & Systems Architect" },
      {
        name: "description",
        content:
          "AI Engineer building localized, low-latency agentic applications and high-concurrency systems. Based in Pakistan, GIK Institute.",
      },
      { property: "og:title", content: "Raja Bilal Khurram — AI Engineer & Systems Architect" },
      {
        property: "og:description",
        content:
          "AI Engineer building localized, low-latency agentic applications and high-concurrency systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "#0D0D0E" }}>
      <AmbientOrbs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
