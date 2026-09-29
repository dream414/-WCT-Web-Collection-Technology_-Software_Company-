import React from "react";
import { motion } from "framer-motion";

const CompanyStats = () => {
  const stats = [
    {
      number: "GIS And  Geospatial Solutions.",
      title:"Advanced geospatial technologies for mapping, spatial analysis, surveying, and location-based decision-making.",
      icon: "✦",
      color: "cyan",
    },
    {
      number: " Digital Serves. ",
       title:"Modern digital solutions including web development, UI/UX design, digital marketing, and technology-driven business services.",
      icon: "⌖",
      color: "blue",
    },
    {
      number: "WCT Institute.",
       title:"Practical technology education and professional training programs designed to build skills in GIS, IT, digital tools, and emerging technologies.",
      icon: "◈",
      color: "cyan",
    },
    {
      number: "AI Solution.",
      title:"Intelligent AI-powered solutions for automation, data analysis, predictive insights, and smarter digital transformation.",
      icon: "◉",
      color: "blue",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-[#020617] overflow-hidden">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}
      <div className="absolute top-0 left-[-100px] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-[-100px] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      {/* =====================================================
          SMALL FLOATING LIGHTS
      ====================================================== */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[8%] w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_15px_5px_rgba(34,211,238,0.5)]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[10%] w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* =====================================================
            HEADING
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-xs md:text-sm mb-3">
            WCT At A Glance
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Built for the{" "}
            <span className="text-cyan-400">
              Digital Future
            </span>
          </h2>

          <div className="mx-auto mt-5 w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </motion.div>


        {/* =====================================================
            STATS GRID
        ====================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative group"
            >

              {/* =================================================
                  OUTER GLOW
              ================================================= */}
              <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  item.color === "cyan"
                    ? "bg-cyan-400/10"
                    : "bg-blue-500/10"
                }`}
              ></div>


              {/* =================================================
                  CARD
              ================================================= */}
              <div
                className={`relative h-full min-h-[245px] rounded-2xl border bg-white/[0.035] backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 ${
                  item.color === "cyan"
                    ? "border-cyan-400/20 group-hover:border-cyan-400/60"
                    : "border-blue-400/20 group-hover:border-blue-400/60"
                }`}
              >

                {/* =================================================
                    ANIMATED TOP LINE
                ================================================= */}
                <motion.span
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3,
                  }}
                  className={`absolute top-0 left-0 w-full h-[2px] ${
                    item.color === "cyan"
                      ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  }`}
                ></motion.span>


                {/* =================================================
                    ICON
                ================================================= */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-7 border ${
                    item.color === "cyan"
                      ? "bg-cyan-400/10 border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                      : "bg-blue-500/10 border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                  }`}
                >
                  <span
                    className={`text-2xl ${
                      item.color === "cyan"
                        ? "text-cyan-300"
                        : "text-blue-300"
                    }`}
                  >
                    {item.icon}
                  </span>
                </motion.div>


                {/* =================================================
                    NUMBER / MAIN TEXT
                ================================================= */}
                <h3
                  className={`font-extrabold text-2xl md:text-3xl leading-tight ${
                    item.color === "cyan"
                      ? "text-cyan-300"
                      : "text-blue-300"
                  }`}
                >
                  {item.number}
                </h3>


                {/* =================================================
                    TITLE
                ================================================= */}
                <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.title}
                </p>


                {/* =================================================
                    BOTTOM INDICATOR
                ================================================= */}
                <div className="absolute bottom-6 left-7 right-7 h-[1px] bg-white/5 overflow-hidden">
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.25,
                    }}
                    className={`w-1/2 h-full ${
                      item.color === "cyan"
                        ? "bg-cyan-400/50"
                        : "bg-blue-400/50"
                    }`}
                  ></motion.div>
                </div>


                {/* =================================================
                    CORNER GLOW
                ================================================= */}
                <div
                  className={`absolute -bottom-16 -right-16 w-36 h-36 rounded-full blur-3xl ${
                    item.color === "cyan"
                      ? "bg-cyan-400/10"
                      : "bg-blue-500/10"
                  }`}
                ></div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>


      {/* =====================================================
          ANIMATED BACKGROUND LINE
      ====================================================== */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
      ></motion.div>

    </section>
  );
};

export default CompanyStats;