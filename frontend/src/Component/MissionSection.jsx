import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const pillars = [
    {
      number: "01",
      title: "Ground Truth",
      text: "Every decision starts with accurate spatial and field data — drone, satellite, or on-site.",
      accent: "cyan",
    },
    {
      number: "02",
      title: "Built to Deliver",
      text: "Web, mobile, and marketing work that businesses can actually measure.",
      accent: "blue",
    },
    {
      number: "03",
      title: "Home-Grown Talent",
      text: "Training people locally so the region's digital capacity grows with us.",
      accent: "cyan",
    },
    {
      number: "04",
      title: "AI-Forward",
      text: "Applying AI across geospatial, digital, and training work — not as an afterthought.",
      accent: "blue",
    },
  ];

  return (
    <section className="relative w-full bg-[#020617] py-24 overflow-hidden">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}
      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[120px]" />


      {/* =====================================================
          CYAN SPRINKLES
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 75 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${Math.random() > 0.75 ? 3 : 2}px`,
              height: `${Math.random() > 0.75 ? 3 : 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15,
              animation: `missionTwinkle ${
                3 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow:
                "0 0 7px 1px rgba(34, 211, 238, 0.45)",
            }}
          ></span>
        ))}
      </div>


      {/* =====================================================
          BLUE SPRINKLES
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={`blue-${i}`}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: "2px",
              height: "2px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.12,
              animation: `missionTwinkle ${
                4 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow:
                "0 0 7px 1px rgba(59, 130, 246, 0.35)",
            }}
          ></span>
        ))}
      </div>


      {/* =====================================================
          GRID
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        ></div>
      </div>


      {/* =====================================================
          FLOATING LIGHTS
      ====================================================== */}
      <motion.span
        animate={{
          y: [0, -18, 0],
          opacity: [0.2, 0.55, 0.2],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[16%]
          left-[7%]
          w-2
          h-2
          rounded-full
          bg-cyan-300
          shadow-[0_0_15px_4px_rgba(34,211,238,0.25)]
          z-[2]
        "
      />

      <motion.span
        animate={{
          y: [0, 18, 0],
          opacity: [0.15, 0.5, 0.15],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          right-[8%]
          w-2
          h-2
          rounded-full
          bg-blue-300
          shadow-[0_0_15px_4px_rgba(59,130,246,0.25)]
          z-[2]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">


        {/* =====================================================
            TOP LABEL - CENTERED
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex justify-center"
        >
          <div
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              px-7
              py-3
              rounded-full
              border
              border-cyan-400/20
              bg-white/[0.03]
              backdrop-blur-md
              shadow-[0_0_30px_rgba(34,211,238,0.05)]
            "
          >
            <span
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_10px_3px_rgba(34,211,238,0.35)]
              "
            ></span>

            <span
              className="
                text-xl
                md:text-2xl
                font-extrabold
                tracking-[0.22em]
                uppercase
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-blue-500
              "
            >
              Our Mission
            </span>

            <span
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-blue-400
                shadow-[0_0_10px_3px_rgba(59,130,246,0.3)]
              "
            ></span>
          </div>
        </motion.div>


        {/* =====================================================
            MISSION INTRO + VISUAL
        ====================================================== */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">


          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >

            <h2
              className="
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-black
                text-white
                leading-[1.05]
              "
            >
              One company,
              <br />
              built to close the
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
                technology gap
              </span>

              <br />
              for an entire region.
            </h2>


            <p
              className="
                mt-8
                text-gray-300
                text-base
                md:text-lg
                leading-8
                max-w-3xl
              "
            >
              WCT exists to build the technology, skills, and infrastructure
              that Gilgit-Baltistan — and Pakistan more broadly — need to enter
              the digital and AI era. That means surveying and understanding
              the land, giving businesses a real digital presence, training the
              people who will run tomorrow&apos;s projects, and applying AI to
              make every part of that work smarter.
            </p>


            <div
              className="
                mt-8
                relative
                pl-6
                border-l-2
                border-slate-500/30
              "
            >

              <p
                className="
                  text-gray-400
                  text-sm
                  md:text-base
                  leading-7
                "
              >
                Founded in 2021, WCT began as a GIS and IT training provider,
                grew into a trusted geospatial partner for local government
                and the mining sector, and has since expanded into digital
                services and applied AI — with a co-founded mining and
                geological consultancy, Geo Hill Tech, operating alongside it.
              </p>


              <motion.span
                animate={{
                  y: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-[2px]
                  top-0
                  w-[3px]
                  h-16
                  bg-gradient-to-b
                  from-transparent
                  via-cyan-400
                  to-transparent
                "
              />

            </div>

          </motion.div>


          {/* ===================================================
              RIGHT FUTURISTIC DIAGRAM
          ==================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              justify-center
              items-center
              min-h-[460px]
            "
          >

            {/* =================================================
                OUTER WHITE RING
            ================================================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[330px]
                h-[330px]
                md:w-[420px]
                md:h-[420px]
                rounded-full
                border-[2px]
                border-white/35
                border-dashed
                shadow-[0_0_12px_rgba(255,255,255,0.08)]
              "
            />


            {/* =================================================
                OUTER CYAN RING
            ================================================= */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 52,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[315px]
                h-[315px]
                md:w-[405px]
                md:h-[405px]
                rounded-full
                border-[2px]
                border-cyan-500/55
                border-t-cyan-300/80
                border-b-cyan-500/35
                shadow-[0_0_15px_rgba(34,211,238,0.08)]
              "
            />


            {/* =================================================
                GOLD RING
            ================================================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[275px]
                h-[275px]
                md:w-[355px]
                md:h-[355px]
                rounded-full
                border-[2px]
                border-[#8a6a24]/75
                border-dashed
                shadow-[0_0_10px_rgba(202,160,58,0.08)]
              "
            />


            {/* =================================================
                MAIN CIRCLE
            ================================================= */}
            <div
              className="
                relative
                w-[245px]
                h-[245px]
                md:w-[315px]
                md:h-[315px]
                rounded-full
                flex
                items-center
                justify-center
                bg-[#020617]/55
                border-[2px]
                border-white/30
                backdrop-blur-xl
                shadow-[0_0_45px_rgba(34,211,238,0.08)]
              "
            >


              {/* =================================================
                  INNER ROTATING RING
              ================================================= */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-8
                  rounded-full
                  border-[2px]
                  border-[#7a5b1f]/65
                  border-t-cyan-300/80
                  border-r-white/40
                  border-b-[#c39b38]/55
                  border-l-transparent
                "
              />


              {/* =================================================
                  EXTRA INNER LINE
              ================================================= */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-14
                  rounded-full
                  border
                  border-white/20
                  border-r-cyan-400/65
                  border-l-[#a47b24]/65
                  border-t-transparent
                  border-b-transparent
                "
              />


              {/* =================================================
                  CENTER LOGO CONTENT
              ================================================= */}
              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >

                {/* LOGO CIRCLE */}
                <div
                  className="
                    w-20
                    h-20
                    md:w-24
                    md:h-24
                    rounded-full
                    border-[2px]
                    border-cyan-300/45
                    bg-[#020617]/75
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_30px_rgba(34,211,238,0.12)]
                    overflow-hidden
                  "
                >

                  <motion.img
                    src="/logoo.png"
                    alt="WCT Logo"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      w-14
                      h-14
                      md:w-16
                      md:h-16
                      object-contain
                    "
                  />

                </div>


                {/* WCT */}
                <p
                  className="
                    mt-5
                    text-white
                    font-bold
                    text-xl
                    md:text-2xl
                  "
                >
                  WCT
                </p>


                {/* AI FUTURE */}
                <p
                  className="
                    text-cyan-300/90
                    text-xs
                    md:text-sm
                    tracking-[0.28em]
                    uppercase
                    mt-1
                  "
                >
                  + AI FUTURE
                </p>

              </div>


              {/* =================================================
                  CYAN ORBIT DOT
              ================================================= */}
              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  pointer-events-none
                "
              >
                <span
                  className="
                    absolute
                    -top-1
                    left-1/2
                    -translate-x-1/2
                    w-4
                    h-4
                    rounded-full
                    bg-cyan-300
                    border-2
                    border-white/70
                    shadow-[0_0_14px_5px_rgba(34,211,238,0.28)]
                  "
                ></span>
              </motion.span>


              {/* =================================================
                  GOLD ORBIT DOT
              ================================================= */}
              <motion.span
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-5
                  rounded-full
                  pointer-events-none
                "
              >
                <span
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-3
                    h-3
                    rounded-full
                    bg-[#d4af55]
                    border
                    border-white/50
                    shadow-[0_0_12px_4px_rgba(212,175,85,0.20)]
                  "
                ></span>
              </motion.span>

            </div>


            {/* =================================================
                GIS LABEL
            ================================================= */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-[8%]
                right-0
                md:right-[2%]
                px-4
                py-2
                rounded-full
                border-[2px]
                border-cyan-500/30
                bg-black/35
                backdrop-blur-xl
                text-cyan-300
                text-xs
                tracking-[0.18em]
                uppercase
              "
            >
              GIS
            </motion.div>


            {/* =================================================
                PEOPLE LABEL
            ================================================= */}
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[11%]
                left-0
                md:left-[1%]
                px-4
                py-2
                rounded-full
                border-[2px]
                border-[#8a6a24]/45
                bg-black/35
                backdrop-blur-xl
                text-[#d4af55]
                text-xs
                tracking-[0.18em]
                uppercase
              "
            >
              PEOPLE
            </motion.div>


            {/* =================================================
                AI LABEL
            ================================================= */}
            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-[48%]
                -right-2
                md:-right-5
                px-4
                py-2
                rounded-full
                border-[2px]
                border-cyan-500/30
                bg-black/35
                backdrop-blur-xl
                text-cyan-300
                text-xs
                tracking-[0.18em]
                uppercase
              "
            >
              AI
            </motion.div>

          </motion.div>
        </div>


        {/* =====================================================
            SECTION DIVIDER
        ====================================================== */}
        <div
          className="
            relative
            my-20
            h-[2px]
            w-full
            overflow-hidden
            bg-slate-800/40
          "
        >

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-0
              top-0
              h-full
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-cyan-400/60
              to-transparent
            "
          />

        </div>


        {/* =====================================================
            FOUR PILLARS
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {pillars.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative"
            >

              {/* OUTER GLOW */}
              <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  item.accent === "cyan"
                    ? "bg-cyan-400/10"
                    : "bg-blue-500/10"
                }`}
              />


              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border-[2px]
                  border-slate-700/30
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                  md:p-7
                  transition-all
                  duration-500
                "
              >

                {/* MOVING TOP LINE */}
                <motion.div
                  animate={{
                    x: ["-110%", "110%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3,
                  }}
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${
                    item.accent === "cyan"
                      ? "via-cyan-400/60"
                      : "via-blue-400/60"
                  } to-transparent`}
                />


                <div className="flex items-start gap-5">

                  {/* NUMBER */}
                  <div
                    className={`shrink-0 text-2xl md:text-3xl font-black ${
                      item.accent === "cyan"
                        ? "text-cyan-300"
                        : "text-blue-300"
                    }`}
                  >
                    {item.number}
                  </div>


                  <div className="flex-1">

                    {/* TITLE */}
                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>


                    {/* TEXT */}
                    <p
                      className="
                        mt-3
                        text-gray-400
                        text-sm
                        md:text-base
                        leading-7
                      "
                    >
                      {item.text}
                    </p>

                  </div>


                  {/* MINI ICON */}
                  <motion.div
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`hidden sm:flex shrink-0 w-10 h-10 rounded-full items-center justify-center border ${
                      item.accent === "cyan"
                        ? "border-cyan-500/20 bg-cyan-400/[0.025] text-cyan-300/70"
                        : "border-blue-500/20 bg-blue-500/[0.025] text-blue-300/70"
                    }`}
                  >
                    +
                  </motion.div>

                </div>


                {/* BOTTOM PROGRESS LINE */}
                <div
                  className="
                    mt-6
                    h-[2px]
                    w-full
                    bg-white/5
                    overflow-hidden
                  "
                >

                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2,
                    }}
                    className={`h-full w-1/3 ${
                      item.accent === "cyan"
                        ? "bg-cyan-400/35"
                        : "bg-blue-400/35"
                    }`}
                  ></motion.div>

                </div>


                {/* CORNER GLOW */}
                <div
                  className={`absolute -bottom-16 -right-16 w-36 h-36 rounded-full blur-3xl ${
                    item.accent === "cyan"
                      ? "bg-cyan-400/10"
                      : "bg-blue-500/10"
                  }`}
                />

              </div>
            </motion.div>
          ))}

        </div>
      </div>


      {/* =====================================================
          BOTTOM GLOW LINE
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
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
        "
      />


      {/* =====================================================
          SPRINKLE ANIMATION
      ====================================================== */}
      <style>{`
        @keyframes missionTwinkle {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(0.65);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.35);
          }
        }
      `}</style>

    </section>
  );
};

export default MissionSection;