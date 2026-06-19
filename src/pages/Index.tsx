import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));

export default function Index() {
  return (
    <>
      <Seo
        title="Web Developer Portfolio | Student & Freelancer"
        description="Profesionalna tvorba webov na mieru. Moderny dizajn, responzivnost a rychle nacitanie."
        path="/"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Suspense fallback={<section className="h-24" aria-hidden="true" />}>
          <About />
          <Services />
          <Projects />
          <Contact />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
