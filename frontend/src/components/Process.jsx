// Process.jsx
import React from "react";
import ProcessCards from "./ProcessCards.jsx";

const steps = [
  {
    title: "Site Analysis",
    desc: "Assess the site for constraints, services, and design potential.",
  },
  {
    title: "Concept Design",
    desc: "Develop initial layouts, sketches, and spatial ideas.",
  },
  {
    title: "Specification",
    desc: "Select materials, fixtures, and performance criteria.",
  },
  {
    title: "Installation",
    desc: "Coordinate delivery and on-site implementation.",
  },
  {
    title: "Commissioning",
    desc: "Test, calibrate, and hand over completed works.",
  },
];

export default function Process() {
  return (
    <section
      id="Process"
      className="min-h-screen bg-[url('/public/projects_bg.png')] bg-cover flex items-center text-slate-900 snap-start"
    >
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="flex justify-between lg:flex-row items-start gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 text-center">
            <h2 className="text-6xl font-bold text-blue-900">Our Process</h2>
            <p className="mt-3 text-slate-600">
              A clear, step-based approach to delivering built work.
            </p>
          </div>

          {/* Right Side: Cards */}
          <div className="lg:w-1/2 flex justify-center">
            <ProcessCards steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
