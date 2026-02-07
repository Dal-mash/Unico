// Process.jsx
import React from "react";
import ProcessCards from "./ProcessCards.jsx";
import { motion as Motion } from "framer-motion";

const steps = [
  {
    title: "Site Analysis",
    desc: "Assess the site for constraints, services, and design potential.",
    img: "/Images/step_1.png",
  },
  {
    title: "Concept Design",
    desc: "Develop initial layouts, sketches, and spatial ideas.",
    img: "/Images/step_2.jpg",
  },
  {
    title: "Specification",
    desc: "Select materials, fixtures, and performance criteria.",
    img: "/Images/step_3.jpg",
  },
  {
    title: "Installation",
    desc: "Coordinate delivery and on-site implementation.",
    img: "/Images/step_4.jpg",
  },
  {
    title: "Commissioning",
    desc: "Test, calibrate, and hand over completed works.",
    img: "/Images/step_5.jpg",
  },
];

export default function Process() {
  return (
    <section
      id="Process"
      className="min-h-screen bg-[url('/Images/bg1.svg')] bg-cover flex items-center justify-center text-slate-900 snap-start"
    >
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="flex justify-between align-middle lg:flex-row items-center gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 text-center">
            <Motion.h2
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-6xl font-bold text-blue-900"
            >
              Our Process
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="mt-3 lg:text-lg font-bold text-slate-600"
            >
              A clear, step-based approach to delivering built work.
            </Motion.p>
          </div>

          {/* <DualTextSlider
            topText={
              <h1 className="mt-4  text-7xl font-bold text-gray-700">
                Bespoke <span className="text-blue-900">Lighting</span>
              </h1>
            }
            bottomText={
              <h1 className="mt-4 text-7xl font-bold text-gray-700">
                <span className="text-blue-900">Solutions</span> With Focus
              </h1>
            }
            verticalDistance={50} // how far vertically to pop from
            horizontalOffset={25} // optional horizontal slide
            durationVertical={0.4} // vertical slide duration
            durationHorizontal={0.3} // horizontal slide duration
            delay={0.2} // initial delay"
            className="lg:w-1/2 text-center"
          /> */}

          {/* Right Side: Cards */}
          <div className="lg:w-1/2 flex justify-center">
            <ProcessCards steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
