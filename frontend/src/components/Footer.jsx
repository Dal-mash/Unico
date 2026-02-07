import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-slate-900 mt-auto w-full text-white overflow-hidden"
    >
      <div className="max-w-7xl relative mx-auto px-6 py-12 flex flex-col items-center gap-7 text-center">
        {/* Logo Section */}
        <div className=" absolute w-16 h-16">
          {/* Replace with your actual logo */}
        </div>

        {/* Brand & Socials */}
        <div className="flex  flex-col items-center font- gap-6">
          {/* Logo/Brand Name */}
          <div className="relative h-20 flex items-center justify-center">
            {/* <GradientText
              colors={[
                "rgba(0, 139, 199, 1)",
                "rgba(0, 54, 112, 1)",
                "rgba(0, 54, 112, 1)",
              ]}
              animationSpeed={5}
              showBorder={false}
              className="text-9xl font-extrabold tracking-tight relative z-10"
              direction="vertical"
            >
              UNICO
            </GradientText> */}
            <h2
              className="text-9xl text-transparent z-5   font-extrabold tracking-tight relative"
              style={{
                textShadow: "1px 1px 2px rgba(28, 57, 142, 0.2)",
                WebkitTextStroke: "1px rgba(0,0,0,0.3)",
              }}
            >
              UNICO
            </h2>
          </div>

          <div className="flex  z-10 gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaWhatsapp size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Unico. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
