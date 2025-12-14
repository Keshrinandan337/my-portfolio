import Hero from "./components/Hero";
import About from "./components/About";
import InfoCard from "./components/InfoCard";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";
import TechnicalExperience from "./components/TechnicalExperience";
import CertificateSection from "./components/CertificateSection";
import AllCertificates from "./components/AllCertificates";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Wrapper for Home Page so we can use useLocation here
function HomeWrapper() {
  const location = useLocation();

  useEffect(() => {
    // 🔒 Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If coming back with scroll state
    if (location.state?.scrollTo) {
      let targetId = null;

      if (location.state.scrollTo === "projects") {
        targetId = "projects";
      }

      if (location.state.scrollTo === "certificates") {
        targetId = "certifications";
      }

      if (targetId) {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }

      // 🧹 Clear history state so refresh starts from top
      window.history.replaceState({}, document.title);
    } else {
      // ✅ Normal load / refresh → go to Hero
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen relative">

      {/* LEFT INFO CARD */}
      <div className="hidden lg:block absolute left-[4%] top-[4%] z-20">
        <InfoCard />
      </div>

      {/* RIGHT SKILL CARD */}
      <div className="hidden lg:block absolute right-[6%] top-[4.5%] z-20">
        <Skills />
      </div>

      {/* HERO CENTERED */}
      <div className="flex justify-center items-center pt-10 pb-20">
        <Hero />
      </div>

      {/* ABOUT SECTION */}
      <About />

      {/* PROJECTS SECTION */}
      <Projects />

      {/* TECHNICAL EXPERIENCE SECTION */}
      <TechnicalExperience />

      {/* CERTIFICATIONS SECTION */}
      <CertificateSection />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<HomeWrapper />} />

        {/* ALL PROJECTS PAGE */}
        <Route path="/all-projects" element={<AllProjects />} />

        {/* ALL CERTIFICATES PAGE */}
        <Route path="/all-certificates" element={<AllCertificates />} />

      </Routes>
    </BrowserRouter>
  );
}
