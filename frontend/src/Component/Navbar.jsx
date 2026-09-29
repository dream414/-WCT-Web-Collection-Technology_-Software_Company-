// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 bg-black backdrop-blur-xl z-50 border-white/10 transition-all duration-300 shadow-[0_0_20px_6px_rgba(37,99,235,0.5)] backdrop-brightness-125">
      
      <div className="max-w-7xl mx-auto flex items-center justify-around  py-4">
        
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-3">
          <img src="./logoo.png" alt="logo" className="h-13" />

          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-white">Web</span>{" "}
            <span className="text-blue-500">Collection</span>{" "}
            <span className="text-white">Technology</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium relative">

          <span className="hover:text-cyan-300 hover:font-bold transition cursor-pointer">
            <a href="#home">Home</a>
          </span>

          <span className="hover:text-cyan-300 hover:font-bold transition cursor-pointer">
            <a href="#about">About</a>
          </span>

          <span className="hover:text-cyan-300 hover:font-bold transition cursor-pointer">
            <a href="#project">Projects</a>
          </span>

          <span className="hover:text-cyan-300 hover:font-bold transition cursor-pointer">
            <a href="#services">Services</a>
          </span>

          <span className="hover:text-cyan-300 hover:font-bold transition cursor-pointer">
            <a href="#contact">Contact</a>
          </span>

          {/* DOWNLOAD BUTTON */}
          <button className="relative px-5 py-2 bg-black text-white rounded-lg overflow-hidden">
            
            <span className="relative z-10">
              <a href="d.map.pdf">Download Maps</a>
            </span>

            <span className="absolute inset-0 rounded-lg pointer-events-none">
              <span
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #2563eb, transparent, #275bcc, transparent, #2563eb)",
                  backgroundSize: "200% 100%",
                  animation: "moveColor 10s linear infinite",
                }}
              ></span>
            </span>

            <style>{`
              @keyframes moveColor {
                0% {
                  background-position: 0% 0%;
                }

                100% {
                  background-position: 200% 0%;
                }
              }
            `}</style>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-black text-white py-4 space-y-4 text-center">

          <li>
            <a
              className="hover:text-cyan-300 hover:font-bold transition cursor-pointer"
              href="#home"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="hover:text-cyan-300 hover:font-bold transition cursor-pointer"
              href="#about"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="hover:text-cyan-300 hover:font-bold transition cursor-pointer"
              href="#project"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="hover:text-cyan-300 hover:font-bold transition cursor-pointer"
              href="#services"
            >
              Services
            </a>
          </li>

          <li>
            <a
              className="hover:text-cyan-300 hover:font-bold transition cursor-pointer"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}