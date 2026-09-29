// src/components/Gis.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Gis() {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Basic Plan",
      color: "text-cyan-300",
      border: "border-cyan-400/50",
      glow: "shadow-cyan-500/20",
      icon: "🟢",
      desc: "Perfect for simple map needs",
      features: [
        "1 custom map design",
        "Basic data visualization",
        "Standard layout & labeling",
        "One revision included",
        "Delivered in JPG/PNG/PDF format",
        "Best for: students, small projects, and simple presentations",
      ],
    },
    {
      title: "Advanced Plan",
      color: "text-sky-300",
      border: "border-sky-400/50",
      glow: "shadow-sky-500/20",
      icon: "🔵",
      desc: "Ideal for professional and business use",
      features: [
        "Up to 3 custom maps",
        "Spatial analysis & thematic mapping",
        "Professional layout & cartographic styling",
        "Data cleaning & organization",
        "Up to 3 revisions",
        "Delivered in high-resolution + editable formats",
        "Best for: researchers, businesses, and reports",
      ],
    },
    {
      title: "Premium Plan",
      color: "text-blue-300",
      border: "border-blue-500/50",
      glow: "shadow-blue-500/20",
      icon: "🟣",
      desc: "Complete GIS mapping solution",
      features: [
        "Up to 7 custom maps or full project support",
        "Advanced spatial analysis & insights",
        "Interactive web map or dashboard (optional)",
        "Custom design, branding & advanced visualization",
        "Priority support & unlimited revisions",
        "All formats + source files included",
        "Best for: organizations, government projects, and decision-making reports",
      ],
    },
  ];

  return (
    <section
      className="
        relative
        bg-[#020617]
        min-h-screen
        py-20
        px-4
        md:px-6
        overflow-hidden
        text-white
      "
    >
      {/* =====================================================
          FUTURISTIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
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

        {/* Blue Glow */}
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

        {/* Bottom Glow */}
        <div
          className="
            absolute
            -bottom-48
            left-1/3
            w-[500px]
            h-[500px]
            rounded-full
            bg-sky-400/5
            blur-3xl
          "
        />

        {/* Animated Sprinkles */}
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
          GO BACK BUTTON
      ===================================================== */}

      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(34,211,238,0.3)",
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          relative
          z-10
          mb-14
          px-6
          py-3
          rounded-full
          border
          border-cyan-400/50
          bg-[#07111f]/80
          backdrop-blur-md
          text-cyan-300
          font-semibold
          transition-all
          duration-300
          cursor-pointer
          shadow-[0_0_15px_rgba(34,211,238,0.08)]
        "
      >
        ← Go Back
      </motion.button>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-14"
        >
          <motion.h2
            whileHover={{
              scale: 1.03,
            }}
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              mb-5
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]
            "
          >
            GIS Pricing Plans
          </motion.h2>

          <p
            className="
              text-gray-300
              text-base
              md:text-lg
              leading-7
              max-w-2xl
              mx-auto
            "
          >
            Choose the perfect mapping package for your project needs
          </p>
        </motion.div>

        {/* ===================================================
            PLANS GRID
        =================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className={`
                group
                relative
                rounded-3xl
                p-[1px]
                overflow-hidden
                bg-gradient-to-br
                from-cyan-400/60
                via-sky-400/20
                to-blue-600/60
                ${plan.glow}
                shadow-2xl
                transition-all
                duration-500
              `}
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
                  borderRadius: "24px",
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
                  rounded-3xl
                  p-7
                  md:p-8
                  text-left
                  h-full
                  overflow-hidden
                "
              >
                {/* Top Glow */}
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

                {/* Background Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    w-40
                    h-40
                    rounded-full
                    bg-cyan-400/5
                    blur-3xl
                    group-hover:bg-cyan-400/10
                    transition-all
                    duration-500
                  "
                />

                <div className="relative z-10">
                  {/* =================================================
                      ICON
                  ================================================= */}

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="
                      text-4xl
                      mb-5
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      shadow-[0_0_20px_rgba(34,211,238,0.1)]
                    "
                  >
                    {plan.icon}
                  </motion.div>

                  {/* =================================================
                      PLAN TITLE
                  ================================================= */}

                  <motion.h3
                    whileHover={{
                      x: 4,
                    }}
                    className={`
                      text-2xl
                      font-bold
                      mb-3
                      ${plan.color}
                    `}
                  >
                    {plan.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-7 leading-7">
                    {plan.desc}
                  </p>

                  {/* =================================================
                      FEATURES
                  ================================================= */}

                  <ul className="space-y-3 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + i * 0.05,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="
                          flex
                          items-start
                          gap-3
                          border-b
                          border-white/5
                          pb-3
                          leading-6
                        "
                      >
                        <span
                          className="
                            flex-shrink-0
                            w-6
                            h-6
                            rounded-full
                            bg-cyan-400/10
                            border
                            border-cyan-400/20
                            flex
                            items-center
                            justify-center
                            text-cyan-300
                            text-xs
                            mt-0.5
                          "
                        >
                          ✔
                        </span>

                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* =================================================
                      SELECT PLAN BUTTON
                  ================================================= */}

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow:
                        "0 0 25px rgba(34,211,238,0.25)",
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`
                      relative
                      mt-8
                      w-full
                      py-3
                      rounded-xl
                      font-semibold
                      bg-transparent
                      border
                      ${plan.border}
                      ${plan.color}
                      overflow-hidden
                      transition-all
                      duration-300
                      cursor-pointer
                    `}
                  >
                    <span className="relative z-10">
                      Select Plan
                    </span>

                    <span
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-cyan-400/10
                        via-sky-400/10
                        to-blue-500/10
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}