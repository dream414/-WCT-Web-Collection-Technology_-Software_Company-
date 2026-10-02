
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "500+", label: "Global Clients" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Expert Support" },
    { value: "5+", label: "Years Experience" },
  ];

  const bottomBoxes = [
    {
      img: "/MAP4.jpg",
      text: "Anas Ali Marketing Manager at Web Collection Marketing Expert With in 12 years of Experience",
    },
    {
      img: "/MAP5.jpg",
      text: "Rashid Iqbal: Tech Expert at Web Collection. Full stack and block chain Developer With in 13 years of Experience in Development",
    },
    {
      img: "/MAP8.jpg",
      text: "Nadir Ali"
    },
    {
      img: "/MAP7.jpg",
      text: "Zain Abbas",
    },
    {
      img: "/MAP6.jpg",
      text: "Zain Abbas: Designe With 4 years of Experience in Front End Designer",
    },
    {
      img: "/aps.jpg",
      text: "Nadir Ali : GIS Expert at Web Collection With 3 years of Experience in GIS and Remote Sensing",
    },
    {
      img: "/MAP10.jpg",
      text: "Qaiser Abbas: GIS team Lead and GIS manager at Web Collection 5 year of Experience in GIS and Remote sensing",
    },
    {
      img: "/MAP11.jpg",
      text: "Akiram Abbas Officer Manager at Web Collection. Designer",
    },
  ];

  const sprinkles = Array.from({ length: 55 });

  const positions = [
    ["4%", "8%"],
    ["9%", "25%"],
    ["15%", "72%"],
    ["21%", "12%"],
    ["27%", "88%"],
    ["33%", "35%"],
    ["38%", "65%"],
    ["44%", "15%"],
    ["49%", "82%"],
    ["54%", "42%"],
    ["59%", "8%"],
    ["64%", "72%"],
    ["69%", "28%"],
    ["74%", "90%"],
    ["79%", "12%"],
    ["84%", "55%"],
    ["89%", "32%"],
    ["94%", "78%"],
    ["98%", "18%"],
    ["6%", "50%"],
    ["12%", "92%"],
    ["18%", "42%"],
    ["24%", "62%"],
    ["30%", "20%"],
    ["36%", "92%"],
    ["42%", "48%"],
    ["48%", "28%"],
    ["53%", "62%"],
    ["58%", "90%"],
    ["63%", "48%"],
    ["68%", "18%"],
    ["73%", "58%"],
    ["78%", "82%"],
    ["83%", "38%"],
    ["88%", "68%"],
    ["93%", "44%"],
    ["97%", "92%"],
    ["3%", "38%"],
    ["11%", "65%"],
    ["17%", "18%"],
    ["23%", "80%"],
    ["29%", "50%"],
    ["35%", "8%"],
    ["41%", "76%"],
    ["47%", "55%"],
    ["52%", "15%"],
    ["57%", "70%"],
    ["62%", "35%"],
    ["67%", "95%"],
    ["72%", "8%"],
    ["77%", "45%"],
    ["82%", "75%"],
    ["87%", "18%"],
    ["92%", "60%"],
    ["96%", "35%"],
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-[#020617] text-white overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      {/* Top Left Dark Blue Glow */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-blue-900/25 rounded-full blur-[150px]" />

      {/* Top Right Cyan Glow */}
      <div className="absolute top-[15%] -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

      {/* Center Blue Glow */}
      <div className="absolute top-[45%] left-[35%] w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[160px]" />

      {/* Bottom Cyan Glow */}
      <div className="absolute bottom-[-200px] right-[20%] w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]" />

      {/* =====================================================
          GLOWING SPRINKLES
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sprinkles.map((_, index) => {
          const position = positions[index];

          return (
            <motion.span
              key={index}
              className={`absolute rounded-full ${
                index % 3 === 0
                  ? "bg-cyan-300"
                  : index % 3 === 1
                  ? "bg-cyan-500"
                  : "bg-blue-500"
              }`}
              style={{
                left: position[0],
                top: position[1],
                width: index % 4 === 0 ? "4px" : "2px",
                height: index % 4 === 0 ? "4px" : "2px",
                boxShadow:
                  index % 3 === 0
                    ? "0 0 12px rgba(103,232,249,0.9)"
                    : "0 0 10px rgba(59,130,246,0.8)",
              }}
              animate={{
                opacity: [0.15, 1, 0.3, 0.9, 0.15],
                scale: [0.7, 1.5, 0.9, 1.3, 0.7],
              }}
              transition={{
                duration: 2.5 + (index % 5) * 0.7,
                repeat: Infinity,
                delay: (index % 8) * 0.35,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container px-4 mx-auto relative z-10"
      >
        {/* ================= TOP ================= */}

        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-cyan-100/80"
          >
            Web Collection Technology delivers smart GIS & AI-based geospatial
            solutions for real-world impact.
          </motion.p>
        </div>

        {/* =================================================
            IMAGE + VISION / APPROACH
        ================================================== */}

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ================= BIG IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group"
            >
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />

              <div
                className="
                  relative
                  z-10
                  rounded-2xl
                  overflow-hidden
                  border-2
                  border-cyan-400/70
                  shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  bg-[#020617]
                  group-hover:border-cyan-300
                  group-hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                  transition-all
                  duration-500
                "
              >
                <motion.img
                  src="./team pic.png"
                  alt="Team"
                  className="w-full h-80 object-contain rounded-2xl"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ================= TEXT ================= */}

          <div className="flex-1 space-y-6 w-full">
            {["Our Vision", "Our Approach"].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Card Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-cyan-400/20 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div
                  className="
                    relative
                    bg-white/[0.035]
                    backdrop-blur-md
                    p-6
                    rounded-2xl
                    border
                    border-cyan-400/30
                    hover:border-cyan-400/80
                    hover:bg-cyan-400/[0.04]
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                    transition-all
                    duration-500
                  "
                >
                  <p className="text-cyan-300 font-semibold mb-2">
                    {title}
                  </p>

                  <p className="text-cyan-100/65">
                    {title === "Our Vision"
                      ? "Empower organizations with actionable spatial intelligence."
                      : "Transparency, collaboration & technical excellence."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          STATS
      ====================================================== */}

      <div className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(34,211,238,0.35)",
            }}
            className="
              bg-[#030b1c]/80
              backdrop-blur-md
              rounded-xl
              p-6
              text-center
              border
              border-cyan-400/25
              hover:border-cyan-400/70
              transition-all
              duration-500
            "
          >
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {stat.value}
            </div>

            <div className="text-cyan-300 text-sm mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          8 TEAM BOXES
      ====================================================== */}

      <div className="container mx-auto px-4 mt-24 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9">
          {bottomBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-400/30 to-blue-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div
                className="
                  relative
                  z-10
                  rounded-2xl
                  overflow-hidden
                  border-2
                  border-cyan-400/30
                  bg-[#020617]
                  group-hover:border-cyan-400/80
                  group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  transition-all
                  duration-500
                "
              >
                <motion.img
                  src={box.img}
                  alt={box.text}
                  className="w-full h-76 object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Bottom Info */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    bg-[#020617]/85
                    backdrop-blur-md
                    py-3
                    px-2
                    text-center
                    border-t
                    border-cyan-400/30
                    group-hover:border-cyan-400/70
                    transition-all
                    duration-500
                  "
                >
                  <p className="text-cyan-300 text-sm font-medium tracking-wide">
                    {box.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}

