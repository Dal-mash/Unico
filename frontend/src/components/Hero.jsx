import Header from "./Header.jsx";
import LightRays from "./LightRays.jsx";
import Particles from "./Particles.jsx";
import PrismaticBurst from "./Rays.jsx";
import GradientText from "./GradientText.jsx";
import Button from "./HeroButton.jsx";
import GlareHover from "./HoverGlare.jsx";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-blend-overlay h-screen flex items-center justify-center overflow-hidden text-slate-900 snap-start">
      <Header />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor=""
          raysSpeed={1}
          lightSpread={1}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0}
          distortion={0}
          className=""
          pulsating={true}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <PrismaticBurst
          animationType="rotate3d"
          intensity={5}
          speed={0.2}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={29}
          mixBlendMode="lighten"
          colors={["#003670", "#008bc7", "#ffffff"]}
        />
      </div>*/}
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 20,
        }}
      >
        <Particles
          particleColors={["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"]}
          particleCount={300}
          particleSpread={20}
          speed={0.5}
          particleBaseSize={900}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={true}
          pixelRatio={1}
        />
      </div> */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 -z-10"
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex items-center justify-center h-auto gap-8  ">
          <div className="text-center  py-12 lg:py-24 flex flex-col space-y-10 lg:space-y-10">
            <div className="text-gray-300 flex items-center gap-10 justify-center lg:w-1/2   mx-auto">
              <div className="flex-1 border-t "></div>
              <span className=" text-xl font-medium">Welcome to Unico</span>
              <div className="flex-1 border-t  w-1/4"></div>
            </div>
            {/* <GradientText
              className="text-5xl lg:text-8xl  w-4xl font-semibold leading-tight "
              text="Shaping Emotions With Light"
              colors={["white", "gray", "white", "white"]}
              animationSpeed={3}
            >
              Shaping Emotions With Light
            </GradientText> */}
            <h1
              className="text-5xl text-white lg:text-8xl w-4xl font-bold leading-tight "
              style={{
                textShadow: "2px 2px 5px rgba(28, 57, 142, 0.2)",
                WebkitTextStroke: "3px rgba(28, 57, 142, 0.2)",
                fontFamily: "Source Serif 4, sans-serif",
              }}
            >
              Shaping Emotions With Light
            </h1>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
