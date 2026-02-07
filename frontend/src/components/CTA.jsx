import React from "react";
import Footer from "./Footer";

export default function CTA() {
  return (
    <section
      id="contact"
      className="min-h-screen h-screen flex justify-center  items-center flex-col bg-white text-slate-900 snap-start"
    >
      <div className="text-center mt-auto  px-6 lg:px-20">
        <h2 className="text-5xl font-extrabold text-blue-900">
          Ready to light your space?
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Contact us for a site review and tailored proposal. We focus on
          outcomes that last.
        </p>
        <div className="mt-8">
          <button className="px-8 py-4 hover:cursor-pointer bg-blue-900 text-white rounded-md text-lg font-semibold">
            Get started
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
