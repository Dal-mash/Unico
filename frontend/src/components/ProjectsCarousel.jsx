import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Urban Park Lighting",
    img: "/Images/project_1.jpg",
  },
  {
    id: 2,
    title: "Corporate Campus Illumination",
    img: "/Images/project_2.jpg",
  },
  {
    id: 3,
    title: "Residential Lighting",
    img: "/Images/project_3.jpg",
  },
  {
    id: 4,
    title: "Historic Building Facade",
    img: "/Images/project_4.jpg",
  },
  {
    id: 5,
    title: "Bridge and Pathway Lighting",
    img: "/Images/project_5.jpg",
  },
  {
    id: 6,
    title: "Public Art Installation",
    img: "/Images/project_6.jpg",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  // Preload images on mount
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.img;
    });
  }, []);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-full h-4/5 flex justify-center items-center overflow-show">
      {projects.map((project, i) => {
        // Calculate offset relative to current (circular)
        let offset = i - current;
        if (offset < -Math.floor(projects.length / 2))
          offset += projects.length;
        if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

        // Only show center + one card on each side (3 visible total)
        const visibleRange = 1;
        const hidden = Math.abs(offset) > visibleRange;

        const isCenter = offset === 0;

        // Positioning: visible cards sit at +/- spacing; hidden cards jump offscreen
        const spacingVW = 46; // horizontal spacing between visible cards
        const offscreenX = 120; // far offscreen position for hidden cards

        return (
          <div
            key={project.id}
            className="absolute top-0  rounded-xl overflow-hidden  shadow-2xl cursor-pointer"
            style={{
              width: isCenter ? "52vw" : "36vw",
              height: "70vh",
              transform: hidden
                ? `translateX(${offset > 0 ? offscreenX : -offscreenX}vw) scale(0.85)`
                : `translateX(${offset * spacingVW}vw) scale(${isCenter ? 1.05 : 0.85}) rotateY(${offset * 10}deg) rotateX(${offset * 0}deg)`,
              zIndex: isCenter ? 20 : 10,
              opacity: hidden ? 0 : 1,
              pointerEvents: hidden ? "none" : "auto",
              transition: hidden
                ? "opacity 200ms linear" // jump transform for hidden items (no cross-screen motion)
                : "transform 950ms cubic-bezier(.22,.9,.17,1), opacity 520ms linear",
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            onClick={() => setCurrent(i)}
          >
            {!hidden && (
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            {isCenter && (
              <div className="absolute h-full top-3 left-0 right-0 blur text-white text-center">
                <h3 className="font-bold text-xl md:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base">
                  Outdoor lighting + controls
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
