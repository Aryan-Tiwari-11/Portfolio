import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Dark overlay with subtle blur */}
      <div className="absolute inset-0 bg-white backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="rounded-full border-4 border-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 p-1 shadow-2xl">
          <img
            src="/images/hero.jpg"
            alt="Aryan Tiwari"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
          Hi, I'm Aryan Tiwari
        </h1>

        {/* Subtitle */}
        <p className="text-black max-w-2xl text-lg md:text-xl">
          Full Stack Developer | MERN Stack Enthusiast | Passionate about DSA & Building Scalable Web Applications
        </p>

        {/* Call-to-action Button */}
        <a
          href="#projects"
          className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
