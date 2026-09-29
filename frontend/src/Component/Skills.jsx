// src/components/Skills.jsx

import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   SKILLS
   Dark futuristic / GIS / Technology design
========================================================= */

const Skills = () => {
  const skills = {
    Technical: [
      "GIS",
      "Drone Survey",
      "3D Modelling",
      "Mapping",
      "Designing",
      "Nocode Development",
    ],

    Business: [
      "BizDev",
      "MR&A",
      "CRM",
      "PMP",
      "Business Model Innovation",
      "Project Consult",
    ],

    Government: [
      "Government Consultancy",
      "Public Sector Collaboration",
      "Diplomas & Tech Courses",
    ],

    Concentration: [
      "Skills Concentration",
      "Business Concentration",
      "Project Concentration",
      "Branding Concentration",
      "Other Concentration",
    ],
  };

  /* =========================================================
     ICONS
  ========================================================= */

  const SkillIcon = ({ type }) => {
    if (type === "Technical") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute inset-1 rounded-lg border-2 border-white/90" />

          <div className="absolute left-3 top-1 w-[2px] h-10 bg-white/80 rotate-[15deg]" />

          <div className="absolute right-3 top-1 w-[2px] h-10 bg-white/80 rotate-[-15deg]" />

          <div className="absolute left-1 top-5 w-10 h-[2px] bg-white/70 rotate-[8deg]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_white]" />
        </div>
      );
    }

    if (type === "Business") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute left-1 bottom-2 w-2 h-5 rounded-sm bg-white" />

          <div className="absolute left-5 bottom-2 w-2 h-8 rounded-sm bg-white" />

          <div className="absolute right-1 bottom-2 w-2 h-11 rounded-sm bg-white" />

          <div className="absolute left-2 top-4 w-8 h-[2px] bg-white rotate-[-25deg]" />

          <div className="absolute left-8 top-1 w-2 h-2 rounded-full bg-white" />
        </div>
      );
    }

    if (type === "Government") {
      return (
        <div className="relative w-12 h-12">
          <div className="absolute left-1/2 top-1 -translate-x-1/2 w-9 h-3 bg-white rounded-t-full" />

          <div className="absolute left-1/2 top-4 -translate-x-1/2 w-8 h-1 bg-white" />

          <div className="absolute left-2 top-5 w-2 h-6 bg-white rounded-sm" />

          <div className="absolute left-[13px] top-5 w-2 h-6 bg-white rounded-sm" />

          <div className="absolute right-[13px] top-5 w-2 h-6 bg-white rounded-sm" />

          <div className="absolute right-2 top-5 w-2 h-6 bg-white rounded-sm" />

          <div className="absolute bottom-1 left-0 w-12 h-2 bg-white rounded-sm" />
        </div>
      );
    }

    /* Concentration Icon */
    return (
      <div className="relative w-12 h-12">
        <div className="absolute inset-1 rounded-full border-2 border-white/90" />

        <div className="absolute inset-[8px] rounded-full border border-white/70" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]" />

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-3 bg-white" />

        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[2px] h-3 bg-white" />

        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-[2px] bg-white" />

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-[2px] bg-white" />
      </div>
    );
  };

  /* =========================================================
     COLOR SYSTEM
  ========================================================= */

  const getTheme = (category) => {
    if (category === "Business") {
      return {
        text: "text-blue-400",
        border: "border-blue-500/60",
        bg: "from-blue-950/70 to-[#06162f]/90",
        glow: "rgba(59,130,246,0.6)",
        line: "via-blue-400",
        iconBorder: "border-blue-400",
        number: "text-blue-400",
      };
    }

    if (category === "Government") {
      return {
        text: "text-purple-400",
        border: "border-purple-500/60",
        bg: "from-purple-950/40 to-[#101127]/90",
        glow: "rgba(168,85,247,0.6)",
        line: "via-purple-400",
        iconBorder: "border-purple-400",
        number: "text-purple-400",
      };
    }

    if (category === "Concentration") {
      return {
        text: "text-sky-400",
        border: "border-sky-500/60",
        bg: "from-sky-950/50 to-[#07182e]/90",
        glow: "rgba(56,189,248,0.6)",
        line: "via-sky-400",
        iconBorder: "border-sky-400",
        number: "text-sky-400",
      };
    }

    return {
      text: "text-cyan-400",
      border: "border-cyan-400/70",
      bg: "from-cyan-950/40 to-[#06172a]/90",
      glow: "rgba(34,211,238,0.65)",
      line: "via-cyan-400",
      iconBorder: "border-cyan-400",
      number: "text-cyan-400",
    };
  };

  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#010914]
        px-5
        py-24
        sm:px-8
        md:px-12
        lg:px-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-[-180px]
            left-[15%]
            w-[650px]
            h-[500px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-220px]
            top-[30%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-blue-600/[0.08]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            left-[-220px]
            bottom-[-150px]
            w-[550px]
            h-[550px]
            rounded-full
            bg-purple-600/[0.06]
            blur-[160px]
          "
        />
      </div>

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.09]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* =====================================================
          TOPOGRAPHIC LINES
      ====================================================== */}

      <div className="absolute left-[-120px] top-16 w-[480px] h-[320px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 rounded-[45%] border border-cyan-800/40 rotate-[-18deg]" />

        <div className="absolute inset-[30px] rounded-[45%] border border-cyan-800/35 rotate-[-18deg]" />

        <div className="absolute inset-[60px] rounded-[45%] border border-cyan-800/30 rotate-[-18deg]" />

        <div className="absolute inset-[90px] rounded-[45%] border border-cyan-800/20 rotate-[-18deg]" />
      </div>

      <div className="absolute right-[-140px] bottom-[-50px] w-[500px] h-[320px] opacity-35 pointer-events-none">
        <div className="absolute inset-0 rounded-[50%] border border-blue-800/40 rotate-[20deg]" />

        <div className="absolute inset-[30px] rounded-[50%] border border-blue-800/30 rotate-[20deg]" />

        <div className="absolute inset-[60px] rounded-[50%] border border-blue-800/25 rotate-[20deg]" />
      </div>

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 55 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2.5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.1,
            }}
            className={`
              absolute
              rounded-full
              ${
                index % 3 === 0
                  ? "bg-cyan-400"
                  : index % 3 === 1
                  ? "bg-blue-400"
                  : "bg-purple-400"
              }
            `}
            style={{
              width: index % 8 === 0 ? "3px" : "2px",
              height: index % 8 === 0 ? "3px" : "2px",
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
          initial={{
            opacity: 0,
            y: 40,
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
          className="
            text-center
            max-w-4xl
            mx-auto
            mb-16
            md:mb-20
          "
        >
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="hidden sm:block w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-400" />

            <span
              className="
                text-cyan-400
                text-xs
                sm:text-sm
                font-bold
                tracking-[0.45em]
                uppercase
              "
            >
              Skills & Expertise
            </span>

            <span className="hidden sm:block w-16 h-[2px] bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[70px]
              font-black
              leading-[1.05]
              text-white
            "
          >
            Skills
            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-blue-500
              "
            >
              that drive delivery.
            </span>
          </h2>

          <p
            className="
              mt-7
              text-slate-300
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              max-w-3xl
              mx-auto
            "
          >
            Technical expertise, business understanding, and
            government-focused capabilities brought together
            under one digital ecosystem.
          </p>
        </motion.div>

        {/* ===================================================
            DESKTOP SYSTEM
        ==================================================== */}

        <div className="relative hidden lg:block">

          {/* =================================================
              CENTRAL SYSTEM
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-[50%]
              -translate-x-1/2
              -translate-y-1/2
              w-[330px]
              h-[330px]
              pointer-events-none
            "
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border
                border-cyan-500/40
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[15px]
                rounded-full
                border
                border-blue-500/30
                border-dashed
              "
            />

            <div
              className="
                absolute
                inset-[38px]
                rounded-full
                bg-[#020d1c]/95
                border
                border-cyan-400/60
                shadow-[0_0_80px_rgba(34,211,238,0.18)]
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  inset-[14px]
                  rounded-full
                  border
                  border-cyan-500/30
                "
              />

              <div className="relative text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mx-auto
                    w-12
                    h-12
                    rounded-full
                    border
                    border-cyan-400/50
                    bg-[#061525]
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_25px_rgba(34,211,238,0.25)]
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_15px_rgba(34,211,238,1)]
                    "
                  />
                </motion.div>

                <div
                  className="
                    mt-3
                    text-white
                    font-black
                    text-3xl
                    tracking-tight
                  "
                >
                  SKILLS
                </div>

                <div
                  className="
                    mt-1
                    text-[8px]
                    tracking-[0.35em]
                    text-cyan-400
                    uppercase
                  "
                >
                  Expertise System
                </div>
              </div>
            </div>

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
              <span
                className="
                  absolute
                  top-[-3px]
                  left-1/2
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_15px_rgba(34,211,238,1)]
                "
              />
            </motion.span>

            <span
              className="
                absolute
                top-1/2
                left-[-4px]
                w-2
                h-2
                rounded-full
                bg-blue-400
                shadow-[0_0_15px_rgba(59,130,246,1)]
              "
            />

            <span
              className="
                absolute
                top-1/2
                right-[-4px]
                w-2
                h-2
                rounded-full
                bg-purple-400
                shadow-[0_0_15px_rgba(168,85,247,1)]
              "
            />
          </div>

          {/* =================================================
              FOUR SKILL PANELS
          ================================================= */}

          <div className="grid grid-cols-2 gap-x-[390px] gap-y-8">

            {Object.entries(skills).map(
              ([category, items], index) => {
                const side =
                  index % 2 === 0
                    ? "left"
                    : "right";

                const theme = getTheme(category);

                return (
                  <motion.div
                    key={category}
                    initial={{
                      opacity: 0,
                      x:
                        side === "left"
                          ? -80
                          : 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    className={`
                      relative
                      ${
                        side === "right"
                          ? "col-start-2"
                          : "col-start-1"
                      }
                    `}
                  >

                    {/* Connector */}

                    <div
                      className={`
                        absolute
                        top-1/2
                        ${
                          side === "left"
                            ? "right-[-390px]"
                            : "left-[-390px]"
                        }
                        w-[390px]
                        h-[2px]
                        bg-gradient-to-r
                        from-transparent
                        ${theme.line}
                        to-transparent
                      `}
                    />

                    {/* Connector Point */}

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
                      className={`
                        absolute
                        top-1/2
                        ${
                          side === "left"
                            ? "right-[-390px]"
                            : "left-[-390px]"
                        }
                        -translate-y-1/2
                        w-3
                        h-3
                        rounded-full
                        ${
                          theme.text.replace(
                            "text-",
                            "bg-"
                          )
                        }
                      `}
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
                      className={`
                        relative
                        min-h-[300px]
                        rounded-[28px]
                        border
                        ${theme.border}
                        bg-gradient-to-br
                        ${theme.bg}
                        backdrop-blur-2xl
                        overflow-hidden
                        p-7
                        shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                      `}
                    >

                      {/* Glow */}

                      <div
                        className="
                          absolute
                          -right-20
                          -top-20
                          w-48
                          h-48
                          rounded-full
                          blur-[75px]
                        "
                        style={{
                          background: theme.glow,
                        }}
                      />

                      {/* Background Number */}

                      <div
                        className={`
                          absolute
                          right-5
                          top-2
                          text-8xl
                          font-black
                          ${theme.number}
                          opacity-[0.07]
                        `}
                      >
                        0{index + 1}
                      </div>

                      {/* Header */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          items-center
                          gap-5
                          mb-7
                        "
                      >
                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.08,
                          }}
                          className={`
                            shrink-0
                            w-[72px]
                            h-[72px]
                            rounded-full
                            border-2
                            ${theme.iconBorder}
                            flex
                            items-center
                            justify-center
                            bg-[#031222]/90
                            shadow-[0_0_35px_rgba(34,211,238,0.15)]
                          `}
                        >
                          <SkillIcon type={category} />
                        </motion.div>

                        <div>
                          <div
                            className={`
                              text-xs
                              font-bold
                              ${theme.text}
                              mb-1
                              tracking-[0.25em]
                              uppercase
                            `}
                          >
                            0{index + 1}
                          </div>

                          <h3
                            className="
                              text-2xl
                              font-bold
                              text-white
                            "
                          >
                            {category}
                          </h3>
                        </div>
                      </div>

                      {/* Divider */}

                      <div
                        className={`
                          relative
                          z-10
                          h-px
                          mb-6
                          bg-gradient-to-r
                          from-transparent
                          ${theme.line}
                          to-transparent
                          opacity-60
                        `}
                      />

                      {/* Skills */}

                      <div className="relative z-10 space-y-3.5">

                        {items.map(
                          (skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              whileHover={{
                                x:
                                  side === "left"
                                    ? -5
                                    : 5,
                              }}
                              className="
                                flex
                                items-center
                                gap-3
                                text-sm
                                text-slate-300
                                hover:text-white
                                transition-colors
                                duration-300
                                cursor-default
                              "
                            >
                              <span
                                className={`
                                  text-[9px]
                                  font-mono
                                  ${theme.text}
                                  opacity-70
                                  w-5
                                `}
                              >
                                {String(
                                  skillIndex + 1
                                ).padStart(2, "0")}
                              </span>

                              <span
                                className={`
                                  w-1.5
                                  h-1.5
                                  rounded-full
                                  ${
                                    theme.text.replace(
                                      "text-",
                                      "bg-"
                                    )
                                  }
                                  flex-shrink-0
                                  shadow-[0_0_8px_currentColor]
                                `}
                              />

                              <span className="font-medium">
                                {skill}
                              </span>
                            </motion.div>
                          )
                        )}

                      </div>

                      {/* Bottom Status */}

                      <div
                        className="
                          relative
                          z-10
                          mt-7
                          pt-4
                          border-t
                          border-white/5
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className={`
                            w-1.5
                            h-1.5
                            rounded-full
                            ${
                              theme.text.replace(
                                "text-",
                                "bg-"
                              )
                            }
                            shadow-[0_0_8px_currentColor]
                          `}
                        />

                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.3em]
                            text-slate-600
                          "
                        >
                          Active Expertise
                        </span>
                      </div>

                      {/* Animated Bottom Line */}

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
                        className={`
                          absolute
                          bottom-0
                          left-0
                          w-1/2
                          h-[2px]
                          bg-gradient-to-r
                          from-transparent
                          ${theme.line}
                          to-transparent
                        `}
                      />

                    </motion.div>
                  </motion.div>
                );
              }
            )}

          </div>
        </div>

        {/* ===================================================
            MOBILE / TABLET
        ==================================================== */}

        <div
          className="
            lg:hidden
            grid
            sm:grid-cols-2
            gap-5
          "
        >
          {Object.entries(skills).map(
            ([category, items], index) => {

              const theme = getTheme(category);

              return (
                <motion.div
                  key={category}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`
                    relative
                    min-h-[300px]
                    rounded-[28px]
                    border
                    ${theme.border}
                    bg-gradient-to-br
                    ${theme.bg}
                    backdrop-blur-xl
                    overflow-hidden
                    p-6
                  `}
                >

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      w-48
                      h-48
                      rounded-full
                      blur-[70px]
                    "
                    style={{
                      background: theme.glow,
                    }}
                  />

                  {/* Number */}

                  <div
                    className={`
                      absolute
                      right-5
                      top-2
                      text-7xl
                      font-black
                      ${theme.number}
                      opacity-[0.08]
                    `}
                  >
                    0{index + 1}
                  </div>

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 7,
                      scale: 1.08,
                    }}
                    className={`
                      relative
                      z-10
                      w-[68px]
                      h-[68px]
                      rounded-full
                      border-2
                      ${theme.iconBorder}
                      bg-[#031222]/90
                      flex
                      items-center
                      justify-center
                      mb-5
                    `}
                  >
                    <SkillIcon type={category} />
                  </motion.div>

                  {/* Title */}

                  <div
                    className="
                      relative
                      z-10
                      mb-6
                    "
                  >
                    <div
                      className={`
                        text-xs
                        font-bold
                        ${theme.text}
                        tracking-[0.25em]
                        mb-1
                      `}
                    >
                      0{index + 1}
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {category}
                    </h3>
                  </div>

                  {/* Divider */}

                  <div
                    className={`
                      relative
                      z-10
                      h-px
                      mb-6
                      bg-gradient-to-r
                      from-transparent
                      ${theme.line}
                      to-transparent
                    `}
                  />

                  {/* Skills */}

                  <div
                    className="
                      relative
                      z-10
                      space-y-3
                    "
                  >
                    {items.map(
                      (skill, skillIndex) => (
                        <div
                          key={skill}
                          className="
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-slate-300
                          "
                        >
                          <span
                            className={`
                              text-[9px]
                              font-mono
                              ${theme.text}
                              opacity-70
                              w-5
                            `}
                          >
                            {String(
                              skillIndex + 1
                            ).padStart(2, "0")}
                          </span>

                          <span
                            className={`
                              w-1.5
                              h-1.5
                              rounded-full
                              ${
                                theme.text.replace(
                                  "text-",
                                  "bg-"
                                )
                              }
                              shadow-[0_0_8px_currentColor]
                            `}
                          />

                          <span>
                            {skill}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Bottom Line */}

                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`
                      absolute
                      bottom-0
                      left-0
                      w-1/2
                      h-[2px]
                      bg-gradient-to-r
                      from-transparent
                      ${theme.line}
                      to-transparent
                    `}
                  />

                </motion.div>
              );
            }
          )}
        </div>

        {/* ===================================================
            STORY SECTION
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
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            mt-16
            md:mt-20
            rounded-[30px]
            border
            border-cyan-500/20
            bg-[#020d1c]/85
            backdrop-blur-xl
            overflow-hidden
            px-6
            sm:px-10
            md:px-16
            py-12
            text-center
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[600px]
              h-[280px]
              rounded-full
              bg-cyan-500/[0.06]
              blur-[130px]
            "
          />

          {/* Header */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-center
              gap-4
              mb-7
            "
          >
            <span
              className="
                hidden
                sm:block
                w-12
                h-[1px]
                bg-gradient-to-r
                from-transparent
                to-cyan-400
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-cyan-400
              "
            >
              Capability in Action
            </span>

            <span
              className="
                hidden
                sm:block
                w-12
                h-[1px]
                bg-gradient-to-l
                from-transparent
                to-cyan-400
              "
            />
          </div>

          {/* Story */}

          <motion.p
            className="
              relative
              z-10
              max-w-4xl
              mx-auto
              text-slate-300
              text-sm
              md:text-lg
              leading-8
            "
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            I thrive on solving real-world challenges through
            technology—whether it's using GIS to map land
            reforms, developing growth strategies for
            businesses, or consulting on community projects.
            You’ll find me launching new initiatives,
            collaborating with local governments, or exploring
            innovative ways to drive impact through data and
            development.
          </motion.p>

          {/* Resume */}

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              relative
              z-10
              inline-flex
              mt-9
              px-9
              py-3
              rounded-xl
              bg-black
              border
              border-blue-500/40
              text-white
              font-semibold
              overflow-hidden
              shadow-[0_0_25px_rgba(37,99,235,0.18)]
            "
          >
            <span
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)",
                backgroundSize: "200% 100%",
                animation:
                  "skillsResumeMove 7s linear infinite",
              }}
            />

            <span className="relative z-10">
              My Resume
            </span>
          </motion.a>

        </motion.div>

        {/* ===================================================
            BOTTOM LABEL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span
            className="
              hidden
              sm:block
              w-16
              h-px
              bg-gradient-to-r
              from-transparent
              to-cyan-600
            "
          />

          <div
            className="
              text-[9px]
              sm:text-xs
              tracking-[0.3em]
              uppercase
              text-slate-600
              text-center
            "
          >
            Data

            <span className="mx-3 text-cyan-500">
              •
            </span>

            Technology

            <span className="mx-3 text-blue-500">
              •
            </span>

            Strategy

            <span className="mx-3 text-purple-500">
              •
            </span>

            Impact
          </div>

          <span
            className="
              hidden
              sm:block
              w-16
              h-px
              bg-gradient-to-l
              from-transparent
              to-blue-600
            "
          />
        </motion.div>

      </div>

      {/* =====================================================
          LIGHT TRAILS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-16
          right-10
          md:right-24
          w-24
          md:w-40
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          rotate-[-18deg]
        "
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-14
          left-5
          md:left-20
          w-32
          md:w-52
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
          rotate-[-12deg]
        "
      />

      {/* =====================================================
          BOTTOM LINE
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
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-cyan-500
          to-transparent
        "
      />

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes skillsResumeMove {
          0% {
            background-position: 0% 0%;
          }

          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>

    </section>
  );
};

export default Skills;