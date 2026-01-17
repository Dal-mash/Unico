// ProcessCards.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProcessCards = ({ steps }) => {
  const [hovered, setHovered] = useState(null);
  const expandDuration = 1;

  return (
    <div className="flex gap-2 w-full max-w-200 h-110">
      {steps.map((step, index) => {
        const isActive = hovered === index;
        const isOdd = index % 2 === 0;

        return (
          <motion.div
            key={index}
            layout
            className={`rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center ${
              isActive
                ? "border border-blue-900 bg-white"
                : "border border-gray-200 bg-gray-50"
            }`}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            style={{
              flex: isActive ? 10 : hovered === null ? 1 : 0,
            }}
            initial={{ y: isOdd ? 150 : -150 }}
            whileInView={{ y: 0 }}
            transition={{
              type: "spring",
              duration: expandDuration,
              delay: index * 0.01,
            }}
          >
            {/* Title (only visible when not expanded) */}
            {!isActive && (
              <motion.span
                className="text-blue-900 text-xl font-bold uppercase text-center whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {step.title}
              </motion.span>
            )}

            {/* Description (enters AFTER expand, exits BEFORE collapse) */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{
                  duration: 0.25,
                  delay: expandDuration * 0.25,
                }}
                className="px-6 py-1.5  bg-[url('/public/images/step_2.jpg')] bg-cover text-white text-center text-lg font-semibold  leading-relaxed h-full w-full"
              >
                {step.desc}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProcessCards;
