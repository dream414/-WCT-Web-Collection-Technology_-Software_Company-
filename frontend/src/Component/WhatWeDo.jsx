import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   CUSTOM ICONS
   No external icon package required
========================================================= */

const DivisionIcon = ({ type }) => {
  if (type === "gis") {
    return (
      <div className="relative w-10 h-10">
        <div className="absolute inset-1 rounded-full border-2 border-white/90" />
        <div className="absolute left-1/2 top-1 -translate-x-1/2 w-[2px] h-8 bg-white/80" />
        <div className="absolute top-1/2 left-1 -translate-y-1/2 w-8 h-[2px] bg-white/80" />
        <div className="absolute inset-[10px] rounded-full border border-white/60" />
        <div className="absolute w-2 h-2 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
      </div>
    );
  }

  if (type === "digital") {
    return (
      <div className="relative w-10 h-9">
        <div className="absolute top-0 left-0 w-10 h-7 rounded-md border-2 border-white/90" />
        <div className="absolute top-2 left-2 flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
        <div className="absolute bottom-0 left-4 w-2 h-2 border-l-2 border-b-2 border-white/80 rotate-[-45deg]" />
        <div className="absolute bottom-[-1px] left-1 w-8 h-[2px] bg-white/80 rounded-full" />
      </div>
    );
  }

  if (type === "education") {
    return (
      <div className="relative w-11 h-9">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-9 h-6 bg-white/90 rotate-45 skew-x-[-10deg] rounded-sm" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-7 h-5 border-b-2 border-white/90 rounded-b-full" />
        <div className="absolute top-0 right-0 w-2 h-7 bg-yellow-300 rounded-full rotate-[18deg]" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-white/80" />
      <span className="relative text-white font-black text-xl tracking-tight">
        AI
      </span>
    </div>
  );
};

const WhatWeDo = () => {
  const divisions = [
    {
      code: "01",
      label: "GIS",
      audience: "Govt & Enterprise",
      title: "GIS & Geospatial Solutions",
      description:
        "Field-verified geospatial intelligence for government, mining, and land-based decision-making.",
      items: [
        "Drone survey & 3D modelling",
        "Mineral exploration & geological documentation",
        "Government GIS consulting & project management",
        "Mining sector mapping & site reporting",
      ],
      icon: "gis",
      accent: "cyan",
    },
    {
      code: "02",
      label: "DS",
      audience: "Business",
      title: "Digital Services",
      description:
        "Web and mobile products and marketing systems that give businesses a real, working digital presence.",
      items: [
        "Web application development",
        "Mobile application development",
        "Digital marketing & brand campaigns",
        "Ongoing digital consultancy",
      ],
      icon: "digital",
      accent: "blue",
    },
    {
      code: "03",
      label: "ED",
      audience: "Students & Teams",
      title: "WCT Institute",
      description:
        "Physical and online training that builds the region's own digital and geospatial workforce.",
      items: [
        "GIS & Remote Sensing",
        "UI/UX Design",
        "Digital Marketing",
        "Web Development & Video Editing",
      ],
      icon: "education",
      accent: "gold",
    },
    {
      code: "04",
      label: "AI",
      audience: "Emerging",
      title: "AI Solutions",
      description:
        "Applying AI across our own divisions first — geospatial analysis, digital delivery, and training — before taking it to clients.",
      items: [
        "GeoAI & automated spatial analysis",
        "AI-assisted digital products",
        "AI-enhanced training content",
        "Custom AI consulting for enterprise",
      ],
      icon: "ai",
      accent: "cyan",
    },
  ];

  const bubbles = [
    {
      size: 190,
      top: "7%",
      left: "3%",
      delay: 0,
      type: "cyan",
    },
    {
      size: 140,
      top: "18%",
      right: "6%",
      delay: 1,
      type: "blue",
    },
    {
      size: 120,
      bottom: "14%",
      left: "7%",
      delay: 2,
      type: "gold",
    },
    {
      size: 210,
      bottom: "5%",
      right: "8%",
      delay: 1.5,
      type: "cyan",
    },
  ];

  const getTheme = (accent) => {
    if (accent === "blue") {
      return {
        gradient: "from-blue-400 via-blue-500 to-indigo-600",
        border: "border-blue-400/40",
        glow: "bg-blue-500/20",
        text: "text-blue-400",
        bullet: "bg-blue-400",
        shadow: "shadow-[0_0_40px_rgba(59,130,246,0.25)]",
        iconShadow: "shadow-[0_0_35px_rgba(59,130,246,0.7)]",
        line: "via-blue-400",
      };
    }

    if (accent === "gold") {
      return {
        gradient: "from-yellow-300 via-amber-400 to-yellow-600",
        border: "border-yellow-400/40",
        glow: "bg-yellow-500/20",
        text: "text-yellow-400",
        bullet: "bg-yellow-400",
        shadow: "shadow-[0_0_40px_rgba(212,175,85,0.22)]",
        iconShadow: "shadow-[0_0_35px_rgba(212,175,85,0.65)]",
        line: "via-yellow-400",
      };
    }

    return {
      gradient: "from-cyan-300 via-cyan-400 to-blue-500",
      border: "border-cyan-400/40",
      glow: "bg-cyan-500/20",
      text: "text-cyan-400",
      bullet: "bg-cyan-400",
      shadow: "shadow-[0_0_40px_rgba(34,211,238,0.25)]",
      iconShadow: "shadow-[0_0_35px_rgba(34,211,238,0.7)]",
      line: "via-cyan-400",
    };
  };

  return (
    <section
      id="what-we-do"
      className="relative min-h-screen overflow-hidden px-5 sm:px-6 py-20 md:py-28 bg-[#010817]"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[170px] pointer-events-none" />

      <div className="absolute bottom-[-220px] right-[-180px] w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[170px] pointer-events-none" />

      <div className="absolute top-[40%] left-[42%] w-[350px] h-[350px] rounded-full bg-yellow-500/[0.05] blur-[140px] pointer-events-none" />

      {/* =====================================================
          FLOATING UNIVERSE BUBBLES
      ====================================================== */}

      {bubbles.map((bubble, index) => {
        const bubbleGradient =
          bubble.type === "blue"
            ? "from-blue-500/35 via-blue-600/20 to-indigo-700/10"
            : bubble.type === "gold"
            ? "from-yellow-400/30 via-amber-500/15 to-yellow-700/10"
            : "from-cyan-400/35 via-cyan-500/20 to-blue-600/10";

        const bubbleBorder =
          bubble.type === "blue"
            ? "border-blue-400/35"
            : bubble.type === "gold"
            ? "border-yellow-400/35"
            : "border-cyan-400/35";

        const bubbleShadow =
          bubble.type === "blue"
            ? "0 0 100px rgba(59,130,246,0.25)"
            : bubble.type === "gold"
            ? "0 0 100px rgba(212,175,85,0.20)"
            : "0 0 100px rgba(34,211,238,0.25)";

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -35, 0],
              x: [0, 15, 0],
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full bg-gradient-to-br ${bubbleGradient} ${bubbleBorder} border backdrop-blur-xl pointer-events-none`}
            style={{
              width: bubble.size,
              height: bubble.size,
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
              bottom: bubble.bottom,
              boxShadow: bubbleShadow,
            }}
          />
        );
      })}

      {/* =====================================================
          LARGE ROTATING RINGS
      ====================================================== */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[5%] right-[-120px] w-[380px] h-[380px] rounded-full border-2 border-cyan-900/80 pointer-events-none"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[4%] left-[-150px] w-[430px] h-[430px] rounded-full border-2 border-blue-950/90 pointer-events-none"
      />

      {/* =====================================================
          DECORATIVE LINES
      ====================================================== */}

      <div className="absolute top-[8%] right-[-80px] w-[350px] h-[2px] bg-gradient-to-r from-transparent via-cyan-700 to-transparent rotate-[35deg] pointer-events-none" />

      <div className="absolute bottom-[15%] left-[-100px] w-[350px] h-[2px] bg-gradient-to-r from-transparent via-blue-800 to-transparent rotate-[-25deg] pointer-events-none" />

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-cyan-400"
                : i % 3 === 1
                ? "bg-blue-400"
                : "bg-yellow-500"
            }`}
            style={{
              width: i % 8 === 0 ? "3px" : "2px",
              height: i % 8 === 0 ? "3px" : "2px",
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20 md:mb-24"
        >
          <p className="text-cyan-400 font-semibold tracking-[5px] uppercase mb-4 text-xs md:text-sm">
            What We Do
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Four
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
              {" "}
              Divisions
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-400 text-sm md:text-base leading-7">
            One integrated company delivering geospatial, digital, education,
            and AI solutions through connected expertise and modern technology.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative flex flex-col gap-14 md:gap-20">
          {/* MAIN CENTER LINE */}

          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-900 shadow-[0_0_20px_rgba(34,211,238,0.55)]" />

          {/* MOVING LIGHT */}

          <motion.div
            animate={{
              y: ["0%", "100%", "0%"],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[7px] h-28 bg-gradient-to-b from-transparent via-cyan-200 to-transparent blur-[2px] z-10"
          />

          {/* ===================================================
              DIVISION CARDS
          =================================================== */}

          {divisions.map((item, index) => {
            const theme = getTheme(item.accent);

            return (
              <motion.div
                key={item.code}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* =================================================
                    CARD
                ================================================== */}

                <motion.div
                  whileHover={{
                    scale: 1.025,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`relative w-full md:w-[45%] rounded-[35px] border ${theme.border} bg-[#061226]/90 backdrop-blur-2xl p-7 md:p-8 overflow-hidden ${theme.shadow}`}
                >
                  {/* CARD GLOWS */}

                  <div
                    className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${theme.glow} blur-3xl`}
                  />

                  <div
                    className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full ${theme.glow} blur-3xl`}
                  />

                  {/* NUMBER */}

                  <div
                    className={`absolute top-4 right-6 text-7xl font-black ${theme.text} opacity-[0.10] select-none`}
                  >
                    {item.code}
                  </div>

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center ${theme.iconShadow} mb-6`}
                  >
                    <DivisionIcon type={item.icon} />
                  </motion.div>

                  {/* LABEL */}

                  <div className="relative z-10 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold tracking-[0.25em] uppercase ${theme.text}`}
                      >
                        {item.label}
                      </span>

                      <span className="w-8 h-px bg-slate-600" />

                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        Division
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}

                  <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* AUDIENCE */}

                  <div className="relative z-10 flex items-center gap-2 mb-5">
                    <motion.span
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`w-2 h-2 rounded-full ${theme.bullet}`}
                    />

                    <span className="text-xs md:text-sm text-slate-400">
                      {item.audience}
                    </span>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="relative z-10 text-slate-300 text-sm md:text-[15px] leading-7 mb-7">
                    {item.description}
                  </p>

                  {/* SERVICES */}

                  <div className="relative z-10 space-y-3">
                    {item.items.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.1 +
                            serviceIndex * 0.06,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="flex items-start gap-3 group"
                      >
                        <span
                          className={`mt-[8px] shrink-0 w-2 h-2 rounded-full ${theme.bullet} shadow-[0_0_10px_rgba(34,211,238,0.7)]`}
                        />

                        <span className="text-slate-400 text-xs md:text-sm leading-6 group-hover:text-slate-200 transition-colors">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* LINK */}

                  <motion.a
                    href="#contact"
                    whileHover={{
                      x: 6,
                    }}
                    className={`relative z-10 inline-flex items-center gap-2 mt-7 text-sm font-semibold ${theme.text}`}
                  >
                    <span>
                      {item.code === "01"
                        ? "Explore GIS Services"
                        : item.code === "02"
                        ? "Explore Digital Services"
                        : item.code === "03"
                        ? "Explore Courses"
                        : "Talk About AI"}
                    </span>

                    <span className="text-lg">
                      →
                    </span>
                  </motion.a>

                  {/* MOVING CARD LINE */}

                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    className={`absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent ${theme.line} to-transparent`}
                  />
                </motion.div>

                {/* =================================================
                    CENTER NODE
                ================================================== */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      "0 0 15px rgba(34,211,238,0.45)",
                      "0 0 35px rgba(34,211,238,0.95)",
                      "0 0 15px rgba(34,211,238,0.45)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07182d] border-4 border-cyan-400 items-center justify-center z-20"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-200" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            FOOTER LINE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mt-24 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="text-slate-400 text-xs md:text-sm leading-6">
              One standard of delivery across geospatial, digital, education,
              and AI.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs tracking-[0.22em] uppercase">
              <span className="text-cyan-400">
                GIS
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-blue-400">
                DIGITAL
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-yellow-400">
                EDUCATION
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-cyan-400">
                AI
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM MOVING LINE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80"
      />
    </section>
  );
};

export default WhatWeDo;