import React from "react";
import { STORE } from "../context/AppContext";

export default function Experience() {
  const { light } = STORE();

  const experiences = [
    {
      role: "Frontend Engineer",
      company: "TripFactory – Travel & Holiday Booking",
      duration: "Oct – Dec 2025 | Bengaluru",
      responsibilities: [
        "Built complete Flight Booking module with complex filters (airline, stops, timings, price) and shareable URL-based sorting.",
        "Developed Hotel Search with multi-faceted filters, room selection, image galleries, and real-time availability.",
        "Implemented Car Rental module including autocomplete, date selection, and multi-step booking flows.",
        "Built PDF itinerary generator using Puppeteer to create print-optimized trip documents.",
        "Integrated internationalization (i18n) using next-intl with locale routing and multi-language UI.",
        "Created reusable UI components using Shadcn/ui + Tailwind; designed custom date pickers and filter panels.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 transition-colors ${
        light ? "bg-white" : "bg-neutral-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-semibold ${
              light ? "text-neutral-900" : "text-white"
            }`}
          >
            Experience
          </h2>
          <p
            className={`mt-3 text-base ${
              light ? "text-neutral-600" : "text-neutral-400"
            }`}
          >
            Practical work that strengthened my engineering, UI design, and
            production-level development skills.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-xl border p-7 transition-all duration-200
                ${
                  light
                    ? "bg-white border-neutral-200 hover:shadow-lg"
                    : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                }
                hover:-translate-y-1
              `}
            >
              {/* Title + Company */}
              <h3
                className={`text-2xl font-medium ${
                  light ? "text-neutral-900" : "text-white"
                }`}
              >
                {exp.role}
              </h3>
              <p
                className={`text-sm mt-1 mb-4 ${
                  light ? "text-indigo-600" : "text-indigo-400"
                }`}
              >
                {exp.company}
              </p>

              {/* Duration */}
              <p
                className={`text-sm mb-6 ${
                  light ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                {exp.duration}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className={`text-sm leading-relaxed flex gap-2 ${
                      light ? "text-neutral-700" : "text-neutral-300"
                    }`}
                  >
                    <span className="text-indigo-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
