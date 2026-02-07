import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";

export default function TextHoverEffect({
  text,
  fontSize = 56,
  duration = 0.25,
}) {
  const svgRef = useRef(null);
  const maskRef = useRef(null);
  const iconRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (!iconRef.current) return;

    gsap.set(iconRef.current, { scale: 1, rotate: 0 });
  }, []);

  const updateMask = (x, y) => {
    if (!svgRef.current || !maskRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const cx = ((x - rect.left) / rect.width) * 100;
    const cy = ((y - rect.top) / rect.height) * 100;

    gsap.to(maskRef.current, {
      attr: {
        cx: `${cx}%`,
        cy: `${cy}%`,
      },
      duration,
      ease: "power3.out",
    });
  };

  const onEnter = () => {
    setHovered(true);

    gsap.to(iconRef.current, {
      scale: 1.2,
      rotate: 45,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    setHovered(false);

    gsap.to(iconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div className="relative inline-flex items-center gap-4">
      {/* SVG TEXT */}
      <svg
        ref={svgRef}
        viewBox="0 0 300 100"
        className="w-75 h-25 select-none"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onMouseMove={(e) => updateMask(e.clientX, e.clientY)}
        onTouchMove={(e) => {
          const t = e.touches[0];
          updateMask(t.clientX, t.clientY);
        }}
      >
        <defs>
          <linearGradient id="textGradient">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="30%" stopColor="#ef4444" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <radialGradient
            id="revealMask"
            ref={maskRef}
            cx="50%"
            cy="50%"
            r="25%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Base outline */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-transparent stroke-neutral-300 dark:stroke-neutral-700"
          strokeWidth="0.3"
          style={{
            fontSize,
            fontFamily: "Helvetica",
            fontWeight: "bold",
            opacity: hovered ? 0.3 : 1,
          }}
        >
          {text}
        </text>

        {/* Gradient reveal */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          mask="url(#textMask)"
          className="fill-transparent"
          strokeWidth="0.35"
          style={{
            fontSize,
            fontFamily: "Helvetica",
            fontWeight: "bold",
            opacity: hovered ? 1 : 0,
          }}
        >
          {text}
        </text>
      </svg>

      {/* ICON */}
      <div ref={iconRef} className="text-neutral-800 dark:text-neutral-200">
        <FiArrowUpRight size={28} />
      </div>
    </div>
  );
}
