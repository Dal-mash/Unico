import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function DualTextSlider({
  topText,
  bottomText,
  className = "",
  verticalDistance = 50, // px vertical pop
  horizontalOffset = 10, // px horizontal slide
  durationVertical = 0.4,
  durationHorizontal = 0.3,
  delay = 0,
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: "-50px 0px -50px 0px" }); // triggers repeatedly
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  React.useEffect(() => {
    if (inView) {
      async function animateBoth() {
        // vertical slide for both at the same time
        await Promise.all([
          controlsTop.start({
            y: 0,
            opacity: 1,
            transition: { duration: durationVertical, delay },
          }),
          controlsBottom.start({
            y: 0,
            opacity: 1,
            transition: { duration: durationVertical, delay },
          }),
        ]);

        // horizontal slide for both at the same time
        await Promise.all([
          controlsTop.start({
            x: 0,
            transition: { duration: durationHorizontal, ease: "linear" },
          }),
          controlsBottom.start({
            x: 0,
            transition: { duration: durationHorizontal, ease: "linear" },
          }),
        ]);
      }
      animateBoth();
    } else {
      // reset positions for repeated scroll animation
      controlsTop.set({ y: verticalDistance, x: horizontalOffset, opacity: 0 });
      controlsBottom.set({
        y: -verticalDistance,
        x: -horizontalOffset,
        opacity: 0,
      });
    }
  }, [
    inView,
    controlsTop,
    controlsBottom,
    verticalDistance,
    horizontalOffset,
    durationVertical,
    durationHorizontal,
    delay,
  ]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden flex flex-col items-center ${className}`}
    >
      <motion.div
        initial={{ y: verticalDistance, x: horizontalOffset, opacity: 0 }}
        animate={controlsTop}
        className="inline-block"
      >
        {topText}
      </motion.div>

      <motion.div
        initial={{ y: -verticalDistance, x: -horizontalOffset, opacity: 0 }}
        animate={controlsBottom}
        className="inline-block"
      >
        {bottomText}
      </motion.div>
    </div>
  );
}
