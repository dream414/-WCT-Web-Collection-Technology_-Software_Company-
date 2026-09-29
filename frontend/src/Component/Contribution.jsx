// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "GBDMA Team",
    image: "/gb.png",
    stars: 5,
    text: "Web Collection Technology delivered outstanding GIS solutions that greatly enhanced our service",
  },
  {
    name: "Soni Jawari Center",
    image: "/soni.png",
    stars: 5,
    text: "Web Collection executed our Land Reform project with exceptional accuracy and professionalism",
  },
  {
    name: "Deputy Commissioner's Office",
    image: "/government baltistan.png",
    stars: 5,
    text: "Web Collection delivered a high-quality 3D road model for our project with precision and professionalism; we look forward to involving them in future initiatives",
  },
];

export default function Contribution() {
  return (
    <section
      id="testimonials"
      className="
        relative
        py-20
        px-4
        bg-[#020617]
        flex
        justify-center
        overflow-hidden
      "
    >
      {/* =====================================================
          FUTURISTIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Cyan Glow */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        {/* Right Blue Glow */}
        <div
          className="
            absolute
            top-1/4
            -right-48
            w-[550px]
            h-[550px]
            rounded-full
            bg-blue-600/10
            blur-3xl
          "
        />

        {/* Bottom Cyan Glow */}
        <div
          className="
            absolute
            -bottom-48
            left-1/3
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-400/5
            blur-3xl
          "
        />

        {/* =================================================
            ANIMATED SPRINKLES
        ================================================= */}

        {Array.from({ length: 40 }).map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              w-1
              h-1
              rounded-full
              bg-cyan-300/50
              shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "
            initial={{
              left: `${(index * 29) % 100}%`,
              top: `${(index * 43) % 100}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 4 + (index % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (index % 6) * 0.3,
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
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          shadow-[0_0_25px_rgba(34,211,238,0.7)]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

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
          max-w-7xl
          w-full
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >
        {/* ===================================================
            HEADING + LOGO
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          {/* Heading */}
          <motion.h2
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
            whileHover={{
              scale: 1.05,
            }}
            className="
              mb-4
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-white
              inline-block
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]
            "
          >
            Government of Gilgit-Baltistan
          </motion.h2>

          {/* =================================================
              LOGO — SAME POSITION AS ORIGINAL
          ================================================= */}

          <motion.img
            src="/government baltistan.png"
            alt="Government of Gilgit-Baltistan Logo"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 250,
            }}
            viewport={{
              once: true,
            }}
            className="
              w-24
              h-24
              sm:w-28
              sm:h-28
              mx-auto
              mt-4
              object-contain
              rounded-lg
              bg-[#07111f]
              p-1
              border-2
              border-cyan-400/50
              shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          />
        </motion.div>

        {/* ===================================================
            CARDS GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            items-stretch
          "
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.04,
                y: -7,
              }}
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                bg-gradient-to-br
                from-cyan-400/70
                via-sky-400/30
                to-blue-600/60
                p-[1px]
                h-full
                shadow-[0_0_25px_rgba(34,211,238,0.05)]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
                transition-all
                duration-300
              "
            >
              {/* =================================================
                  ANIMATED BORDER
              ================================================= */}

              <motion.div
                initial={{
                  backgroundPosition: "0% 50%",
                }}
                whileHover={{
                  backgroundPosition: "100% 50%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  bg-[length:200%_200%]
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-600
                "
                style={{
                  mask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "destination-out",
                  padding: "1px",
                  borderRadius: "16px",
                }}
              />

              {/* =================================================
                  INNER CARD
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  bg-[#07111f]/95
                  backdrop-blur-xl
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  items-center
                  text-center
                  justify-between
                  h-full
                  min-h-[350px]
                "
              >
                {/* Card Top Glow */}
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-1/2
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                    shadow-[0_0_18px_rgba(34,211,238,0.6)]
                  "
                />

                {/* =================================================
                    TOP CONTENT
                ================================================= */}

                <div className="flex flex-col items-center w-full">
                  {/* Logo Image */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="
                      relative
                      mb-5
                      rounded-2xl
                      p-[1px]
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      shadow-[0_0_25px_rgba(34,211,238,0.12)]
                    "
                  >
                    <div
                      className="
                        rounded-2xl
                        bg-[#020617]
                        p-2
                      "
                    >
                      <motion.img
                        src={t.image}
                        alt={t.name}
                        className="
                          w-24
                          h-24
                          object-contain
                          rounded-xl
                          cursor-pointer
                        "
                      />
                    </div>
                  </motion.div>

                  {/* =================================================
                      STARS
                  ================================================= */}

                  <div className="flex gap-1 mb-5">
                    {Array(t.stars)
                      .fill(0)
                      .map((_, i) => (
                        <motion.svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          whileHover={{
                            scale: 1.2,
                            y: -2,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                          }}
                          className="
                            w-5
                            h-5
                            text-cyan-300
                            drop-shadow-[0_0_7px_rgba(34,211,238,0.5)]
                          "
                        >
                          <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.2 2 9.3l7.1-.7L12 2z" />
                        </motion.svg>
                      ))}
                  </div>

                  {/* =================================================
                      TESTIMONIAL TEXT
                  ================================================= */}

                  <motion.p
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      text-gray-300
                      text-sm
                      sm:text-base
                      leading-7
                    "
                  >
                    “{t.text}”
                  </motion.p>
                </div>

                {/* =================================================
                    CLIENT NAME
                ================================================= */}

                <motion.p
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    font-semibold
                    mt-8
                    bg-gradient-to-r
                    from-cyan-300
                    to-blue-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  – {t.name}
                </motion.p>

                {/* Bottom Accent */}
                <div
                  className="
                    mt-5
                    w-16
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                    shadow-[0_0_12px_rgba(34,211,238,0.5)]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}