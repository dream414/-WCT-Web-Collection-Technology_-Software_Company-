import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/site.png",
    title: "Site Selection Maps",
    content:
      "Comprehensive site selection analysis with terrain and slope data",
  },
  {
    src: "/2map.png",
    title: "Gilgit Settlements Map",
    content:
      "Map of settlements and communities in the Gilgit region",
  },
  {
    src: "/gilgit baltistamap.png",
    title: "Gilgit-Baltistan Physical Map",
    content:
      "Physical features including colleges, peaks, district headquarters and roads",
  },
  {
    src: "/gb Evelation.png",
    title: "GB Evelation Map",
    content:
      "Elevation contours of Gilgit-Baltistan region from 915m to 8,200m",
  },
  {
    src: "/sub division.png",
    title: "Roundo Union Concils",
    content:
      "Sub-Division Roundo Union Concils with population distribution",
  },
  {
    src: "/gb land.png",
    title: "Gilgit-Baltistan Land Type Maps",
    content:
      "Categorical map of land types across Gilgit-Baltistan",
  },
  {
    src: "/Skardu.png",
    title: "Skardu Lakes and Rivers",
    content:
      "Lakes and Rivers occurrence in Skardu Sub-Division (2000-2021)",
  },
  {
    src: "/district skardu.png",
    title: "Skardu Land Distribution",
    content:
      "Land type distibution accross District Skardu",
  },
  {
    src: "/watershed.png",
    title: "Watershed Catchnment Map",
    content:
      "Watershed Catchment area map of Gilgit district",
  },
  {
    src: "/Earthquake.png",
    title: "Earthquake Hotspots",
    content:
      "Recent Earthquake hotspots in Roudo (Skardu) region",
  },
  {
    src: "/hunza district.png",
    title: "Hunza District Map",
    content:
      "Contour, slope, aspect and hillshade map of Hunza District",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [gap, setGap] = useState(280);
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(null);

  // =========================================================
  // RESPONSIVE SPACING
  // =========================================================

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 480) {
        setGap(150);
      } else if (window.innerWidth < 768) {
        setGap(190);
      } else if (window.innerWidth < 1024) {
        setGap(230);
      } else {
        setGap(280);
      }
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  // =========================================================
  // FUTURISTIC BACKGROUND SPRINKLES
  // =========================================================

  const sprinkles = Array.from({ length: 35 });

  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        bg-[#020617]
        text-white
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-20
        overflow-hidden
      "
    >
      {/* =====================================================
          GLOWING BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Cyan Glow */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        {/* Right Blue Glow */}
        <div
          className="
            absolute
            top-1/3
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/10
            blur-3xl
          "
        />

        {/* Bottom Cyan Glow */}
        <div
          className="
            absolute
            -bottom-40
            left-1/3
            w-[450px]
            h-[450px]
            rounded-full
            bg-cyan-400/5
            blur-3xl
          "
        />

        {/* Sprinkles */}
        {sprinkles.map((_, i) => (
          <motion.span
            key={i}
            className="
              absolute
              w-1
              h-1
              rounded-full
              bg-cyan-300/50
              shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "
            initial={{
              left: `${(i * 29) % 100}%`,
              top: `${(i * 47) % 100}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.35,
            }}
          />
        ))}
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
          h-[1px]
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

      <div
        className="
          relative
          z-10
          text-center
          mt-16
          mb-12
          max-w-3xl
        "
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-center
            bg-gradient-to-r
            from-white
            via-cyan-300
            to-blue-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]
          "
        >
          MPS Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            mt-6
            text-base
            md:text-lg
            text-gray-300
            leading-7
          "
        >
          Explore our comprehensive collection of maps and spatial planning
          resources
        </motion.p>
      </div>

      {/* =====================================================
          SLIDER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          h-[32rem]
          sm:h-[38rem]
          md:h-[42rem]
          lg:h-[46rem]
          flex
          items-center
          justify-center
          overflow-visible
        "
      >
        {slides.map((slide, i) => {
          let pos = i - index;

          // =================================================
          // LOOP POSITIONS
          // =================================================

          if (pos < -Math.floor(slides.length / 2)) {
            pos += slides.length;
          }

          if (pos > Math.floor(slides.length / 2)) {
            pos -= slides.length;
          }

          const isCenter = pos === 0;

          // =================================================
          // SCALE
          // =================================================

          const scale =
            pos === 0
              ? 1.1
              : Math.abs(pos) === 1
              ? 0.85
              : Math.abs(pos) === 2
              ? 0.65
              : 0;

          return (
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) {
                  setIndex((i) => (i + 1) % slides.length);
                }

                if (info.offset.x > 80) {
                  setIndex(
                    (i) =>
                      (i - 1 + slides.length) %
                      slides.length
                  );
                }
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setOpen(slide)}
              animate={{
                x: pos * gap,
                scale,
                opacity: Math.abs(pos) > 2 ? 0 : 1,
                zIndex: isCenter ? 30 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className="absolute cursor-pointer"
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative group">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="
                    rounded-2xl
                    border-2
                    border-cyan-400/60
                    hover:border-cyan-300
                    shadow-[0_0_25px_rgba(34,211,238,0.12)]
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.28)]
                    w-56
                    sm:w-72
                    md:w-88
                    lg:w-96
                    h-60
                    sm:h-72
                    md:h-80
                    lg:h-96
                    object-cover
                    transition-all
                    duration-500
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-t
                    from-[#020617]/70
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* =================================================
                    HOVER TEXT
                ================================================= */}

                {hovered === i && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-[#020617]/80
                      backdrop-blur-sm
                      flex
                      items-center
                      justify-center
                      p-4
                      text-center
                      border
                      border-cyan-400/40
                    "
                  >
                    <div>
                      <div
                        className="
                          mx-auto
                          mb-3
                          w-10
                          h-10
                          rounded-full
                          bg-cyan-400/10
                          border
                          border-cyan-400/40
                          flex
                          items-center
                          justify-center
                          shadow-[0_0_20px_rgba(34,211,238,0.18)]
                        "
                      >
                        <span className="text-cyan-300 text-lg">
                          +
                        </span>
                      </div>

                      <p className="text-white text-xs sm:text-sm md:text-base leading-6">
                        {slide.content}
                      </p>

                      <p
                        className="
                          mt-4
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-cyan-400
                        "
                      >
                        Click to View
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* =================================================
                  CENTER TITLE
              ================================================= */}

              {isCenter && (
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    text-center
                    mt-5
                    font-bold
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                    drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]
                  "
                >
                  {slide.title}
                </motion.h3>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          FULLSCREEN MODAL
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              bg-[#020617]/95
              backdrop-blur-md
              z-50
              flex
              items-center
              justify-center
              p-4
              md:p-6
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(null)}
          >
            {/* Background Glow */}
            <div
              className="
                pointer-events-none
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                max-w-6xl
                max-h-[90vh]
                flex
                items-center
                justify-center
              "
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={open.src}
                alt={open.title}
                className="
                  max-w-full
                  max-h-[90vh]
                  w-auto
                  h-auto
                  rounded-2xl
                  border-2
                  border-cyan-400/60
                  object-contain
                  shadow-[0_0_50px_rgba(34,211,238,0.2)]
                "
              />

              {/* Close Button */}
              <button
                onClick={() => setOpen(null)}
                className="
                  absolute
                  -top-4
                  -right-4
                  w-10
                  h-10
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-black
                  font-bold
                  text-xl
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(34,211,238,0.3)]
                  hover:scale-110
                  transition-transform
                  duration-300
                  cursor-pointer
                "
                aria-label="Close image"
              >
                ×
              </button>

              {/* Modal Title */}
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  w-[90%]
                  text-center
                  px-4
                  py-3
                  rounded-xl
                  bg-[#020617]/80
                  backdrop-blur-md
                  border
                  border-cyan-400/20
                "
              >
                <p
                  className="
                    text-sm
                    md:text-base
                    font-semibold
                    bg-gradient-to-r
                    from-cyan-300
                    to-blue-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  {open.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}