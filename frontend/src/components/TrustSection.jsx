import React from "react";

const metrics = [
  { label: "Projects", value: "120+" },
  { label: "Energy Savings", value: "30%" },
  { label: "Countries", value: "8" },
  { label: "Years", value: "15+" },
];

export default function TrustSection() {
  return (
    <section
      id="Trust"
      className="min-h-screen h-screen flex items-center bg-white text-slate-900 snap-start"
    >
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Why choose us</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>We integrate design and delivery for reliable outcomes.</li>
              <li>Independent product sourcing with lifecycle thinking.</li>
              <li>Focus on safety, efficiency and long-term performance.</li>
            </ul>
          </div>

          <div className="flex gap-6 items-center justify-around">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl font-extrabold text-blue-900">
                  {m.value}
                </div>
                <div className="mt-2 text-slate-600">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
