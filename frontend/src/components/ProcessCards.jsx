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

        // compressed: when some card is hovered but this one is not active
        const isCompressed = hovered !== null && !isActive;

        return (
          <motion.div
            key={index}
            layout
            className={`relative rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center border ${
              isActive ? "border-blue-900" : "border-gray-200"
            }`}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            style={{
              flex: isActive ? 10 : hovered === null ? 1 : 0,
              // Keep the image at a fixed size so it doesn't stretch during flex transitions.
              backgroundImage: `url('${step.img || "/Images/step_2.jpg"}')`,
              // Use a fixed pixel size so the visible portion is simply cropped, not scaled.
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
            initial={{ y: isOdd ? 150 : -150 }}
            whileInView={{ y: 0 }}
            transition={{
              type: "spring",
              duration: expandDuration,
              delay: index * 0.01,
            }}
          >
            {/* Overlay to smoothly switch between image and solid color */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                backgroundColor: isCompressed
                  ? "#f3f4f6"
                  : isActive
                    ? "rgba(0,0,0,0.45)"
                    : "transparent",
                opacity: isCompressed || isActive ? 1 : 0,
              }}
            />

            {/* Title (only visible when not expanded) */}
            {!isActive && (
              <motion.span
                className={`relative z-10 text-xl font-bold uppercase text-center whitespace-nowrap ${isCompressed ? "text-blue-900" : "text-white"}`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  textShadow: "1px 1px 2px rgba(28, 57, 142, 1)",
                  WebkitTextStroke: "1px rgba(0,0,0,0.3)",
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
                className="relative z-10 px-6 py-1.5 text-white text-center text-lg font-semibold leading-relaxed h-full w-1/2"
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
