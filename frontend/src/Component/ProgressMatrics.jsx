

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    value: 6,
    label: "Years in Experience",
    max: 100,
  },
  {
    value: 50,
    label: "Clients Worldwide",
    max: 100,
  },
  {
    value: 97,
    label: "Completed Projects",
    max: 100,
  },
];

export default function ProgressMetrics() {
  const [progress, setProgress] = useState(metrics.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(metrics.map((m) => m.value));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative p-5 md:p-10 bg-[#020617] overflow-hidden">

      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main Blue Glow */}
        <div
          className="
            absolute
            top-[-180px]
            left-1/2
            -translate-x-1/2
            w-[650px]
            h-[450px]
            rounded-full
            bg-blue-600/10
            blur-[130px]
          "
        />

        {/* Cyan Left Glow */}
        <div
          className="
            absolute
            left-[-200px]
            top-[30%]
            w-[400px]
            h-[400px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        {/* Blue Right Glow */}
        <div
          className="
            absolute
            right-[-200px]
            bottom-[-150px]
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-700/10
            blur-[130px]
          "
        />

        {/* =====================================================
            ANIMATED SPRINKLES
        ===================================================== */}

        {Array.from({ length: 45 }).map((_, i) => {
          const top = (i * 43) % 100;
          const left = (i * 71) % 100;
          const size = 2 + (i % 3);

          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-cyan-300"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow:
                  "0 0 6px rgba(34,211,238,0.9), 0 0 14px rgba(37,99,235,0.7)",
              }}
              animate={{
                opacity: [0.1, 0.75, 0.1],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: (i % 10) * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 max-w-5xl mx-auto space-y-10 px-2 md:px-6">

        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            className="
              group
              relative
              p-5
              md:p-6
              rounded-2xl
              bg-[#07111f]/90
              backdrop-blur-xl
              overflow-hidden
              shadow-[0_0_25px_rgba(15,23,42,0.7)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
            "
            style={{
              border: "1px solid rgba(34,211,238,0.25)",
            }}
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.2,
            }}
            whileHover={{
              scale: 1.02,
            }}
          >

            {/* =================================================
                CARD GLOW
            ================================================= */}

            <div
              className="
                absolute
                -top-20
                -right-20
                w-40
                h-40
                rounded-full
                bg-cyan-500/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-cyan-400/20
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -left-20
                w-40
                h-40
                rounded-full
                bg-blue-600/10
                blur-3xl
              "
            />

            {/* =================================================
                RANKING NUMBER + LABEL
            ================================================= */}

            <div className="relative z-10 flex items-center gap-3 mb-4">

              {/* Ranking Number */}

              <motion.div
                className="
                  text-4xl
                  font-extrabold
                  w-12
                  bg-gradient-to-b
                  from-blue-400
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]
                "
                whileHover={{
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              >
                {idx + 1}.
              </motion.div>

              {/* Label */}

              <motion.h3
                className="
                  text-lg
                  md:text-xl
                  font-semibold
                  text-gray-200
                  transition-colors
                  duration-300
                "
                whileHover={{
                  scale: 1.05,
                  color: "#67e8f9",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {metric.label}
              </motion.h3>
            </div>

            {/* =================================================
                PROGRESS BAR
            ================================================= */}

            <div
              className="
                relative
                z-10
                w-full
                h-4
                bg-slate-800
                rounded-full
                overflow-hidden
                border
                border-cyan-500/10
              "
            >

              {/* Progress Fill */}

              <motion.div
                className="
                  relative
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-400
                "
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${(progress[idx] / metric.max) * 100}%`,
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                  delay: idx * 0.2,
                }}
              >

                {/* Moving Shine */}

                <motion.div
                  className="
                    absolute
                    top-0
                    right-0
                    h-full
                    w-20
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                  "
                  animate={{
                    x: [-80, 80],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />

              </motion.div>
            </div>

            {/* =================================================
                NUMERIC VALUE
            ================================================= */}

            <div
              className="
                relative
                z-10
                mt-3
                flex
                justify-end
                text-sm
                font-medium
                text-gray-400
              "
            >
              <span className="text-cyan-300">
                {metric.value}
              </span>

              <span className="mx-1 text-gray-500">
                /
              </span>

              <span>
                {metric.max}
              </span>
            </div>

            {/* =================================================
                BOTTOM ANIMATED LINE
            ================================================= */}

            <motion.div
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
              initial={{
                width: "0%",
                opacity: 0,
              }}
              whileHover={{
                width: "100%",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            />

          </motion.div>
        ))}
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-24
          bg-gradient-to-t
          from-[#020617]
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}

