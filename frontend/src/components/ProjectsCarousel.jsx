import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Urban Park Lighting",
    img: "/public/images/project_1.jpg",
  },
  {
    id: 2,
    title: "Corporate Campus Illumination",
    img: "/public/images/project_2.jpg",
  },
  {
    id: 3,
    title: "Residential Lighting",
    img: "/public/images/project_3.jpg",
  },
  {
    id: 4,
    title: "Historic Building Facade",
    img: "/public/images/project_4.jpg",
  },
  {
    id: 5,
    title: "Bridge and Pathway Lighting",
    img: "/public/images/project_5.jpg",
  },
  {
    id: 6,
    title: "Public Art Installation",
    img: "/public/images/project_6.jpg",
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

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-full h-4/5 flex justify-center items-center overflow-show">
      {projects.map((project, i) => {
        // Calculate offset relative to current
        let offset = i - current;
        if (offset < -Math.floor(projects.length / 2))
          offset += projects.length;
        if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

        const hidden = Math.abs(offset) > 2;

        const isCenter = offset === 0;

        return (
          <div
            key={project.id}
            className="absolute top-0  rounded-xl overflow-hidden shadow-2xl cursor-pointer"
            style={{
              width: isCenter ? "50vw" : "35vw",
              height: isCenter ? "70vh" : "70vh",
              transform: `
                translateX(${offset * 40}vw)
                scale(${isCenter ? 1 : 0.8})
                rotateY(${offset * 15}deg)
                rotateZ(${offset * 10}deg)
              `,
              zIndex: isCenter ? 20 : 10,
              opacity: hidden ? 0 : 1,
              pointerEvents: hidden ? "none" : "auto",
              transition: "all 0.7s ease-in-out",
              willChange: "transform",
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
              <div className="absolute h-full top-3 left-0 right-0 text-white text-center">
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
