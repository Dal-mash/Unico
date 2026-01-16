import Header from "./Header.jsx";

export default function Hero() {
  // Set VIDEO_SRC to your video path (e.g. '/videos/hero.mp4' or an external URL)
  const VIDEO_SRC = "./public/blue-light.mp4";
  return (
    <section className="min-h-screen h-screen justify-center flex items-center bg-white text-slate-900 snap-start relative overflow-hidden">
      <Header />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex items-center justify-center h-full gap-8  ">
          <div className="text-center py-12 lg:py-24 flex flex-col space-y-10 lg:space-y-10">
            <div className="flex items-center gap-10 justify-center lg:w-1/2   mx-auto">
              <div className="flex-1 border-t border-gray-100"></div>
              <span className="text-white text-xl font-medium">
                Welcome to Unico
              </span>
              <div className="flex-1 border-t border-gray-100 w-1/4"></div>
            </div>
            <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight text-white">
              Shaping Emotions <br /> With Light
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
