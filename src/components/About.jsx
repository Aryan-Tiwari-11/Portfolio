import React from "react";
import { Github, Linkedin, Code, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          About Me
        </h2>

        {/* Glassmorphism Card */}
        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-700 transform transition-all hover:scale-105 hover:shadow-2xl">
          
          {/* Profile Image with Gradient Border */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 rounded-xl p-1 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
              <img
                src="/images/hero.jpg"
                alt="Aryan Tiwari"
                className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-lg flex-1">
            <p>
              I'm <span className="font-semibold text-purple-400">Aryan Tiwari</span>, a 4th-year B.Tech CSE student at IPS Academy, Indore, with a strong foundation in full-stack development and a deep passion for Data Structures and Algorithms (DSA). I enjoy solving complex coding problems on LeetCode and GeeksforGeeks, continuously sharpening my problem-solving skills.
            </p>

            {/* Technical Expertise */}
            <div className="space-y-2">
              <p className="font-semibold text-pink-400">💡 Technical Expertise:</p>
              <ul className="list-disc list-inside text-gray-200">
                <li>MERN Full-Stack Development</li>
                <li>Data Structures & Algorithms in C++ (problem solving)</li>
                <li>Core CS Fundamentals (OOPS, OS, DBMS)</li>
                <li>Solved 250+ DSA questions on LeetCode & GeeksforGeeks</li>
              </ul>
            </div>

            {/* Personal Traits */}
            <p>
              I am disciplined and self-motivated, thriving in challenging environments. Always eager to learn new technologies, I am committed to building scalable and efficient solutions while collaborating effectively in a team.
            </p>

            {/* Social Links with Gradient Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a href="https://github.com/Aryan-Tiwari-11" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:scale-105 transition transform shadow-md hover:shadow-lg">
                <Github size={18}/> GitHub
              </a>
              <a href="https://www.linkedin.com/in/aryan-tiwwarii" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white font-medium hover:scale-105 transition transform shadow-md hover:shadow-lg">
                <Linkedin size={18}/> LinkedIn
              </a>
              <a href="https://leetcode.com/u/AryanTiwari11" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl text-white font-medium hover:scale-105 transition transform shadow-md hover:shadow-lg">
                <Code size={18}/> LeetCode
              </a>
              <a href="https://www.geeksforgeeks.org/user/aryantiwari11/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl text-white font-medium hover:scale-105 transition transform shadow-md hover:shadow-lg">
                <BookOpen size={18}/> GFG
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
