import React from "react";
import {
  Globe,
  Brain,
  ChartLine,
  ChartBar,
  Code,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "GIS Development",
    description:
      "Advanced GIS solutions with custom mapping, spatial analysis, and location-based services.",
    icon: Globe,
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions, predictive analytics, and intelligent automation systems.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Data Science",
    description:
      "Complex data analysis, visualization, and predictive modeling using advanced statistical methods.",
    icon: ChartLine,
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing with SEO, content strategy, and analytics-driven campaigns.",
    icon: ChartBar,
  },
  {
    number: "05",
    title: "Web Development",
    description:
      "Modern web applications with responsive design and seamless user experience.",
    icon: Code,
  },
  {
    number: "06",
    title: "Business Intelligence",
    description:
      "Data-driven insights and analytics dashboards for informed decision making.",
    icon: LayoutDashboard,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020617]
        px-4
        py-24
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Cyan Glow */}
        <div
          className="
            absolute
            -top-48
            left-1/4
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        {/* Right Blue Glow */}
        <div
          className="
            absolute
            right-[-220px]
            top-1/3
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        {/* Bottom Cyan Glow */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-1/4
            h-[650px]
            w-[650px]
            rounded-full
            bg-cyan-400/5
            blur-[150px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            bg-[linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-cyan-300
              shadow-[0_0_12px_rgba(34,211,238,0.8)]
            "
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 47) % 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.15, 0.8, 0.15],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (index % 5) * 0.25,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[2px]
          w-[85%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          shadow-[0_0_30px_rgba(34,211,238,0.9)]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

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
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-16 text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/40
              bg-cyan-400/10
              px-5
              py-2
              backdrop-blur-xl
              shadow-[0_0_20px_rgba(34,211,238,0.12)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,1)]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-cyan-300
              "
            >
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
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
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            <span className="text-white">Our </span>

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              md:text-base
            "
          >
            Comprehensive digital solutions powered by cutting-edge technology
          </motion.p>

          <div className="mx-auto mt-8 flex max-w-md items-center gap-4">
            <div
              className="
                h-[2px]
                flex-1
                bg-gradient-to-r
                from-transparent
                to-cyan-400
              "
            />

            <div
              className="
                h-2
                w-2
                rotate-45
                border-2
                border-cyan-400
                bg-cyan-400/20
                shadow-[0_0_10px_rgba(34,211,238,0.7)]
              "
            />

            <div
              className="
                h-[2px]
                flex-1
                bg-gradient-to-l
                from-transparent
                to-cyan-400
              "
            />
          </div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative"
              >
                {/* =================================================
                    OUTER HOVER GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-[30px]
                    bg-gradient-to-br
                    from-cyan-400/0
                    via-sky-400/0
                    to-blue-500/0
                    opacity-0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:from-cyan-400/30
                    group-hover:via-sky-400/20
                    group-hover:to-blue-500/30
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className="
                    relative
                    min-h-[360px]
                    overflow-hidden
                    rounded-[28px]

                    border-2
                    border-cyan-400/30

                    bg-[#07111f]/95
                    backdrop-blur-2xl

                    shadow-[0_0_25px_rgba(34,211,238,0.06)]

                    transition-all
                    duration-500

                    group-hover:border-cyan-300
                    group-hover:shadow-[0_0_45px_rgba(34,211,238,0.20)]
                  "
                >
                  {/* =================================================
                      LARGE NUMBER
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[-8px]
                      top-[-25px]

                      text-[150px]
                      font-black
                      leading-none
                      tracking-tighter

                      text-cyan-400/20

                      transition-all
                      duration-500

                      group-hover:text-cyan-300/35
                    "
                  >
                    {service.number}
                  </div>

                  {/* Number Inner Shadow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[35px]
                      top-[65px]
                      text-5xl
                      font-black
                      text-cyan-200/5
                      blur-sm
                    "
                  >
                    {service.number}
                  </div>

                  {/* =================================================
                      TOP RIGHT CORNER
                  ================================================= */}

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-24
                      w-24
                      border-b-2
                      border-l-2
                      border-cyan-400/40

                      transition-all
                      duration-500

                      group-hover:border-cyan-300
                    "
                  />

                  {/* Corner Dot */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      h-3
                      w-3
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_18px_rgba(34,211,238,1)]
                    "
                  />

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      min-h-[360px]
                      flex-col
                      p-7
                    "
                  >
                    {/* Top Row */}

                    <div className="flex items-start justify-between">
                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                        }}
                        className="
                          relative
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center

                          rounded-2xl

                          border-2
                          border-cyan-400/50

                          bg-gradient-to-br
                          from-cyan-400/20
                          via-sky-400/10
                          to-blue-500/10

                          shadow-[0_0_30px_rgba(34,211,238,0.12)]

                          transition-all
                          duration-500

                          group-hover:border-cyan-300
                          group-hover:bg-cyan-400/20
                          group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
                        "
                      >
                        <Icon
                          className="
                            h-7
                            w-7
                            text-cyan-300
                            drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                          "
                        />

                        {/* Icon Corners */}

                        <span
                          className="
                            absolute
                            -right-[2px]
                            -top-[2px]
                            h-3
                            w-3
                            border-r-2
                            border-t-2
                            border-cyan-300
                          "
                        />

                        <span
                          className="
                            absolute
                            -bottom-[2px]
                            -left-[2px]
                            h-3
                            w-3
                            border-b-2
                            border-l-2
                            border-cyan-300
                          "
                        />
                      </motion.div>

                      {/* Service Number */}

                      <div
                        className="
                          pt-2
                          text-xs
                          font-bold
                          tracking-[0.25em]
                          text-cyan-300
                        "
                      >
                        SERVICE
                        <span className="ml-2 text-white/50">
                          / {service.number}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <motion.h3
                      whileHover={{
                        x: 5,
                      }}
                      className="
                        mt-8
                        text-2xl
                        font-bold
                        tracking-tight
                        text-white

                        transition-all
                        duration-300

                        group-hover:text-cyan-200
                      "
                    >
                      {service.title}
                    </motion.h3>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p
                      className="
                        mt-4
                        max-w-md
                        text-sm
                        leading-7
                        text-gray-400

                        transition-colors
                        duration-300

                        group-hover:text-gray-200
                      "
                    >
                      {service.description}
                    </p>

                    <div className="flex-1" />

                    {/* =================================================
                        BOTTOM
                    ================================================= */}

                    <div className="mt-8 flex items-center justify-between">
                      {/* Accent */}

                      <div className="flex items-center gap-2">
                        <span
                          className="
                            h-[2px]
                            w-8
                            bg-cyan-400
                            shadow-[0_0_8px_rgba(34,211,238,0.8)]
                            transition-all
                            duration-500
                            group-hover:w-16
                          "
                        />

                        <span
                          className="
                            h-2
                            w-2
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_10px_rgba(34,211,238,1)]
                          "
                        />

                        <span
                          className="
                            h-[2px]
                            w-4
                            bg-cyan-400/50
                          "
                        />
                      </div>

                      {/* Arrow */}

                      <motion.div
                        whileHover={{
                          x: 5,
                          y: -5,
                        }}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full

                          border-2
                          border-cyan-400/30

                          bg-cyan-400/5

                          transition-all
                          duration-300

                          group-hover:border-cyan-300
                          group-hover:bg-cyan-400/15
                          group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                        "
                      >
                        <ArrowUpRight
                          className="
                            h-4
                            w-4
                            text-cyan-400
                            transition-colors
                            group-hover:text-cyan-200
                          "
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM HOVER LINE
                  ================================================= */}

                  <motion.div
                    initial={{
                      x: "-100%",
                    }}
                    whileHover={{
                      x: "100%",
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-full

                      bg-gradient-to-r
                      from-transparent
                      via-cyan-300
                      to-transparent

                      opacity-0

                      shadow-[0_0_20px_rgba(34,211,238,1)]

                      group-hover:opacity-100
                    "
                  />

                  {/* =================================================
                      TOP GLOW LINE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-[2px]
                      w-1/2
                      -translate-x-1/2

                      bg-gradient-to-r
                      from-transparent
                      via-cyan-300
                      to-transparent

                      opacity-70

                      transition-all
                      duration-500

                      group-hover:w-3/4
                      group-hover:opacity-100
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM INFORMATION BAR
        ===================================================== */}

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
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-4

            rounded-2xl

            border-2
            border-cyan-400/25

            bg-cyan-400/[0.03]

            px-6
            py-5

            shadow-[0_0_25px_rgba(34,211,238,0.05)]

            backdrop-blur-xl

            sm:flex-row
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,1)]
              "
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-300
              "
            >
              Technology • Data • Digital
            </span>
          </div>

          <div
            className="
              text-xs
              font-bold
              tracking-widest
              text-cyan-300
            "
          >
            06 SERVICES
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}