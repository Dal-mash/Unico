import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import TrustSection from "./components/TrustSection";
import Solutions from "./components/Solutions";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="h-screen  overflow-y-auto snap-y snap-mandatory scroll-smooth text-slate-900 no-scrollbar">
      <main className="snap-y snap-mandatory">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <TrustSection />
        {/* <Solutions /> */}
        <CTA />
      </main>
    </div>
  );
}

export default App;
