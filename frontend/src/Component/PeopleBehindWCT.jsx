import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   THE PEOPLE BEHIND WCT
   Futuristic GIS / Technology / Team Network
========================================================= */

const PeopleBehindWCT = () => {
  /* =========================================================
     TEAM DATA
  ========================================================= */

  const leadership = [
    {
      image: "/sadaqat-ali.png",
      name: "Sadaqat Ali",
      role: "Founder & CEO",
      description:
        "Leads WCT's overall vision — from government geospatial consulting and drone survey to the company's expansion into digital services, training, and AI.",
      skills: [
        "GIS Strategy",
        "Project Management",
        "Client Relations",
      ],
      accent: "cyan",
      type: "leadership",
    },

    {
      image: "/qaiser-abbas.png",
      name: "Qaiser Abbas",
      role: "Chief Technology Officer / GIS Expert",
      description:
        "Oversees WCT's technical direction across GIS and digital systems, and works hands-on as a GIS specialist on survey and mapping projects.",
      skills: [
        "GIS & Remote Sensing",
        "Systems Architecture",
        "QGIS / ArcGIS",
      ],
      accent: "blue",
      type: "technology",
    },

    {
      image: "/akiram-abbas.png",
      name: "Akiram Abbas",
      role: "Management & Financial Officer / Web Designer",
      description:
        "Manages company operations and finances, and contributes hands-on web design work across client projects.",
      skills: [
        "Financial Planning",
        "Office Management",
        "UI Design",
      ],
      accent: "purple",
      type: "management",
    },

    {
      image: "/saqib-ali.png",
      name: "Saqib Ali",
      role: "Office Coordinator",
      description:
        "Coordinates day-to-day office operations and keeps communication flowing between clients, divisions, and the field team.",
      skills: [
        "Operations Coordination",
        "Client Communication",
        "Scheduling",
      ],
      accent: "cyan",
      type: "office",
    },
  ];

  const gisTeam = [
    {
      image: "/iqrar-hussain.png",
      name: "Iqrar Hussain",
      role: "GIS Expert",
      description:
        "Handles drone survey data, spatial analysis, and mapping deliverables for government and mining sector projects.",
      skills: [
        "Drone Data Processing",
        "Spatial Analysis",
        "3D Modelling",
      ],
      accent: "cyan",
      type: "gis",
    },
  ];

  const digitalTeam = [
    {
      image: "/karrar-hussain.png",
      name: "Karar Wajahat",
      role: "Digital Marketing Team Lead",
      description:
        "Leads campaign strategy and execution across paid, social, and content channels for WCT's business clients.",
      skills: [
        "Campaign Strategy",
        "Paid Ads",
        "Team Leadership",
      ],
      accent: "purple",
      type: "marketing",
    },

    {
      image: "/rashid-ali.png",
      name: "Rashid Ali",
      role: "Digital Marketer",
      description:
        "Runs day-to-day social media, SEO, and ad execution for client campaigns.",
      skills: [
        "Social Media",
        "SEO",
        "Ad Execution",
      ],
      accent: "blue",
      type: "marketing",
    },

    {
      image: "/wajid-ali.png",
      name: "Wajid Ali",
      role: "Video Editor",
      description:
        "Edits promotional, training, and social content across WCT's divisions and the Northisam channel.",
      skills: [
        "Video Editing",
        "Motion Graphics",
        "Content Production",
      ],
      accent: "cyan",
      type: "creative",
    },

    {
      image: "/minahil.png",
      name: "Mahak Dev Designer",
      role: "Backend Developer",
      description:
        "Builds and maintains server-side logic, databases, and integrations for WCT's web and mobile products.",
      skills: [
        "Backend Development",
        "Database Design",
        "API Integration",
      ],
      accent: "blue",
      type: "developer",
    },

    {
      image: "/hani.png",
      name: "Muqadas | Software Engineer",
      role: "Front End Designer",
      description:
        "Designs and builds client-facing interfaces, translating design concepts into responsive, working front ends.",
      skills: [
        "UI Development",
        "Responsive Design",
        "HTML / CSS / JS",
      ],
      accent: "purple",
      type: "frontend",
    },
  ];

  /* =========================================================
     COLOR SYSTEM
  ========================================================= */

  const getTheme = (accent) => {
    if (accent === "blue") {
      return {
        text: "text-blue-400",
        border: "border-blue-500/60",
        softBorder: "border-blue-400/20",
        bg: "from-blue-950/70 to-[#06152c]/95",
        glow: "rgba(59,130,246,0.65)",
        line: "via-blue-400",
        badge: "bg-blue-500/10",
      };
    }

    if (accent === "purple") {
      return {
        text: "text-purple-400",
        border: "border-purple-500/60",
        softBorder: "border-purple-400/20",
        bg: "from-purple-950/60 to-[#101027]/95",
        glow: "rgba(168,85,247,0.65)",
        line: "via-purple-400",
        badge: "bg-purple-500/10",
      };
    }

    return {
      text: "text-cyan-400",
      border: "border-cyan-400/60",
      softBorder: "border-cyan-400/20",
      bg: "from-cyan-950/60 to-[#06172a]/95",
      glow: "rgba(34,211,238,0.65)",
      line: "via-cyan-400",
      badge: "bg-cyan-500/10",
    };
  };

  /* =========================================================
     TEAM IMAGE
  ========================================================= */

  const TeamImage = ({ member }) => {
    const theme = getTheme(member.accent);

    return (
      <div className="relative shrink-0">

        {/* Animated outer ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -inset-1.5 rounded-full border border-dashed ${theme.border}`}
        />

        {/* Glow */}

        <div
          className="absolute -inset-3 rounded-full blur-xl opacity-30"
          style={{
            background: theme.glow,
          }}
        />

        {/* Profile Image */}

        <div className="relative w-[76px] h-[76px] rounded-full p-[2px] overflow-hidden bg-gradient-to-br from-white via-cyan-400 to-blue-500">

          <div className="w-full h-full rounded-full overflow-hidden bg-[#020b17]">

            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />

          </div>

        </div>

        {/* Online Indicator */}

        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className={`absolute right-0 bottom-0 w-3 h-3 rounded-full ${
            theme.text.replace("text-", "bg-")
          } border-2 border-[#020b17]`}
        />

      </div>
    );
  };

  /* =========================================================
     ROLE ICON
  ========================================================= */

  const RoleIcon = ({ type }) => {

    if (type === "gis") {
      return (
        <div className="relative w-8 h-8">

          <div className="absolute inset-1 rounded-full border-2 border-cyan-300" />

          <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />

          <div className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-white" />

          <div className="absolute right-0 top-2 w-1.5 h-1.5 rounded-full bg-white" />

          <div className="absolute left-1 bottom-1 w-1.5 h-1.5 rounded-full bg-white" />

          <div className="absolute right-1 bottom-1 w-1.5 h-1.5 rounded-full bg-white" />

        </div>
      );
    }

    if (type === "developer" || type === "frontend") {
      return (
        <div className="text-white font-black text-xl">
          {"</>"}
        </div>
      );
    }

    if (type === "creative") {
      return (
        <div className="relative w-8 h-8">

          <div className="absolute left-1 top-1 w-6 h-6 border-2 border-white rounded-full" />

          <div className="absolute left-3 top-0 w-2 h-2 bg-cyan-300 rounded-full" />

          <div className="absolute right-0 top-3 w-2 h-2 bg-blue-300 rounded-full" />

          <div className="absolute left-3 bottom-0 w-2 h-2 bg-purple-300 rounded-full" />

        </div>
      );
    }

    if (type === "marketing") {
      return (
        <div className="relative w-8 h-8">

          <div className="absolute bottom-1 left-1 w-1.5 h-4 bg-white rounded-full" />

          <div className="absolute bottom-1 left-3.5 w-1.5 h-6 bg-white rounded-full" />

          <div className="absolute bottom-1 left-6 w-1.5 h-8 bg-white rounded-full" />

          <div className="absolute left-1 top-0 w-6 h-[2px] bg-cyan-300 rotate-[-25deg]" />

        </div>
      );
    }

    if (type === "management") {
      return (
        <div className="relative w-8 h-8">

          <div className="absolute left-1 top-1 w-6 h-6 border-2 border-white rounded-lg" />

          <div className="absolute left-3 top-0 w-2 h-2 rounded-full bg-purple-300" />

          <div className="absolute left-3 bottom-0 w-2 h-2 rounded-full bg-blue-300" />

        </div>
      );
    }

    if (type === "office") {
      return (
        <div className="relative w-8 h-8">

          <div className="absolute left-1 top-2 w-6 h-5 border-2 border-white rounded-sm" />

          <div className="absolute left-3 top-0 w-2 h-4 border-2 border-white rounded-full" />

          <div className="absolute left-3 bottom-3 w-2 h-2 rounded-full bg-cyan-300" />

        </div>
      );
    }

    return (
      <div className="relative w-8 h-8">

        <div className="absolute left-1 top-1 w-6 h-6 border-2 border-white rotate-45 rounded-sm" />

        <div className="absolute left-3 top-3 w-2 h-2 bg-cyan-300 rounded-full" />

      </div>
    );
  };

  /* =========================================================
     TEAM CARD
  ========================================================= */

  const TeamCard = ({
    member,
    index = 0,
    featured = false,
  }) => {

    const theme = getTheme(member.accent);

    return (
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
          duration: 0.7,
          delay: index * 0.08,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        whileHover={{
          y: -8,
          scale: 1.012,
        }}
        className={`group relative ${
          featured ? "min-h-[300px]" : "min-h-[285px]"
        } rounded-[28px] border ${theme.border} bg-gradient-to-br ${
          theme.bg
        } backdrop-blur-2xl overflow-hidden p-6 shadow-[0_20px_70px_rgba(0,0,0,0.4)]`}
      >

        {/* Card Glow */}

        <div
          className="absolute -right-24 -top-24 w-60 h-60 rounded-full blur-[85px] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: theme.glow,
          }}
        />

        {/* Background Grid */}

        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">

          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

        </div>

        {/* Big Background Number */}

        <div
          className={`absolute right-4 top-0 text-[100px] leading-none font-black ${theme.text} opacity-[0.035]`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Top Moving Light */}

        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.35,
          }}
          className={`absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent ${theme.line} to-transparent`}
        />

        {/* Content */}

        <div className="relative z-10">

          {/* Person Header */}

          <div className="flex items-start gap-5">

            <TeamImage member={member} />

            <div className="flex-1 min-w-0 pt-1">

              <div
                className={`text-[9px] font-bold uppercase tracking-[0.3em] ${theme.text} mb-1`}
              >
                WCT Team
              </div>

              <h3 className="text-xl font-black text-white leading-tight">
                {member.name}
              </h3>

              <p className="mt-1 text-sm text-slate-300 font-medium leading-5">
                {member.role}
              </p>

            </div>

          </div>

          {/* Divider */}

          <div className="relative my-5 h-px bg-white/10 overflow-hidden">

            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
              className={`absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent ${theme.line} to-transparent`}
            />

          </div>

          {/* Description */}

          <p className="text-sm text-slate-400 leading-6">
            {member.description}
          </p>

          {/* Skills */}

          <div className="flex flex-wrap gap-2 mt-5 pr-10">

            {member.skills.map((skill) => (
              <span
                key={skill}
                className={`px-2.5 py-1 rounded-full border ${theme.softBorder} ${theme.badge} text-[10px] font-semibold ${theme.text}`}
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Role Icon */}

        <div
          className={`absolute right-5 bottom-5 w-11 h-11 rounded-full border ${theme.softBorder} bg-black/20 flex items-center justify-center opacity-30 group-hover:opacity-90 transition-opacity duration-300`}
        >
          <RoleIcon type={member.type} />
        </div>

        {/* Bottom Animated Line */}

        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.25,
          }}
          className={`absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent ${theme.line} to-transparent`}
        />

      </motion.div>
    );
  };

  /* =========================================================
     SECTION LABEL
  ========================================================= */

  const SectionLabel = ({
    children,
    color = "cyan",
  }) => {

    const colorClass =
      color === "purple"
        ? "text-purple-400"
        : color === "blue"
        ? "text-blue-400"
        : "text-cyan-400";

    const lineClass =
      color === "purple"
        ? "to-purple-500"
        : color === "blue"
        ? "to-blue-500"
        : "to-cyan-500";

    return (
      <div className="flex items-center justify-center gap-4 mb-10">

        <span
          className={`hidden sm:block w-20 h-[1px] bg-gradient-to-r from-transparent ${lineClass}`}
        />

        <span
          className={`text-xs sm:text-sm font-bold tracking-[0.35em] uppercase ${colorClass}`}
        >
          {children}
        </span>

        <span
          className={`hidden sm:block w-20 h-[1px] bg-gradient-to-l from-transparent ${lineClass}`}
        />

      </div>
    );
  };

  /* =========================================================
     CENTRAL WCT CORE
  ========================================================= */

  const WCTCore = () => {
    return (
      <div className="relative w-[310px] h-[310px] mx-auto">

        {/* Outer Rotating Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-cyan-500"
        />

        {/* Dashed Ring */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[16px] rounded-full border-2 border-blue-500 "
        />

        {/* Third Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[31px] rounded-full border border-purple-500/20"
        />

        {/* Orbiting Cyan Dot */}

        <motion.div
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
          <span className="absolute top-[-3px] left-1/2 w-3.5 h-3.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
        </motion.div>

        {/* Orbiting Blue Dot */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[16px]"
        >
          <span className="absolute bottom-[-3px] right-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,1)]" />
        </motion.div>

        {/* Main Core */}

        <div className="absolute inset-[55px] rounded-full bg-[#020b17]/95 border-2 border-cyan-400 shadow-[0_0_100px_rgba(34,211,238,0.22)] flex items-center justify-center overflow-hidden">

          {/* Inner Ring */}

          <div className="absolute inset-[14px] rounded-full border-2 border-cyan-500/20" />

          {/* Logo */}

          <div className="relative z-10 text-center rounded-full">

            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              className="mx-auto w-[82px] h-[82px] rounded-2xl overflow-hidden bg-white/5 rounded-full border-2 border-blue-500 p-2 shadow-[0_0_35px_rgba(34,211,238,0.2)]"
            >

              <img
                src="/logoo.png"
                alt="WCT Logo"
                className="w-full h-full object-contain"
              />

            </motion.div>

            <div className="mt-3 text-white text-3xl font-black tracking-tight">
              WCT
            </div>

             {/* FULL TAGLINE INSIDE THE CIRCLE */}
    <div className="mt-2 w-[145px] max-w-[145px] text-[7px] sm:text-[8px] font-medium tracking-[0.04em] text-cyan-300 uppercase text-center leading-3 whitespace-nowrap relative z-[120]">
      People • Expertise • Delivery
    </div>

          </div>

        </div>

      </div>
    );
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      id="people-behind-wct"
      className="relative w-full overflow-hidden bg-[#010914] px-5 py-24 sm:px-8 md:px-12 lg:px-16"
    >

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-[15%] w-[700px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />

        <div className="absolute right-[-220px] top-[25%] w-[650px] h-[650px] rounded-full bg-blue-600/[0.07] blur-[180px]" />

        <div className="absolute left-[-220px] bottom-[-150px] w-[600px] h-[600px] rounded-full bg-purple-600/[0.06] blur-[170px]" />

        <div className="absolute bottom-[20%] left-[40%] w-[350px] h-[350px] rounded-full bg-cyan-500/[0.04] blur-[140px]" />

      </div>

      {/* =====================================================
          TOPOGRAPHIC CONTOUR LINES
      ====================================================== */}

      <div className="absolute left-[-130px] top-20 w-[500px] h-[330px] opacity-40 pointer-events-none">

        <div className="absolute inset-0 rounded-[45%] border border-cyan-800/50 rotate-[-15deg]" />

        <div className="absolute inset-[25px] rounded-[45%] border border-cyan-800/40 rotate-[-15deg]" />

        <div className="absolute inset-[50px] rounded-[45%] border border-cyan-800/30 rotate-[-15deg]" />

        <div className="absolute inset-[75px] rounded-[45%] border border-cyan-800/25 rotate-[-15deg]" />

        <div className="absolute inset-[100px] rounded-[45%] border border-cyan-800/20 rotate-[-15deg]" />

      </div>

      <div className="absolute right-[-130px] bottom-[-60px] w-[550px] h-[350px] opacity-35 pointer-events-none">

        <div className="absolute inset-0 rounded-[50%] border border-blue-800/50 rotate-[20deg]" />

        <div className="absolute inset-[25px] rounded-[50%] border border-blue-800/40 rotate-[20deg]" />

        <div className="absolute inset-[50px] rounded-[50%] border border-blue-800/30 rotate-[20deg]" />

        <div className="absolute inset-[75px] rounded-[50%] border border-blue-800/20 rotate-[20deg]" />

      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {Array.from({ length: 65 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.1, 0.85, 0.1],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2.5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.1,
            }}
            className={`absolute rounded-full ${
              index % 4 === 0
                ? "bg-cyan-400"
                : index % 4 === 1
                ? "bg-blue-400"
                : index % 4 === 2
                ? "bg-purple-400"
                : "bg-sky-300"
            }`}
            style={{
              width: index % 9 === 0 ? "3px" : "2px",
              height: index % 9 === 0 ? "3px" : "2px",
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
          className="text-center max-w-5xl mx-auto"
        >

          <div className="flex items-center justify-center gap-5 mb-5">

            <span className="hidden sm:block w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.45em] uppercase">
              The People Behind WCT
            </span>

            <span className="hidden sm:block w-16 h-[2px] bg-gradient-to-l from-transparent to-blue-400" />

          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.03] text-white">

            Built and led from

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
              Gilgit-Baltistan.
            </span>

          </h2>

          <p className="mt-7 text-slate-300 text-sm sm:text-base md:text-lg leading-7 max-w-4xl mx-auto">
            The team driving WCT's GIS, digital, training, and AI work
            forward — across leadership, geospatial, and digital delivery.
          </p>

        </motion.div>

        {/* ===================================================
            WCT CORE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 mb-16"
        >
          <WCTCore />
        </motion.div>

        {/* ===================================================
            LEADERSHIP
        ==================================================== */}

        <div>

          <SectionLabel>
            Leadership & Office Team
          </SectionLabel>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

            {leadership.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
                featured={index === 0}
              />
            ))}

          </div>

        </div>

        {/* ===================================================
            CONNECTOR
        ==================================================== */}

        <div className="relative flex justify-center my-16">

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent"
          />

          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />

        </div>

        {/* ===================================================
            GIS TEAM
        ==================================================== */}

        <div>

          <SectionLabel>
            GIS & Geospatial Team
          </SectionLabel>

          <div className="max-w-3xl mx-auto">

            {gisTeam.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
                featured
              />
            ))}

          </div>

        </div>

        {/* ===================================================
            CONNECTOR
        ==================================================== */}

        <div className="relative flex justify-center my-16">

          <motion.div
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scaleX: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent"
          />

          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(59,130,246,1)]" />

        </div>

        {/* ===================================================
            DIGITAL TEAM
        ==================================================== */}

        <div>

          <SectionLabel color="purple">
            Digital, Web & Creative Team
          </SectionLabel>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {digitalTeam.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* ===================================================
            BOTTOM STATEMENT
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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20"
        >

          <div className="flex items-center justify-center gap-5">

            <span className="hidden sm:block w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-600" />

            <div className="flex flex-wrap justify-center items-center gap-4 text-[9px] sm:text-xs tracking-[0.3em] uppercase text-slate-500 text-center">

              <span className="text-cyan-400">
                Local Expertise
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-blue-400">
                Technical Talent
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-purple-400">
                Creative Delivery
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-cyan-300">
                Shared Vision
              </span>

            </div>

            <span className="hidden sm:block w-24 h-[1px] bg-gradient-to-l from-transparent to-blue-600" />

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          TOP RIGHT LIGHT TRAIL
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 right-10 md:right-24 w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-[-18deg]"
      />

      {/* =====================================================
          BOTTOM LIGHT TRAIL
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-14 left-5 md:left-20 w-32 md:w-52 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rotate-[-12deg]"
      />

      {/* =====================================================
          SECTION BOTTOM LINE
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
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />

    </section>
  );
};

export default PeopleBehindWCT;