import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp.jsx";

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, y: 20 },
  visible: {
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "smooth", type: "spring" },
  },
};

const metrics = [
  { label: "Projects", value: "120+" },
  { label: "Energy Savings", value: "30%" },
  { label: "Countries", value: "8" },
  { label: "Years", value: "15+" },
];

const bgImg = "url('/Images/trust.jpg')";

export default function TrustSection() {
  return (
    <section
      id="Trust"
      className="min-h-screen bg-transparent bg-[url('/projects_bg.png')] bg-no-repeat bg-cover h-screen flex snap-start"
    >
      {/* Text on left with bg photo */}
      <motion.div
        className="flex-1 h-screen relative bg-cover z-10 bg-center"
        style={{
          backgroundImage: bgImg,
          clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
        }}
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="text-6xl font-bold text-blue-900 mb-8">
              Why choose us
            </h2>
            <ul className="space-y-3 text-base font-light text-white/90 bg-black/20 p-8 rounded-xl">
              <li>We integrate design and delivery for reliable outcomes.</li>
              <li>Independent product sourcing with lifecycle thinking.</li>
              <li>Focus on safety, efficiency and long-term performance.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Stats on right */}
      <motion.div
        className="flex-1 h-screen flex items-center justify-center "
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false }}
      >
        <div className="flex gap-6">
          {metrics.map((m, index) => (
            <div key={m.label} className="text-center">
              <motion.div
                className="w-28 h-28 rounded-full  text-blue-900 border-4 border-blue-400 flex items-center justify-center text-3xl font-bold shadow-xl hover:shadow-2xl  transition-all duration-30 cursor-pointer "
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 25px 50px rgba(30, 57, 142, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex  items-center justify-center text-center">
                  <CountUp
                    from={0}
                    to={m.value.replace("+", "").replace("%", "")}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  {m.value.includes("+") && "+"}
                  {m.value.includes("%") && "%"}
                </span>
              </motion.div>
              <div className="mt-4 text-slate-900 font-semibold">{m.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
