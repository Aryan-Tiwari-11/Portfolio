import React from "react";
import { GraduationCap, School } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Institute of Engineering & Science, IPS ACADEMY , Indore",
      year: "2022 – 2026",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      degree: "Class XII - PCM, Percentage - 88.6% ",
      institution: "New Era Public School, Narsinghpur, India",
      year: "2021",
      icon: <School className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "Class X, Percentage - 89.6% ",
      institution: "Swami Vidhyanand Ideal Public School, Narsinghpur, India",
      year: "2019",
      icon: <School className="w-6 h-6 text-white" />,
      color: "from-green-400 to-teal-500",
    },
  ];

  return (
    
    <section
      id="education"
      className="py-20 bg-gray-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex gap-6 items-start bg-gray-800/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 hover:shadow-3xl transform transition-all"
            >
              {/* Icon with gradient circle */}
              <div className={`p-4 rounded-full bg-gradient-to-r ${edu.color} shadow-lg`}>
                {edu.icon}
              </div>

              {/* Education Details */}
              <div>
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-blue-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-300 text-sm">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
