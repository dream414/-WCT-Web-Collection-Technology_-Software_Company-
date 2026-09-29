import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Mapsslider() {
  const maps = [
    { image: "/maps1.png" },
    { image: "/maps2.png" },
    { image: "/maps3.png" },
    { image: "/maps4.png" },
    { image: "/maps5.png" },
    { image: "/maps6.png" },
    { image: "/maps7.png" },
    { image: "/maps8.png" },
    { image: "/maps9.png" },
    { image: "/maps10.png" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % maps.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + maps.length) % maps.length);
  };

  return (
    <section
      id="maps"
      className="
        relative
        w-full
        py-20
        px-4
        bg-[#020617]
        text-white
        overflow-hidden
      "
    >
      {/* =====================================================
          AUTHENTIC FUTURISTIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* -----------------------------------------------
            LARGE SOFT GLOW BUBBLES
        ----------------------------------------------- */}

        <motion.div
          className="
            absolute
            -top-32
            -left-32
            w-[430px]
            h-[430px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-3xl
          "
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            top-[20%]
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/[0.07]
            blur-3xl
          "
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[-220px]
            left-[25%]
            w-[550px]
            h-[550px]
            rounded-full
            bg-cyan-400/[0.045]
            blur-3xl
          "
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Atmospheric Bubbles */}

        <motion.div
          className="
            absolute
            top-[16%]
            left-[13%]
            w-20
            h-20
            rounded-full
            border
            border-cyan-400/[0.12]
            bg-cyan-400/[0.025]
            blur-[1px]
          "
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            top-[55%]
            right-[8%]
            w-28
            h-28
            rounded-full
            border
            border-blue-400/[0.10]
            bg-blue-400/[0.025]
            blur-[1px]
          "
          animate={{
            y: [15, -15, 15],
            x: [8, -8, 8],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[14%]
            left-[7%]
            w-12
            h-12
            rounded-full
            border
            border-cyan-300/[0.15]
            bg-cyan-300/[0.035]
          "
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            SUBTLE DIGITAL GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.09]
            bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* =================================================
            RANDOM CYAN / BLUE SPRINKLES
        ================================================= */}

        {Array.from({ length: 55 }).map((_, i) => (
          <motion.span
            key={`sprinkle-${i}`}
            className="
              absolute
              rounded-full
              bg-cyan-300
              shadow-[0_0_8px_rgba(34,211,238,0.65)]
            "
            style={{
              width: `${i % 4 === 0 ? 3 : 2}px`,
              height: `${i % 4 === 0 ? 3 : 2}px`,
              left: `${(i * 37.7) % 100}%`,
              top: `${(i * 61.3) % 100}%`,
              opacity: 0.25 + (i % 5) * 0.08,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.15, 0.65, 0.15],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 3.5 + (i % 6),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 8) * 0.35,
            }}
          />
        ))}

        {/* Blue Sprinkles */}

        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={`blue-${i}`}
            className="
              absolute
              w-[2px]
              h-[2px]
              rounded-full
              bg-blue-400
              shadow-[0_0_9px_rgba(59,130,246,0.8)]
            "
            style={{
              left: `${(i * 53.2) % 100}%`,
              top: `${(i * 31.7) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 7) * 0.3,
            }}
          />
        ))}

        {/* =================================================
            FLOATING MINI PARTICLES
        ================================================= */}

        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="
              absolute
              w-1.5
              h-1.5
              rounded-full
              bg-cyan-400/40
              shadow-[0_0_14px_rgba(34,211,238,0.5)]
            "
            style={{
              left: `${8 + ((i * 71) % 84)}%`,
              top: `${5 + ((i * 43) % 88)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.15, 0.55, 0.15],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* =================================================
            HORIZONTAL ATMOSPHERIC LINES
        ================================================= */}

        <div
          className="
            absolute
            top-[24%]
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/[0.08]
            to-transparent
          "
        />

        <div
          className="
            absolute
            top-[72%]
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-blue-400/[0.07]
            to-transparent
          "
        />

        {/* =================================================
            CORNER GLOW ORBS
        ================================================= */}

        <div
          className="
            absolute
            top-[42%]
            left-[3%]
            w-3
            h-3
            rounded-full
            bg-cyan-400/40
            shadow-[0_0_25px_rgba(34,211,238,0.7)]
          "
        />

        <div
          className="
            absolute
            top-[18%]
            right-[17%]
            w-2
            h-2
            rounded-full
            bg-blue-400/50
            shadow-[0_0_20px_rgba(59,130,246,0.8)]
          "
        />

        <div
          className="
            absolute
            bottom-[20%]
            right-[28%]
            w-2
            h-2
            rounded-full
            bg-cyan-300/40
            shadow-[0_0_18px_rgba(34,211,238,0.7)]
          "
        />
      </div>

      {/* =====================================================
          TOP GLOW LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[75%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          shadow-[0_0_25px_rgba(34,211,238,0.7)]
        "
      />

      {/* =====================================================
          HEADING
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          text-center
          mb-12
        "
      >
        <motion.h2
          whileHover={{
            scale: 1.03,
          }}
          className="
            text-3xl
            md:text-4xl
            font-bold
            bg-gradient-to-r
            from-white
            via-cyan-300
            to-blue-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]
          "
        >
          GIS & Mapping Projects
        </motion.h2>

        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            text-gray-400
            text-sm
            md:text-base
            leading-7
          "
        >
          Explore our GIS maps, geological surveys, spatial analysis,
          terrain visualization, and mapping projects.
        </p>
      </motion.div>

      {/* =====================================================
          MAIN MAP CARD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          rounded-3xl
          p-4
          md:p-6
          bg-[#07111f]/90
          border
          border-cyan-400/20
          shadow-[0_0_40px_rgba(34,211,238,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Card Top Glow */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[60%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            shadow-[0_0_20px_rgba(34,211,238,0.8)]
          "
        />

        {/* =================================================
            MAP IMAGE
        ================================================= */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            bg-[#020617]
            border
            border-cyan-400/10
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 60,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -60,
                scale: 0.98,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative"
            >
              <img
                src={maps[current].image}
                alt={`GIS Map ${current + 1}`}
                className="
                  w-full
                  h-[300px]
                  sm:h-[400px]
                  md:h-[520px]
                  object-contain
                  bg-[#010914]
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020617]/90
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Map Number */}

              <div
                className="
                  absolute
                  top-4
                  left-4
                  px-4
                  py-2
                  rounded-full
                  bg-[#020617]/80
                  border
                  border-cyan-400/30
                  backdrop-blur-md
                  text-cyan-300
                  text-sm
                  font-bold
                  shadow-[0_0_20px_rgba(34,211,238,0.12)]
                "
              >
                MAP {String(current + 1).padStart(2, "0")} /{" "}
                {String(maps.length).padStart(2, "0")}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =================================================
            PREV / NEXT BUTTONS
        ================================================= */}

        <div className="flex justify-center items-center gap-4 mt-6">
          <motion.button
            onClick={prevSlide}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(34,211,238,0.35)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              px-6
              py-2.5
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-sky-400
              text-black
              font-bold
              cursor-pointer
              transition-all
              duration-300
            "
          >
            ← Prev
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(34,211,238,0.35)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              px-6
              py-2.5
              rounded-full
              bg-gradient-to-r
              from-sky-400
              to-blue-500
              text-black
              font-bold
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Next →
          </motion.button>
        </div>

        {/* =================================================
            DOT INDICATORS
        ================================================= */}

        <div className="flex justify-center flex-wrap gap-2 mt-7">
          {maps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View map ${i + 1}`}
              className={`
                h-2
                rounded-full
                cursor-pointer
                transition-all
                duration-300
                ${
                  current === i
                    ? "w-9 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                    : "w-2 bg-cyan-400/30 hover:bg-cyan-400/70"
                }
              `}
            />
          ))}
        </div>

        {/* =================================================
            THUMBNAILS
        ================================================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-5
            sm:grid-cols-5
            md:grid-cols-10
            gap-2
          "
        >
          {maps.map((map, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`
                relative
                overflow-hidden
                rounded-lg
                border
                cursor-pointer
                transition-all
                duration-300
                ${
                  current === i
                    ? "border-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                    : "border-cyan-400/10 hover:border-cyan-400/40"
                }
              `}
            >
              <img
                src={map.image}
                alt={`Map thumbnail ${i + 1}`}
                className="
                  w-full
                  h-14
                  sm:h-16
                  object-cover
                  bg-[#010914]
                "
              />

              <span
                className="
                  absolute
                  bottom-1
                  right-1
                  px-1.5
                  py-0.5
                  rounded
                  bg-[#020617]/80
                  text-[9px]
                  text-cyan-300
                  font-bold
                "
              >
                {i + 1}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}