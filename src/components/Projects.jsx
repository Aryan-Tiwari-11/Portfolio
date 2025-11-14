import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Doctor Appointment Booking",
      description: "Full-stack MERN app with role-based authentication and Razorpay payment integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap"],
      github: "https://github.com/Aryan-Tiwari-11/Doctor-Appointment-Booking-system",
      live: "https://booking-frontend-coral-kappa.vercel.app",
      image: "/images/doctor.png",
    },
    {
      title: "WanderLust",
      description: "Property listing website with MapBox integration and user reviews.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      github: "https://github.com/Aryan-Tiwari-11/WanderLust",
      live: "https://wanderlust-la6k.onrender.com",
      image: "/images/wanderlust.png",
    },
    {
      title: "AI Trip Planner",
      description: "AI-powered travel planner using React, TailwindCSS, Firebase, and Google APIs.",
      tech: ["React.js", "Tailwind CSS", "Firebase", "Google API", "Gemini AI"],
      github: "https://github.com/Aryan-Tiwari-11/AI-Trip-Planner",
      live: "https://ai-trip-planner-iota-six.vercel.app",
      image: "/images/ai-trip.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
  My Projects
</h2>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center bg-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-3xl overflow-hidden shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-purple-400">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg font-medium hover:bg-gray-600 transition"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg font-medium hover:opacity-90 transition"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
