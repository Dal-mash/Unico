import React, { useState, useEffect } from "react";

const projects = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop&crop=top&sat=-30&exp=15&blend=000000&blend-mode=multiply`,
}));

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-full h-150 flex justify-center items-center overflow-hidden">
      {projects.map((project, i) => {
        // Calculate offset relative to current
        let offset = i - current;
        if (offset < -Math.floor(projects.length / 2))
          offset += projects.length;
        if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

        // Only render cards that are close to center (offset -2 to 2)
        if (Math.abs(offset) > 2) return null;

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
              `,
              zIndex: isCenter ? 20 : 10,
              opacity: Math.abs(offset) > 2 ? 0 : 1,
              transition: "all 0.7s ease-in-out",
            }}
            onClick={() => setCurrent(i)}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
            />
            {isCenter && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
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
