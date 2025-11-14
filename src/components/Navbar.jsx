import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Education", "Experience", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-lg shadow-lg transition-colors duration-300 ${
        dark ? "bg-gray-900/60 text-gray-200" : "bg-white/60 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-extrabold bg-clip-text text-transparent ${
            dark
              ? "bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500"
              : "bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400"
          }`}
        >
          Aryan Tiwari
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`relative group px-2 py-1 transition-all ${
                  dark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full ${
                    dark
                      ? "bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500"
                      : "bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-full transition ${
              dark
                ? "bg-gray-800/60 hover:bg-gray-700/70"
                : "bg-gray-200/60 hover:bg-gray-300/70"
            }`}
          >
            {dark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-full transition ${
              dark
                ? "bg-gray-800/60 hover:bg-gray-700/70"
                : "bg-gray-200/60 hover:bg-gray-300/70"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={24} className={dark ? "text-white" : "text-gray-900"} />
            ) : (
              <Menu size={24} className={dark ? "text-white" : "text-gray-900"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden py-4 backdrop-blur-lg transition-colors duration-300 ${
            dark ? "bg-gray-900/80" : "bg-white/80"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition hover:text-purple-400 ${
                    dark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
