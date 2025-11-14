import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "Future Interns",
      duration: "Oct 2025 – Nov 2025",
      details: [
        "Built and deployed dynamic web projects, including a personal portfolio and e-commerce website.",
        "Developed responsive and scalable applications using the MERN stack with seamless frontend and backend integration"
      ],
      icon: <Briefcase className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    // Add more experiences here
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          Experience
        </h2>

        <div className="overflow-x-auto flex gap-6 pb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-gray-800/60 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 hover:shadow-3xl transition-all flex-shrink-0"
            >
              {/* Icon Circle */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r ${exp.gradient} shadow-lg`}>
                {exp.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-300 text-sm mb-3">{exp.duration}</p>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {exp.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
