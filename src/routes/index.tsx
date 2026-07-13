import { createFileRoute } from "@tanstack/react-router";
import "../styles/landing.css";
import { Announcement, Navbar } from "../components/landing/Nav";
import { Hero } from "../components/landing/Hero";
import {
  Trusted, Problem, Solution, Features, HowItWorks, Showcase, Benefits,
  Industries, Pricing, Comparison, Testimonials, Statistics, FAQ, FinalCTA, Footer,
  FloatingCTA, useRevealOnScroll,
} from "../components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CODIFACE — Sistem Absensi Pengenalan Wajah AI" },
      { name: "description", content: "CODIFACE adalah sistem absensi pengenalan wajah berbasis AI kelas enterprise. Check-in kurang dari 1 detik, validasi GPS, dashboard realtime, dan ekspor siap payroll." },
      { property: "og:title", content: "CODIFACE — Sistem Absensi Pengenalan Wajah AI" },
      { property: "og:description", content: "Absensi cukup dengan satu tatapan. Dipercaya 150+ perusahaan enterprise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CODIFACE — Absensi Pengenalan Wajah AI" },
      { name: "twitter:description", content: "Absensi enterprise dalam satu tatapan. Ditenagai AI." },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealOnScroll();
  return (
    <div className="cf-app">
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Showcase />
        <Benefits />
        <Industries />
        <Pricing />
        <Comparison />
        <Testimonials />
        <Statistics />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
