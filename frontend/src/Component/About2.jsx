
// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About2() {
  const sprinkles = Array.from({ length: 45 });

  return (
    <section className="relative w-full min-h-screen  bg-[#020617] overflow-hidden">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      {/* Large Dark Blue Glow */}
      <div className="absolute top-[-180px] left-[-150px] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[140px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-[-180px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />

      {/* Center Blue Glow */}
      <div className="absolute top-[35%] left-[45%] w-[350px] h-[350px] bg-blue-700/10 rounded-full blur-[120px]" />

      {/* =====================================================
          GLOWING SPRINKLES / PARTICLES
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sprinkles.map((_, index) => {
          const positions = [
            { left: "5%", top: "12%" },
            { left: "12%", top: "30%" },
            { left: "18%", top: "75%" },
            { left: "25%", top: "18%" },
            { left: "30%", top: "88%" },
            { left: "37%", top: "10%" },
            { left: "43%", top: "68%" },
            { left: "48%", top: "25%" },
            { left: "55%", top: "82%" },
            { left: "62%", top: "15%" },
            { left: "68%", top: "55%" },
            { left: "73%", top: "88%" },
            { left: "79%", top: "22%" },
            { left: "85%", top: "68%" },
            { left: "92%", top: "12%" },
            { left: "96%", top: "78%" },
            { left: "8%", top: "55%" },
            { left: "15%", top: "90%" },
            { left: "22%", top: "45%" },
            { left: "34%", top: "52%" },
            { left: "40%", top: "92%" },
            { left: "52%", top: "48%" },
            { left: "58%", top: "72%" },
            { left: "65%", top: "38%" },
            { left: "71%", top: "8%" },
            { left: "77%", top: "48%" },
            { left: "83%", top: "35%" },
            { left: "90%", top: "52%" },
            { left: "98%", top: "42%" },
            { left: "3%", top: "82%" },
            { left: "10%", top: "68%" },
            { left: "28%", top: "35%" },
            { left: "45%", top: "15%" },
            { left: "50%", top: "90%" },
            { left: "60%", top: "30%" },
            { left: "70%", top: "75%" },
            { left: "80%", top: "12%" },
            { left: "88%", top: "82%" },
            { left: "94%", top: "60%" },
            { left: "17%", top: "12%" },
            { left: "32%", top: "72%" },
            { left: "57%", top: "12%" },
            { left: "76%", top: "65%" },
            { left: "87%", top: "28%" },
            { left: "97%", top: "92%" },
          ];

          const position = positions[index];

          return (
            <motion.span
              key={index}
              className={`absolute rounded-full ${
                index % 3 === 0
                  ? "bg-cyan-300"
                  : index % 3 === 1
                  ? "bg-cyan-500"
                  : "bg-blue-500"
              }`}
              style={{
                left: position.left,
                top: position.top,
                width: index % 4 === 0 ? "4px" : "2px",
                height: index % 4 === 0 ? "4px" : "2px",
                boxShadow:
                  index % 3 === 0
                    ? "0 0 12px rgba(103,232,249,0.9)"
                    : "0 0 10px rgba(59,130,246,0.8)",
              }}
              animate={{
                opacity: [0.2, 1, 0.35, 0.8, 0.2],
                scale: [0.8, 1.5, 1, 1.3, 0.8],
              }}
              transition={{
                duration: 2.5 + (index % 5) * 0.7,
                repeat: Infinity,
                delay: (index % 7) * 0.4,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10">

        {/* =====================================================
            TITLE
        ====================================================== */}

        <motion.div
          className="text-center px-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-cyan-300 text-sm sm:text-base md:text-lg mb-3 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            👋 Hey, I Am Sadaqat Aly Founder and Chief Executive :-
          </motion.p>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sadaqat Aly | Founder And Chief Executive Of Web Collection Technology
          </motion.h1>
        </motion.div>

        {/* =====================================================
            3 COLUMNS
        ====================================================== */}

        <div className="relative max-w-7xl mx-auto flex flex-nowrap items-start gap-6 px-4">

          {/* =================================================
              COLUMN 1 — CONTACT
          ================================================== */}

          <motion.div
            className="flex-1 flex flex-col items-start gap-2 min-w-[100px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-1 text-sm sm:text-base mt-40"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-bold text-cyan-400">E</span>

              <a
                href="mailto:Alycod3r@gmail.com"
                className="underline text-cyan-300 hover:text-cyan-100 transition-colors duration-300"
              >
                Alycod3r@gmail.com
              </a>
            </motion.div>

            <motion.a
              href="tel:+923470470741"
              className="underline text-cyan-300 text-sm sm:text-base hover:text-cyan-100 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              T +92 347 047 0741
            </motion.a>
          </motion.div>

          {/* =================================================
              COLUMN 2 — IMAGE
          ================================================== */}

          <motion.div
            className="flex-1 flex justify-center min-w-[120px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">

              {/* Image Glow */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110" />

              <img
                src="./sir 1.png"
                alt="Hero Image"
                className="relative z-10 w-full max-w-[150px] sm:max-w-[200px] md:max-w-sm object-cover rounded-xl drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              />
            </div>
          </motion.div>

          {/* =================================================
              COLUMN 3 — SCROLL + DESCRIPTION + SOCIAL
          ================================================== */}

          <motion.div
            className="flex-1 flex flex-col items-start gap-2 min-w-[120px] text-white space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >

            {/* Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center mb-2 text-cyan-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                className="h-16 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scaleY: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <p className="rotate-[-90deg] text-xs sm:text-sm mb-3 mt-8 tracking-[0.2em] text-cyan-400">
                SCROLL
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-cyan-100/90 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              I grow businesses by finding new opportunities, building strong
              partnerships, and creating smart strategies that drive results.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-2 sm:gap-3 mt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a
                href="https://x.com/Alycod3r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-100 text-xs sm:text-sm transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              >
                X
              </a>

              <a
                href="https://www.linkedin.com/in/sadaqat-aly-24aa9918a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-100 text-xs sm:text-sm transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              >
                LinkedIn
              </a>

              <a
                href="https://www.arcgis.com/home/search.html?restrict=false&sortField=relevance&sortOrder=desc&searchTerm=owner%3A%22Alycod3r%22#content"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-100 text-xs sm:text-sm transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              >
                GIS Blogs
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

