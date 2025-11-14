import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Phone Card */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <Phone className="mx-auto w-10 h-10 text-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-white">Phone</h3>
            <p>
              <a
                href="tel:+918319830017"
                className="text-purple-400 hover:text-pink-400 transition"
              >
                +91 8319830017
              </a>
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <Mail className="mx-auto w-10 h-10 text-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-white">Email</h3>
            <p>
              <a
                href="mailto:aryantiwari52576@gmail.com"
                className="text-purple-400 hover:text-pink-400 transition"
              >
                aryantiwari52576@gmail.com
              </a>
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <MapPin className="mx-auto w-10 h-10 text-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-white">Location</h3>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
