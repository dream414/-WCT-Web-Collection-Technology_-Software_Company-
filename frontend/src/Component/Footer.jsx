

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================================================
  // NEWSLETTER SUBSCRIBE
  // =========================================================

  const handleSubscribe = async () => {
    if (!subscribeEmail) {
      return alert("Enter email");
    }

    setLoading(true);

    try {
      await axios.post("https://wct-backend-zqoq.onrender.com/send-email",  {
        name: "Subscriber",
        email: subscribeEmail,
        phone: "-",
        projectType: "Newsletter",
        message: "Subscribed from footer",
      });

      alert("Subscribed successfully!");
      setSubscribeEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to subscribe");
    }

    setLoading(false);
  };

  // =========================================================
  // SCROLL TO TOP
  // =========================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // SHOW SCROLL BUTTON
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // FRAMER MOTION VARIANTS
  // =========================================================

  const sectionVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const iconVariant = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer
      className="
        relative
        bg-[#020617]
        text-white
        pt-16
        pb-8
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        border-t
        border-cyan-400/10
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
            -top-48
            -left-48
            w-[550px]
            h-[550px]
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
            w-[600px]
            h-[600px]
            rounded-full
            bg-blue-600/10
            blur-3xl
          "
        />

        {/* Bottom Cyan Glow */}
        <div
          className="
            absolute
            -bottom-56
            left-1/3
            w-[550px]
            h-[550px]
            rounded-full
            bg-cyan-400/5
            blur-3xl
          "
        />

        {/* =================================================
            ANIMATED SPRINKLES
        ================================================= */}

        {Array.from({ length: 45 }).map((_, index) => (
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
          w-[80%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          shadow-[0_0_25px_rgba(34,211,238,0.7)]
        "
      />

      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          whileHover={{
            scale: 1.12,
            boxShadow: "0 0 30px rgba(34,211,238,0.45)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            fixed
            bottom-8
            right-8
            z-50
            p-3
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            text-black
            shadow-[0_0_20px_rgba(34,211,238,0.2)]
            cursor-pointer
            transition-all
            duration-300
          "
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          px-4
        "
      >
        {/* ===================================================
            TOP SECTIONS
        =================================================== */}

        <motion.div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            mb-12
            w-full
            justify-items-center
            text-center
          "
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* =================================================
              SECTION 1 — COMPANY
          ================================================= */}

          <motion.div
            variants={sectionVariant}
            className="max-w-xs"
          >
            <h3
              className="
                text-xl
                font-semibold
                mb-4
                bg-gradient-to-r
                from-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Web Collection Technology
            </h3>

            <p className="mb-4 text-gray-300 leading-7">
              Smart Solutions for a Connected World.
            </p>

            {/* Company Information */}
            <p className="mb-4 text-sm text-gray-400 leading-6">
              Web Collection Technology (WCT) was established and
              officially registered in 2021. Its headquarters are
              based in Gilgit-Baltistan, with a regional presence in
              LLC and Dubai.
            </p>

            <div
              className="
                flex
                items-center
                space-x-2
                mb-4
                justify-center
                text-gray-300
              "
            >
              <span
                className="
                  text-cyan-300
                  drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]
                "
              >
                ⭐
              </span>

              <span>Esri Partner | ISO 27001 Certified</span>
            </div>
          </motion.div>

          {/* =================================================
              SECTION 2 — QUICK LINKS
          ================================================= */}

          <motion.div
            variants={sectionVariant}
            className="max-w-xs"
          >
            <h3
              className="
                text-xl
                font-semibold
                mb-4
                bg-gradient-to-r
                from-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  GIS & Mapping Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  Case Studies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  Tech Stack
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* =================================================
              SECTION 3 — RECENT PROJECTS
          ================================================= */}

          <motion.div
            variants={sectionVariant}
            className="max-w-xs"
          >
            <h3
              className="
                text-xl
                font-semibold
                mb-4
                bg-gradient-to-r
                from-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Recent Projects
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  GBDMA Flood Risk Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  Soni Jawari Policy Heatmaps
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    hover:text-cyan-300
                    transition-colors
                    duration-300
                  "
                >
                  3D Land Modeling for Smart City
                </a>
              </li>
            </ul>
          </motion.div>

          {/* =================================================
              SECTION 4 — STAY UPDATED
          ================================================= */}

          <motion.div
            variants={sectionVariant}
            className="max-w-xs w-full"
          >
            <h3
              className="
                text-xl
                font-semibold
                mb-4
                bg-gradient-to-r
                from-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Stay Updated
            </h3>

            <p className="mb-5 text-gray-300 leading-7">
              Har mahine geospatial insights aur tech tips hasil
              karein
            </p>

            {/* Newsletter */}
            <form
              className="
                flex
                flex-col
                sm:flex-row
                gap-2
                justify-center
                items-center
                w-full
              "
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
            >
              <input
                type="email"
                className="
                  flex-1
                  h-11
                  w-full
                  sm:w-40
                  rounded-xl
                  border
                  px-3
                  py-2
                  bg-[#07111f]/80
                  border-cyan-400/20
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-cyan-400/60
                  focus:ring-2
                  focus:ring-cyan-400/20
                  transition-all
                  duration-300
                "
                placeholder="Enter your email"
                value={subscribeEmail}
                onChange={(e) =>
                  setSubscribeEmail(e.target.value)
                }
              />

              <button
                className="
                  h-11
                  px-5
                  py-2
                  rounded-xl
                  text-sm
                  font-bold
                  text-black
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-blue-500
                  shadow-[0_0_18px_rgba(34,211,238,0.15)]
                  hover:shadow-[0_0_28px_rgba(34,211,238,0.3)]
                  hover:scale-105
                  transition-all
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  cursor-pointer
                "
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending..." : "Subscribe"}
              </button>
            </form>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <br />

            <motion.h1
              variants={iconVariant}
              className="
                text-cyan-300
                text-xl
                font-semibold
              "
            >
              Social Media
            </motion.h1>

            <motion.div
              variants={iconVariant}
              className="
                mt-6
                flex
                flex-wrap
                gap-4
                justify-center
                text-white
              "
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sadaqat-aly-24aa9918a/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  hover:text-cyan-300
                  transition-colors
                  duration-300
                "
              >
                <Linkedin className="w-5 h-5 mr-1" />
                LinkedIn
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Webcollecti0n"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  hover:text-cyan-300
                  transition-colors
                  duration-300
                "
              >
                <Facebook className="w-5 h-5 mr-1" />
                Facebook
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@WebCollectionTechnology/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  hover:text-cyan-300
                  transition-colors
                  duration-300
                "
              >
                <Youtube className="w-5 h-5 mr-1" />
                YouTube
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ===================================================
            CALL TO ACTION
        =================================================== */}

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="
            text-center
            py-8
            border-t
            border-cyan-400/10
          "
        >
          <h3
            className="
              text-2xl
              md:text-3xl
              font-semibold
              mb-6
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Let's Build Your Next Digital or Geospatial Solution
          </h3>

          {/* CTA Button */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              relative
              inline-block
            "
          >
            <div
              className="
                absolute
                -inset-[1px]
                rounded
                bg-gradient-to-r
                from-blue-400
                via-blue-500
                to-blue-600
              "
            />

            {/* SUBSCRIBE BUTTON */}
            <button
              className="
                relative
                px-5
                py-3
                bg-black
                text-white
                rounded-lg
                overflow-hidden
                transition-all
                duration-500
                cursor-pointer
              "
            >
              {/* TEXT */}
              <span className="relative z-10 font-semibold text-white">
                <Link to="/gis">
                  Subscribe for GIS offers
                </Link>
              </span>

              {/* ANIMATED BLUE COLOR */}
              <span className="absolute inset-0 rounded-lg pointer-events-none">
                <span
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #2563eb, transparent, #275bcc, transparent, #2563eb)",
                    backgroundSize: "200% 100%",
                    animation: "moveSubscribeColor 10s linear infinite",
                  }}
                />
              </span>

              {/* ANIMATION */}
              <style>{`
                @keyframes moveSubscribeColor {
                  0% {
                    background-position: 0% 0%;
                  }

                  100% {
                    background-position: 200% 0%;
                  }
                }
              `}</style>
            </button>
          </motion.div>
        </motion.div>

        {/* ===================================================
            FOOTER INFO
        =================================================== */}

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-6
            py-6
            border-t
            border-cyan-400/10
            text-sm
            text-gray-300
            text-center
          "
        >
          {/* Secure */}
          <div className="flex items-center">
            <span
              className="
                mr-2
                text-cyan-300
                drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]
              "
            >
              🔒
            </span>

            <span>100% Data Secure</span>
          </div>

          {/* Mapping */}
          <div className="flex items-center">
            <span
              className="
                mr-2
                text-cyan-300
                drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]
              "
            >
              🌍
            </span>

            <span>
              Let's map your ideas to visualize your business and
              needs
            </span>
          </div>

          {/* Partnership */}
          <div className="flex items-center">
            <span
              className="
                mr-2
                text-cyan-300
                drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]
              "
            >
              🤝
            </span>

            <span className="italic">
              Partnership with 10+ local private companies and
              government sectors
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            COPYRIGHT
        =================================================== */}

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="
            text-center
            pt-6
            border-t
            border-cyan-400/10
            text-sm
            text-gray-300
          "
        >
          <p>
            © 2025 Web Collection Technology. All rights reserved.
          </p>

          <p className="mt-3 leading-7">
            Web Collection Technology Pvt Ltd in front of NADRA
            office, Main KKH, Danyore, Gilgit
            <span className="mx-2">|</span>

            <a
              className="
                underline
                hover:text-cyan-300
                transition-colors
                duration-300
              "
              href="mailto:webcollectiontech@gmail.com"
            >
              webcollectiontech@gmail.com
            </a>
          </p>

          {/* Privacy / Terms / Cookies */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              mt-4
              text-gray-400
            "
          >
            <a
              href="#"
              className="
                hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="
                hover:text-cyan-300
                transition-colors
                duration-300
              "
            >
              Cookie Settings
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

