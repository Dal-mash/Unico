import React from "react";

const spaces = [
  { title: "Parks", desc: "Pathways, features and planted areas" },
  { title: "Roads", desc: "Safety-oriented street lighting" },
  { title: "Commercial", desc: "Plazas, retail and campus hubs" },
  { title: "Industrial", desc: "Large-scale, performance-focused solutions" },
];

export default function Solutions() {
  return (
    <section
      id="Solutions"
      className="min-h-screen h-screen flex items-center bg-white text-slate-900 snap-start"
    >
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-4xl font-bold text-blue-900">Solutions by space</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-lg border border-slate-100 shadow-sm"
            >
              <div className="w-full h-36 bg-slate-100 rounded-md mb-4 flex items-center justify-center text-slate-400">
                Image
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
