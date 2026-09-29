// src/components/Project.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Geo Spatial Land Reform",
    subtitle: "Land Reforms",
    desc: "Geo Spatial Analysis and Land Data Collection for Land Reform in Gilgit-Baltistan.",
    tags: ["GIS", "Land Reform", "Geo Spatial Analysis"],
    challenge:
      "Fragmented and outdated land information obstructed reforms in Gilgit-Baltistan.",
    solution:
      "Deployed advanced geospatial analysis and land data collection for policy and planning.",
    result:
      "Enhanced transparency and data-driven reform decisions.",
    image: "/land reform.jpg",
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Global Analytics Web Dashboard",
    desc: "Developed a responsive and interactive web dashboard for an international client to monitor real-time data, geolocation insights, and global trends through a clean and user-friendly interface.",
    tags: ["Web Dashboard", "Analytics", "Data Visualization"],
    challenge:
      "International client needed real-time data monitoring across multiple regions.",
    solution:
      "Created a responsive web dashboard for geolocation insights and global trends analysis.",
    result:
      "Improved decision making with actionable insights and real-time monitoring.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Traffic 3D Modelling",
    subtitle: "3D Modelling for Assistant Commissioner Danyore",
    desc: "3D visualization of Gilgit's road network using terrain data and digital modeling techniques for better planning and simulation.",
    tags: ["3D Modelling", "Traffic", "Simulation"],
    challenge:
      "No visual tools for planning traffic and road controls.",
    solution:
      "Developed detailed 3D modeling solutions for simulation and management of road traffic.",
    result:
      "Improved planning and real-time traffic control through visualization.",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Land Data Portal",
    subtitle:
      "GeoSpatial Analysis and Land Data Collection for Assistant Commissioner Danyore",
    desc: "Digitization of land data for all 10 districts of Gilgit Baltistan, with full web-based visualization and categorization.",
    tags: ["GIS", "Land Data", "Digitization"],
    challenge:
      "Massive paper-based land records with poor accessibility and risk of errors.",
    solution:
      "Digitized all land data for 10 districts, categorized and accessible via web visualization.",
    result:
      "Drastic reduction in disputes and accelerated administrative workflows.",
    image: "./portal.jpg",
  },
  {
    title: "GB Land Reform",
    subtitle: "GIS based Data Collection",
    desc: "The 'GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021' project supports evidence-based land reform planning.",
    tags: [
      "GIS based Data Collection",
      "Spatial Analysis",
      "Ortho mosaicing",
    ],
    challenge:
      "Need for accurate, spatially aligned land data for planning.",
    solution:
      "Collected GIS-based land data and performed spatial analysis with ortho mosaicing.",
    result:
      "Enhanced land categorization and planning accuracy.",
  },
  {
    title: "3D Modelling using Drone Imagery",
    subtitle: "Urban Planning",
    desc: "Created a high-resolution 3D land model using drone imagery for urban planning purposes.",
    tags: ["Agisoft Metashape", "Pix4D", "Dji Modify"],
    challenge:
      "High-resolution 3D models needed for planning decisions.",
    solution:
      "Drone imagery processed into precise 3D models for visualization.",
    result:
      "Better decision-making in urban development.",
  },
  {
    title: "Web Mapping & Land Categorization",
    subtitle: "Interactive Grid-Based Demarcation",
    desc: "Interactive web map to categorize land parcels using point-based demarcation with precise grid system.",
    tags: ["Google Earth Online", "ArcGIS Online", "Web GIS"],
    challenge:
      "Need accurate land parcel visualization.",
    solution:
      "Implemented point-based grid demarcation with web GIS tools.",
    result:
      "Accurate visualization and land categorization.",
  },
  {
    title: "Negative Slope Analysis",
    subtitle: "Terrain Visualization",
    desc: "Identifying and visualizing negative slopes using high-resolution DEM data and GIS tools.",
    tags: ["Arc GIS", "Google Earth Pro", "DEM Data"],
    challenge:
      "Terrain slope identification required for planning.",
    solution:
      "Used DEM data with GIS tools for slope visualization.",
    result:
      "Better understanding of terrain risks and planning decisions.",
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="project"
      className="
        relative
        py-24
        bg-[#020617]
        overflow-hidden
        flex
        justify-center
      "
    >
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main Blue Glow */}
        <div
          className="
            absolute
            top-[-200px]
            left-1/2
            -translate-x-1/2
            w-[800px]
            h-[500px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        {/* Cyan Left Glow */}
        <div
          className="
            absolute
            top-[35%]
            left-[-250px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        {/* Blue Right Glow */}
        <div
          className="
            absolute
            bottom-[-250px]
            right-[-200px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-blue-700/10
            blur-[150px]
          "
        />

        {/* =====================================================
            ANIMATED SPRINKLES
        ===================================================== */}

        {Array.from({ length: 65 }).map((_, i) => {
          const top = (i * 41) % 100;
          const left = (i * 67) % 100;
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
          MAIN CONTENT
      ========================================================= */}

      <div className="container px-6 relative z-10 max-w-full">

        {/* TITLE */}

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
          className="
            mb-20
            text-4xl
            md:text-5xl
            font-extrabold
            text-center
            bg-gradient-to-r
            from-blue-400
            via-cyan-300
            to-blue-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]
          "
        >
          Our Projects
        </motion.h2>

        {/* =========================================================
            PROJECT GRID
        ========================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-2
            m-3
            md:m-9
            gap-8
            md:gap-10
          "
        >
          {projects
            .slice(0, projects.length - 4)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                }}
                onClick={() => setActive(project)}
                className="
                  group
                  cursor-pointer
                  relative
                  rounded-2xl
                  overflow-hidden
                  bg-[#07111f]/90
                  backdrop-blur-xl
                  p-[1px]
                  min-w-[180px]
                  md:min-w-[200px]
                  lg:min-w-[300px]
                  shadow-[0_0_25px_rgba(15,23,42,0.8)]
                  transition-all
                  duration-500
                "
                style={{
                  border: "1px solid rgba(34,211,238,0.25)",
                }}
              >

                {/* Card Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600/10
                    via-cyan-400/10
                    to-blue-600/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    blur-xl
                  "
                />

                {/* Inner Card */}

                <div
                  className="
                    relative
                    z-10
                    bg-[#050b16]/95
                    rounded-2xl
                    overflow-hidden
                    p-4
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  {/* Image */}

                  <div
                    className="
                      relative
                      h-40
                      md:h-48
                      w-full
                      overflow-hidden
                      rounded-xl
                    "
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        opacity-80
                        brightness-75
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        group-hover:brightness-100
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]
                        via-transparent
                        to-transparent
                        opacity-70
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        ring-1
                        ring-inset
                        ring-cyan-400/20
                        rounded-xl
                      "
                    />
                  </div>

                  {/* Information */}

                  <div className="p-4 w-full">

                    {/* Tags */}

                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="
                            px-2
                            py-1
                            text-xs
                            bg-blue-900/30
                            text-cyan-200
                            rounded-lg
                            border
                            border-cyan-400/25
                            shadow-[0_0_10px_rgba(34,211,238,0.08)]
                          "
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Title */}

                    <div
                      className="
                        mb-1
                        text-base
                        font-bold
                        bg-gradient-to-r
                        from-blue-400
                        to-cyan-300
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {project.title}
                    </div>

                    {/* Subtitle */}

                    <div className="mb-2 text-lg font-semibold text-white">
                      {project.subtitle}
                    </div>

                    {/* Description */}

                    <p className="mb-4 text-white/70 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Details */}

                    <div className="space-y-2 text-sm mt-2">

                      <div>
                        <span className="font-bold text-cyan-300">
                          Challenge:{" "}
                        </span>
                        <span className="text-white/85">
                          {project.challenge}
                        </span>
                      </div>

                      <div>
                        <span className="font-bold text-blue-400">
                          Solution:{" "}
                        </span>
                        <span className="text-white/85">
                          {project.solution}
                        </span>
                      </div>

                      <div>
                        <span className="font-bold text-cyan-300">
                          Result:{" "}
                        </span>
                        <span className="text-white/85">
                          {project.result}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Bottom Hover Line */}

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

                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* =========================================================
          PROJECT MODAL
          NO SCROLLBAR
      ========================================================= */}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-50
              bg-[#020617]/95
              backdrop-blur-xl
              flex
              items-center
              justify-center
              px-4
              md:px-6
              py-6
            "
            onClick={() => setActive(null)}
          >

            {/* Modal */}

            <motion.div
              initial={{
                scale: 0.7,
                y: 40,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0.7,
                y: 40,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-w-4xl
                w-full
                rounded-2xl
                bg-[#07111f]/95
                backdrop-blur-xl
                p-5
                md:p-6
                shadow-[0_0_50px_rgba(34,211,238,0.18)]
                overflow-hidden
              "
              style={{
                border: "1px solid rgba(34,211,238,0.35)",
              }}
            >

              {/* Modal Glows */}

              <div
                className="
                  absolute
                  top-[-100px]
                  right-[-100px]
                  w-72
                  h-72
                  rounded-full
                  bg-cyan-500/10
                  blur-[100px]
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  bottom-[-100px]
                  left-[-100px]
                  w-72
                  h-72
                  rounded-full
                  bg-blue-600/10
                  blur-[100px]
                  pointer-events-none
                "
              />

              {/* Modal Image */}

              <img
                src={active.image}
                alt={active.title}
                className="
                  relative
                  z-10
                  w-full
                  h-56
                  md:h-72
                  object-cover
                  rounded-xl
                  mb-5
                  opacity-90
                  hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              {/* Modal Title */}

              <h2
                className="
                  relative
                  z-10
                  text-2xl
                  md:text-3xl
                  font-bold
                  mb-2
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                {active.title}
              </h2>

              {/* Subtitle */}

              <h3 className="relative z-10 text-xl text-white/80 mb-3">
                {active.subtitle}
              </h3>

              {/* Description */}

              <p className="relative z-10 text-white/75 mb-4 leading-relaxed">
                {active.desc}
              </p>

              {/* Tags */}

              <div className="relative z-10 flex flex-wrap gap-2 mb-4">
                {active.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3
                      py-1
                      text-xs
                      rounded-lg
                      bg-blue-900/30
                      text-cyan-200
                      border
                      border-cyan-400/25
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Details */}

              <div className="relative z-10 space-y-2 text-sm md:text-base">

                <div>
                  <span className="font-bold text-cyan-300">
                    Challenge:{" "}
                  </span>
                  <span className="text-white/85">
                    {active.challenge}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-blue-400">
                    Solution:{" "}
                  </span>
                  <span className="text-white/85">
                    {active.solution}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-cyan-300">
                    Result:{" "}
                  </span>
                  <span className="text-white/85">
                    {active.result}
                  </span>
                </div>

              </div>

              {/* Close Button */}

              <button
                onClick={() => setActive(null)}
                className="
                  relative
                  z-10
                  mt-6
                  px-7
                  py-2.5
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-[0_0_20px_rgba(34,211,238,0.25)]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.55)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          bg-gradient-to-t
          from-[#020617]
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}