import { delay, motion } from "framer-motion";

const panelVariants = {
  hidden: { opacity: 0, y: -50, height: 0 },
  visible: {
    opacity: 1,
    y: 25,
    height: "auto",
    transition: {
      duration: 1,
      ease: "smooth",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "linear", duration: 0.8 },
  },
};

export default function MenuPanel({ onNavigate }) {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="
        absolute -left-21 top-0 overflow-hidden mt-3 w-56 origin-top-right
        rounded-xl p-3 flex flex-col gap-5
        backdrop-blur-md border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]
      "
    >
      <motion.button
        variants={itemVariants}
        onClick={() => onNavigate("services")}
        className="text-center text-3xl font-bold text-blue-900 hover:text-blue-700 transition-all hover:cursor-pointer"
      >
        Services
      </motion.button>

      <motion.button
        variants={itemVariants}
        onClick={() => onNavigate("Process")}
        className="text-center text-3xl font-bold text-blue-900 hover:text-blue-700 transition-all hover:cursor-pointer"
      >
        Process
      </motion.button>

      <motion.button
        variants={itemVariants}
        onClick={() => onNavigate("projects")}
        className="text-center text-3xl font-bold text-blue-900 hover:text-blue-700 transition-all hover:cursor-pointer"
      >
        Projects
      </motion.button>
      <motion.button
        variants={itemVariants}
        onClick={() => onNavigate("Solutions")}
        className="text-center text-3xl font-bold text-blue-900 hover:text-blue-700 transition-all hover:cursor-pointer"
      >
        Solutions
      </motion.button>
      <motion.button
        variants={itemVariants}
        onClick={() => onNavigate("contact")}
        className="text-center text-3xl font-bold text-blue-900 hover:text-blue-700 transition-all hover:cursor-pointer"
      >
        Contact
      </motion.button>
    </motion.div>
  );
}
