import React from "react";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-8 h-8 text-white" />,
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
      color: "from-blue-500 to-purple-500",
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8 text-white" />,
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Authentication"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & Cloud",
      icon: <Cloud className="w-8 h-8 text-white" />,
      items: ["Git", "GitHub", "VS Code", "Render", "Vercel", "Firebase"],
      color: "from-indigo-500 to-teal-500",
    },
    {
      category: "coursework",
      icon: <Wrench className="w-8 h-8 text-white" />,
      items: ["DSA", "OOPS", "Operating System","DBMS", "Computer network"],
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          My Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 flex flex-col items-center shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 border border-gray-700"
            >
              {/* Icon with gradient circle */}
              <div className={`p-4 rounded-full mb-4 bg-gradient-to-r ${skill.color} shadow-lg`}>
                {skill.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-4 text-center">{skill.category}</h3>

              {/* Skills List */}
              <div className="flex flex-wrap justify-center gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700/40 text-white rounded-full text-sm font-medium backdrop-blur-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
