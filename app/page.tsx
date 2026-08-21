import dynamic from "next/dynamic";
import type { Metadata } from "next";

import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

// Carga diferida: motor de partículas es pesado y no aporta al primer render.
const CoverParticles = dynamic(
  () => import("@/components/cover-particles").then((mod) => mod.CoverParticles),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Diego Velasquez | Desarrollador Full Stack",
  description: "Portfolio de Diego Velasquez, desarrollador web full stack especializado en automatización, IA e integración de procesos.",
};

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-auto bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
