import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import FancyText from "./FancyText";
import { motion as Motion } from "framer-motion";

export default function ProjectsSection() {
  let text = "featured projects";
  return (
    <section
      id="projects"
      className="min-h-screen bg-[url('/public/projects_bg.png')] h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover text-slate-900 snap-start relative overflow-hidden"
    >
      <div className="pt-12 box flex-1 text-center">
        <h2 className="lg:text-7xl font-bold text-blue-900">
          <FancyText text="Featured Projects" />
        </h2>
      </div>

      <Motion.div
        className="relative  flex-5 w-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProjectsCarousel />
      </Motion.div>
    </section>
  );
}
