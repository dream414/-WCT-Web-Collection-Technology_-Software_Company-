import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   WHY WCT
   Dark futuristic / GIS / Technology design
   No external icon package required
========================================================= */

const WhyWCT = () => {
  const features = [
    {
      number: "01",
      title: "Field-Tested, Not Theoretical",
      description:
        "Every GIS deliverable is backend by real drone and field data — not desktop assumptions.",
      type: "drone",
      accent: "cyan",
      side: "left",
    },
    {
      number: "02",
      title: "Government-Trusted",
      description:
        "Direct project management and consulting experience with local government bodies.",
      type: "government",
      accent: "cyan",
      side: "right",
    },
    {
      number: "03",
      title: "Full-Stack Capability",
      description:
        "From spatial data to a working app to a trained team — handled under one roof.",
      type: "stack",
      accent: "blue",
      side: "left",
    },
    {
      number: "04",
      title: "Talent Pipeline",
      description:
        "Our own Institute trains the people who go on to deliver our GIS and digital projects.",
      type: "education",
      accent: "blue",
      side: "right",
    },
    {
      number: "05",
      title: "Cross-Sector Experience",
      description:
        "Healthcare, education, mining, transport, and government — real delivery, not just pitches.",
      type: "network",
      accent: "gold",
      side: "left",
    },
    {
      number: "06",
      title: "Built for What's Next",
      description:
        "AI is already being layered into how we survey, build, and teach — not bolted on later.",
      type: "ai",
      accent: "purple",
      side: "right",
    },
  ];

  /* =========================================================
     ICONS
  ========================================================= */

  const FeatureIcon = ({ type }) => {
    if (type === "drone") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute left-1/2 top-1/2 w-7 h-5 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white" />

          <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-2 border-white" />

          <div className="absolute right-0 top-2 w-5 h-5 rounded-full border-2 border-white" />

          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-[2px] bg-white" />

          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 h-[2px] bg-white" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
        </div>
      );
    }

    if (type === "government") {
      return (
        <div className="relative w-11 h-12">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-3 bg-white rounded-t-full" />

          <div className="absolute left-1/2 top-2 -translate-x-1/2 w-8 h-2 bg-white" />

          <div className="absolute left-1 top-4 w-2 h-6 bg-white rounded-sm" />
          <div className="absolute left-[11px] top-4 w-2 h-6 bg-white rounded-sm" />
          <div className="absolute right-[11px] top-4 w-2 h-6 bg-white rounded-sm" />
          <div className="absolute right-1 top-4 w-2 h-6 bg-white rounded-sm" />

          <div className="absolute bottom-1 left-0 w-11 h-2 bg-white rounded-sm" />
        </div>
      );
    }

    if (type === "stack") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute top-1 left-2 w-8 h-5 border-2 border-white rotate-[30deg] rounded-sm" />
          <div className="absolute top-4 left-2 w-8 h-5 border-2 border-white rotate-[30deg] rounded-sm" />
          <div className="absolute top-7 left-2 w-8 h-5 border-2 border-white rotate-[30deg] rounded-sm" />
        </div>
      );
    }

    if (type === "education") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute left-1/2 top-2 -translate-x-1/2 w-11 h-6 bg-white rotate-45 rounded-sm" />

          <div className="absolute left-1/2 top-3 -translate-x-1/2 w-8 h-5 border-b-2 border-white rounded-full" />

          <div className="absolute right-0 top-3 w-1 h-8 bg-white rounded-full rotate-[25deg]" />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white" />
        </div>
      );
    }

    if (type === "network") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

          <div className="absolute left-1 top-1 w-3 h-3 rounded-full bg-white" />

          <div className="absolute right-1 top-1 w-3 h-3 rounded-full bg-white" />

          <div className="absolute left-1 bottom-1 w-3 h-3 rounded-full bg-white" />

          <div className="absolute right-1 bottom-1 w-3 h-3 rounded-full bg-white" />

          <div className="absolute left-[9px] top-[9px] w-7 h-[2px] bg-white rotate-[25deg]" />

          <div className="absolute right-[9px] top-[9px] w-7 h-[2px] bg-white rotate-[-25deg]" />

          <div className="absolute left-[9px] bottom-[9px] w-7 h-[2px] bg-white rotate-[-25deg]" />

          <div className="absolute right-[9px] bottom-[9px] w-7 h-[2px] bg-white rotate-[25deg]" />
        </div>
      );
    }

    return (
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-white/90" />

        <div className="absolute inset-2 rounded-full border border-white/50" />

        <span className="relative text-white font-black text-lg">
          AI
        </span>
      </div>
    );
  };

  /* =========================================================
     COLOR SYSTEM
  ========================================================= */

  const getTheme = (accent) => {
    if (accent === "blue") {
      return {
        text: "text-blue-400",
        border: "border-blue-500/60",
        bg: "from-blue-950/80 to-[#06162f]/90",
        glow: "rgba(59,130,246,0.65)",
        line: "via-blue-400",
        iconBorder: "border-blue-400",
        number: "text-blue-400",
      };
    }

    if (accent === "gold") {
      return {
        text: "text-yellow-400",
        border: "border-yellow-400/70",
        bg: "from-yellow-950/30 to-[#101426]/90",
        glow: "rgba(234,179,8,0.65)",
        line: "via-yellow-400",
        iconBorder: "border-yellow-400",
        number: "text-yellow-400",
      };
    }

    if (accent === "purple") {
      return {
        text: "text-purple-400",
        border: "border-purple-500/70",
        bg: "from-purple-950/40 to-[#101127]/90",
        glow: "rgba(168,85,247,0.7)",
        line: "via-purple-400",
        iconBorder: "border-purple-400",
        number: "text-purple-400",
      };
    }

    return {
      text: "text-cyan-400",
      border: "border-cyan-400/70",
      bg: "from-cyan-950/40 to-[#06172a]/90",
      glow: "rgba(34,211,238,0.7)",
      line: "via-cyan-400",
      iconBorder: "border-cyan-400",
      number: "text-cyan-400",
    };
  };

  return (
    <section
      id="why-wct"
      className="relative w-full overflow-hidden bg-[#010914] px-5 py-24 sm:px-8 md:px-12 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main cyan glow */}
        <div className="absolute top-[-180px] left-[20%] w-[650px] h-[500px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

        {/* Blue glow */}
        <div className="absolute right-[-200px] top-[30%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.08] blur-[170px]" />

        {/* Purple glow */}
        <div className="absolute left-[-200px] bottom-[-150px] w-[550px] h-[550px] rounded-full bg-purple-600/[0.06] blur-[160px]" />

        {/* Gold glow */}
        <div className="absolute bottom-[15%] left-[35%] w-[300px] h-[300px] rounded-full bg-yellow-500/[0.04] blur-[130px]" />
      </div>

      {/* =====================================================
          TOPOGRAPHIC CONTOUR LINES
      ====================================================== */}

      <div className="absolute left-[-100px] top-10 w-[450px] h-[300px] opacity-50 pointer-events-none">
        <div className="absolute inset-0 rounded-[45%] border border-cyan-800/50 rotate-[-15deg]" />
        <div className="absolute inset-[25px] rounded-[45%] border border-cyan-800/40 rotate-[-15deg]" />
        <div className="absolute inset-[50px] rounded-[45%] border border-cyan-800/30 rotate-[-15deg]" />
        <div className="absolute inset-[75px] rounded-[45%] border border-cyan-800/25 rotate-[-15deg]" />
        <div className="absolute inset-[100px] rounded-[45%] border border-cyan-800/20 rotate-[-15deg]" />
      </div>

      <div className="absolute right-[-120px] bottom-[-40px] w-[500px] h-[300px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 rounded-[50%] border border-cyan-800/50 rotate-[20deg]" />
        <div className="absolute inset-[25px] rounded-[50%] border border-cyan-800/40 rotate-[20deg]" />
        <div className="absolute inset-[50px] rounded-[50%] border border-cyan-800/30 rotate-[20deg]" />
        <div className="absolute inset-[75px] rounded-[50%] border border-cyan-800/25 rotate-[20deg]" />
      </div>

      {/* =====================================================
          RANDOM STARS
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 55 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2.5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.12,
            }}
            className={`absolute rounded-full ${
              index % 4 === 0
                ? "bg-cyan-400"
                : index % 4 === 1
                ? "bg-blue-400"
                : index % 4 === 2
                ? "bg-purple-400"
                : "bg-yellow-400"
            }`}
            style={{
              width: index % 9 === 0 ? "3px" : "2px",
              height: index % 9 === 0 ? "3px" : "2px",
              left: `${(index * 47) % 100}%`,
              top: `${(index * 31) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-[1450px] mx-auto">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="hidden sm:block w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.45em] uppercase">
              Why WCT
            </span>

            <span className="hidden sm:block w-16 h-[2px] bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black leading-[1.05] text-white">
            Regional roots.
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
              National capability.
            </span>
          </h2>

          <p className="mt-7 text-slate-300 text-sm sm:text-base md:text-lg leading-7 max-w-3xl mx-auto">
            We're not a branch office reading the region from a report —
            we work, live, and deliver from Gilgit-Baltistan itself.
          </p>
        </motion.div>

        {/* ===================================================
            DESKTOP FEATURE GRID
        ==================================================== */}

        <div className="relative hidden lg:block">

          {/* ===============================================
              CENTRAL CONNECTION SYSTEM
          ================================================ */}

          <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] pointer-events-none">

            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-cyan-500/40"
            />

            {/* Second rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[15px] rounded-full border border-blue-500/30 border-dashed"
            />

            {/* Main circle */}
            <div className="absolute inset-[38px] rounded-full bg-[#020d1c]/95 border border-cyan-400/60 shadow-[0_0_80px_rgba(34,211,238,0.18)] flex items-center justify-center">

              {/* Inner ring */}
              <div className="absolute inset-[14px] rounded-full border border-cyan-500/30" />

              {/* WCT Logo Mark */}
              <div className="relative text-center">

                <div className="flex justify-center mb-2">
                  <div className="relative w-14 h-10">

                    <div className="absolute left-0 bottom-0 w-7 h-7 bg-gradient-to-br from-white to-cyan-400 rotate-45 rounded-sm" />

                    <div className="absolute left-5 top-0 w-7 h-7 bg-gradient-to-br from-white to-blue-400 rotate-45 rounded-sm" />

                    <div className="absolute right-0 bottom-0 w-7 h-7 bg-gradient-to-br from-cyan-300 to-blue-500 rotate-45 rounded-sm" />
                  </div>
                </div>

                <div className="text-white font-black text-4xl tracking-tight">
                  WCT
                </div>

                <div className="mt-1 text-[8px] tracking-[0.35em] text-cyan-400 uppercase">
                  Web Collection Technology
                </div>
              </div>
            </div>

            {/* Orbit points */}
            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <span className="absolute top-[-3px] left-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />
            </motion.span>

            <span className="absolute top-1/2 left-[-4px] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)]" />

            <span className="absolute top-1/2 right-[-4px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />
          </div>

          {/* ===============================================
              FEATURE CARDS
          ================================================ */}

          <div className="grid grid-cols-2 gap-x-[390px] gap-y-5">

            {features.map((feature, index) => {
              const theme = getTheme(feature.accent);

              return (
                <motion.div
                  key={feature.number}
                  initial={{
                    opacity: 0,
                    x: feature.side === "left" ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className={`relative ${
                    feature.side === "right"
                      ? "col-start-2"
                      : "col-start-1"
                  }`}
                >

                  {/* =========================================
                      CONNECTOR LINE
                  ========================================== */}

                  <div
                    className={`absolute top-1/2 ${
                      feature.side === "left"
                        ? "right-[-390px]"
                        : "left-[-390px]"
                    } w-[390px] h-[2px] bg-gradient-to-r ${
                      feature.side === "left"
                        ? `from-transparent ${theme.line} to-transparent`
                        : `from-transparent ${theme.line} to-transparent`
                    }`}
                  />

                  {/* Connector dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`absolute top-1/2 ${
                      feature.side === "left"
                        ? "right-[-390px]"
                        : "left-[-390px]"
                    } -translate-y-1/2 w-3 h-3 rounded-full ${
                      theme.text.replace("text-", "bg-")
                    } shadow-[0_0_15px_currentColor]`}
                  />

                  {/* CARD */}

                  <motion.div
                    whileHover={{
                      y: -7,
                      scale: 1.015,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`relative min-h-[185px] rounded-[28px] border ${theme.border} bg-gradient-to-br ${theme.bg} backdrop-blur-2xl overflow-hidden p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)]`}
                  >

                    {/* Card glow */}
                    <div
                      className="absolute -right-20 -top-20 w-44 h-44 rounded-full blur-[70px]"
                      style={{
                        background: theme.glow,
                      }}
                    />

                    {/* Background number */}
                    <div
                      className={`absolute right-5 top-2 text-7xl font-black ${theme.number} opacity-[0.08]`}
                    >
                      {feature.number}
                    </div>

                    {/* Image-style background panel */}
                    <div className="absolute right-0 bottom-0 w-[42%] h-full opacity-[0.07] pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/30 to-transparent" />

                      <div className="absolute right-8 top-8 w-28 h-28 rounded-full border border-white/40" />
                      <div className="absolute right-14 top-14 w-16 h-16 rounded-full border border-white/30" />
                      <div className="absolute right-20 top-20 w-5 h-5 rounded-full bg-white/50" />
                    </div>

                    <div className="relative z-10 flex gap-5 items-start">

                      {/* ICON */}

                      <motion.div
                        whileHover={{
                          rotate: 6,
                          scale: 1.08,
                        }}
                        className={`shrink-0 w-[72px] h-[72px] rounded-full border-2 ${theme.iconBorder} flex items-center justify-center bg-[#031222]/90 shadow-[0_0_35px_rgba(34,211,238,0.18)]`}
                      >
                        <FeatureIcon type={feature.type} />
                      </motion.div>

                      {/* CONTENT */}

                      <div className="flex-1 pr-2">

                        <div
                          className={`text-sm font-bold ${theme.text} mb-1 tracking-wider`}
                        >
                          {feature.number}
                        </div>

                        <h3 className="text-xl md:text-[22px] font-bold text-white leading-tight mb-3">
                          {feature.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-6 max-w-[390px]">
                          {feature.description}
                        </p>

                      </div>
                    </div>

                    {/* Bottom animated line */}
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.4,
                      }}
                      className={`absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent ${theme.line} to-transparent`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            MOBILE / TABLET
        ==================================================== */}

        <div className="lg:hidden grid sm:grid-cols-2 gap-5">

          {features.map((feature, index) => {
            const theme = getTheme(feature.accent);

            return (
              <motion.div
                key={feature.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`relative min-h-[220px] rounded-[28px] border ${theme.border} bg-gradient-to-br ${theme.bg} backdrop-blur-xl overflow-hidden p-6`}
              >

                {/* Glow */}

                <div
                  className="absolute -right-20 -top-20 w-44 h-44 rounded-full blur-[70px]"
                  style={{
                    background: theme.glow,
                  }}
                />

                {/* Number */}

                <div
                  className={`absolute right-5 top-2 text-7xl font-black ${theme.number} opacity-[0.08]`}
                >
                  {feature.number}
                </div>

                <div className="relative z-10">

                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    className={`w-[68px] h-[68px] rounded-full border-2 ${theme.iconBorder} bg-[#031222]/90 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(34,211,238,0.18)]`}
                  >
                    <FeatureIcon type={feature.type} />
                  </motion.div>

                  <div
                    className={`text-xs font-bold ${theme.text} tracking-[0.2em] mb-2`}
                  >
                    {feature.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-6">
                    {feature.description}
                  </p>
                </div>

                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent ${theme.line} to-transparent`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

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
          className="mt-16 md:mt-20"
        >

          <div className="flex items-center justify-center gap-5">

            <span className="hidden sm:block w-20 h-[1px] bg-gradient-to-r from-transparent to-cyan-600" />

            <div className="flex flex-wrap justify-center items-center gap-4 text-[9px] sm:text-xs tracking-[0.3em] uppercase text-slate-500 text-center">
              <span className="text-cyan-400">
                Local Knowledge
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-blue-400">
                Modern Technology
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-cyan-300">
                Lasting Impact
              </span>
            </div>

            <span className="hidden sm:block w-20 h-[1px] bg-gradient-to-l from-transparent to-blue-600" />

          </div>
        </motion.div>
      </div>

      {/* =====================================================
          TOP RIGHT LIGHT TRAIL
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 right-10 md:right-24 w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-[-18deg]"
      />

      {/* =====================================================
          BOTTOM LIGHT TRAIL
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-14 left-5 md:left-20 w-32 md:w-52 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent rotate-[-12deg]"
      />

      {/* =====================================================
          SECTION BOTTOM LINE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </section>
  );
};

export default WhyWCT;