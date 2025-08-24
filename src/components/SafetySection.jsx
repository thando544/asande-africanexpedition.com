import React from "react";
 

export default function SafetySection() {
  const features = [
    {
      id: 1,

      title: "Safety First",
      text: "Every journey is guided with unwavering commitment to the safety and comfort of our guests.",
    },
    {
      id: 2,

      title: "Expert Guides",
      text: "Our guides are experienced, professional, and dedicated to making your tour safe and memorable.",
    },
    {
      id: 3,

      title: "Trusted Experience",
      text: "Travelers worldwide trust us for secure, authentic, and enjoyable adventures.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="grid gap-12 md:grid-cols-3 text-center">
        {features.map((feature) => (
          <div key={feature.id} className="p-6 border-t-4 border-gray-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
