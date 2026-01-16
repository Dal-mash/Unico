import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FancyText = ({ text }) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false }); // triggers every time section enters/leaves

  const letters = text.split("");

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center text-7xl perspective-midrange"
    >
      <div className="text-center">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            initial={{
              rotateY: i % 2 === 0 ? 180 : -180,
              scale: 1,
              rotateX: i % 2 === 0 ? 90 : -90,
              rotateZ: i % 2 === 0 ? 10 : -10,
            }}
            animate={{
              rotateY: inView ? 0 : i % 2 === 0 ? 180 : -180,
              scale: inView ? 1 : 0,
              rotateX: inView ? 0 : i % 2 === 0 ? 90 : -90,
              rotateZ: inView ? 0 : i % 2 === 0 ? 70 : -70,
              x: inView ? 0 : 300,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: inView ? i * 0.05 : 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default FancyText;
