import { delay, motion } from "framer-motion";
import TextSlider from "./DualTextSlider";

const container = {
  hidden: {}, // add hidden so it matches initial
  show: {
    transition: {
      staggerChildren: 0.05, // sequential pop
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 }, // smaller y so it moves faster
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.5,
    },
  },
};

const services = [
  {
    title: "Lighting Design",
    desc: "Site analysis, concept design, and photometric modelling",
    icon: "/public/light_design_icon.svg",
  },
  {
    title: "Product Sourcing",
    desc: "Specify and procure fixtures and controls",
    icon: "/public/shipping_icon.svg",
  },
  {
    title: "Installation",
    desc: "Certified installation and commissioning",
    icon: "/public/shipping_icon.svg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center text-slate-900 snap-start overflow-hidden bg-[url('/public/service_bg.png')] bg-cover bg-center"
    >
      <div className="max-w-3xl text-center mx-auto px-4">
        <p className="text-2xl mb-5 w-fit border-3 border-blue-300  px-7 py-2 rounded-3xl text-blue-300 inline-block">
          Our Services
        </p>
        <TextSlider
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
          className="mb-10 overflow-visible"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px" }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 w-full max-w-5xl place-items-center"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={card}
            className="service-card group relative p-6 border-2 border-blue-900 rounded-4xl shadow-sm w-full max-w-xs flex flex-col items-center justify-center text-center transition-all duration-300 bg-white hover:shadow-lg hover:scale-[1.04] overflow-hidden h-64"
          >
            {/* default view */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:-bottom-full">
              <img
                src={s.icon}
                className="w-28 h-28 object-contain mb-3"
                alt=""
              />
              <h3 className="text-2xl font-semibold text-blue-900">
                {s.title}
              </h3>
            </div>

            {/* hover view */}
            <div className="absolute inset-0 bottom-full flex items-center justify-center px-4 text-slate-600 text-xl leading-snug opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-0">
              {s.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
