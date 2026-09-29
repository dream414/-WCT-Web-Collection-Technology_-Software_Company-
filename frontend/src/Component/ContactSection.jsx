// src/components/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // npm install axios

// =========================================================
// FADE IN SIDE ANIMATION
// =========================================================

const fadeInSide = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
});

// =========================================================
// FADE IN UP ANIMATION
// =========================================================

const fadeInUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});

// =========================================================
// CONTACT SECTION
// =========================================================

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  // =======================================================
  // FORM CHANGE
  // =======================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // =======================================================
  // FORM SUBMIT
  // =======================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );

      if (res.data.success) {
        alert("Email sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      }
    } catch (err) {
      alert("Email sending failed. Try again later.");
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        flex
        w-full
        py-20
        px-4
        bg-[#020617]
        overflow-hidden
        justify-center
        items-center
        text-white
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

        {Array.from({ length: 42 }).map((_, index) => (
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

      <div className="relative z-10 w-full max-w-7xl px-2 md:px-6">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial="hidden"
          animate="visible"
          className="
            max-w-4xl
            mx-auto
            text-center
            mb-16
            space-y-5
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]
            "
          >
            Let's Build Your Next Digital or Geospatial Solution
          </motion.h2>

          <motion.p
            variants={fadeInUp(0)}
            className="
              text-base
              md:text-lg
              text-gray-300
              leading-7
            "
          >
            Whether you need a custom GIS dashboard, a 3D mapping tool, or a
            growth-focused website, we're here to turn your vision into
            reality.
          </motion.p>

          {/* =================================================
              LET'S MAPPING BUTTON
          ================================================= */}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.3)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              relative
              group
              mx-auto
              flex
              items-center
              justify-center
              border
              border-cyan-400/60
              gap-2
              rounded-full
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              overflow-hidden
              bg-[#07111f]/80
              backdrop-blur-md
              shadow-[0_0_18px_rgba(34,211,238,0.1)]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <span className="relative z-10">Let's Mapping</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 text-cyan-300"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>

            {/* Animated Gradient */}
            <motion.div
              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-cyan-400/30
                via-sky-400/20
                to-blue-600/30
                opacity-70
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
            />

            {/* Hover Overlay */}
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-white/10
                opacity-0
                group-hover:opacity-30
                transition-opacity
                duration-300
              "
            />
          </motion.button>
        </motion.div>

        {/* ===================================================
            GRID
        =================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-10
            max-w-6xl
            mx-auto
            items-stretch
            justify-center
          "
        >
          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            variants={fadeInSide("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="
              relative
              rounded-3xl
              bg-gradient-to-br
              from-cyan-400/40
              via-sky-400/20
              to-blue-600/40
              p-[1px]
              w-full
              lg:max-w-xl
              shadow-[0_0_35px_rgba(34,211,238,0.06)]
            "
          >
            {/* Form Card */}
            <div
              className="
                relative
                rounded-3xl
                bg-[#07111f]/95
                text-white
                backdrop-blur-xl
                border
                border-cyan-400/10
                h-full
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
                  shadow-[0_0_20px_rgba(34,211,238,0.7)]
                "
              />

              <motion.div className="p-6 md:p-8 space-y-4">
                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  {/* =================================================
                      NAME / EMAIL / PHONE
                  ================================================= */}

                  {[
                    {
                      id: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "your.email@example.com",
                    },
                    {
                      id: "phone",
                      label: "Phone",
                      type: "text",
                      placeholder: "+92 XXX XXXXXXX",
                    },
                  ].map((field, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp(0.1 * idx)}
                      className="space-y-2 text-left"
                    >
                      <label
                        htmlFor={field.id}
                        className="
                          text-sm
                          font-semibold
                          text-gray-200
                          leading-none
                        "
                      >
                        {field.label}
                      </label>

                      <input
                        id={field.id}
                        type={field.type}
                        value={formData[field.id]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="
                          flex
                          h-11
                          w-full
                          rounded-xl
                          border
                          border-cyan-400/20
                          bg-[#020617]/70
                          px-4
                          py-2
                          text-sm
                          text-white
                          placeholder:text-gray-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-cyan-400/40
                          focus:border-cyan-400/70
                          transition-all
                          duration-300
                        "
                      />
                    </motion.div>
                  ))}

                  {/* =================================================
                      PROJECT TYPE
                  ================================================= */}

                  <motion.div
                    variants={fadeInUp(0.4)}
                    className="space-y-2 text-left"
                  >
                    <label
                      htmlFor="projectType"
                      className="
                        text-sm
                        font-semibold
                        text-gray-200
                        leading-none
                      "
                    >
                      What's your project about?
                    </label>

                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="
                        flex
                        h-11
                        w-full
                        items-center
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-[#020617]
                        px-4
                        py-2
                        text-sm
                        text-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-cyan-400/40
                        focus:border-cyan-400/70
                        transition-all
                        duration-300
                        cursor-pointer
                      "
                    >
                      <option
                        className="bg-[#020617]"
                        value="Select your project"
                      >
                        Select your project
                      </option>

                      <option
                        className="bg-[#020617]"
                        value="UX UI Designing"
                      >
                        UX UI Designing
                      </option>

                      <option
                        className="bg-[#020617]"
                        value="Web Development"
                      >
                        Web Development
                      </option>

                      <option
                        className="bg-[#020617]"
                        value="GIS Solutions"
                      >
                        GIS Solutions
                      </option>

                      <option
                        className="bg-[#020617]"
                        value="Mobile Apps"
                      >
                        Mobile App
                      </option>

                      <option
                        className="bg-[#020617]"
                        value="Other"
                      >
                        Other
                      </option>
                    </select>
                  </motion.div>

                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <motion.div
                    variants={fadeInUp(0.5)}
                    className="space-y-2 text-left"
                  >
                    <label
                      htmlFor="message"
                      className="
                        text-sm
                        font-semibold
                        text-gray-200
                        leading-none
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your goals..."
                      rows="5"
                      required
                      className="
                        flex
                        w-full
                        min-h-[120px]
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-[#020617]/70
                        px-4
                        py-3
                        text-sm
                        text-white
                        placeholder:text-gray-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-cyan-400/40
                        focus:border-cyan-400/70
                        transition-all
                        duration-300
                        resize-y
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      SUBMIT BUTTON
                  ================================================= */}

                  <motion.button
                    variants={fadeInUp(0.6)}
                    type="submit"
                    whileHover={{
                      scale: 1.03,
                      boxShadow:
                        "0 0 30px rgba(34,211,238,0.3)",
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      relative
                      w-full
                      h-11
                      px-4
                      py-2
                      rounded-xl
                      text-black
                      text-sm
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      bg-gradient-to-r
                      from-cyan-400
                      via-sky-400
                      to-blue-500
                      shadow-[0_0_18px_rgba(34,211,238,0.15)]
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    <span className="relative z-10">
                      Send Request →
                    </span>

                    <span
                      className="
                        absolute
                        inset-0
                        bg-white/20
                        opacity-0
                        hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <motion.div
            variants={fadeInSide("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="
              w-full
              lg:max-w-lg
              flex
              flex-col
              justify-center
              text-white
            "
          >
            {/* =================================================
                CONTACT INFO CARD
            ================================================= */}

            <motion.div
              variants={fadeInUp(0.1)}
              className="
                relative
                p-6
                md:p-8
                rounded-3xl
                bg-[#07111f]/70
                backdrop-blur-xl
                border
                border-cyan-400/20
                shadow-[0_0_30px_rgba(34,211,238,0.05)]
                mb-8
              "
            >
              {/* Glow Line */}
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
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-5
                  bg-gradient-to-r
                  from-white
                  via-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Contact Info
              </h3>

              <div
                className="
                  space-y-5
                  text-gray-300
                  max-w-md
                "
              >
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex-shrink-0
                      w-10
                      h-10
                      rounded-xl
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_15px_rgba(34,211,238,0.08)]
                    "
                  >
                    <span className="text-cyan-300 text-lg">
                      📍
                    </span>
                  </div>

                  <p className="leading-7 text-sm md:text-base">
                    Web Collection Technology AL Safir plaza Main
                    KKH in front of NADRA office Danyore Gilgit
                    Baltistan Pakistan
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex-shrink-0
                      w-10
                      h-10
                      rounded-xl
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span className="text-cyan-300 text-lg">
                      📧
                    </span>
                  </div>

                  <p className="text-sm md:text-base break-all">
                    webcollectiontechnology@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                WHY RESPOND FAST
            ================================================= */}

            <motion.div
              variants={fadeInUp(0.2)}
              className="
                relative
                p-6
                md:p-8
                rounded-3xl
                bg-[#07111f]/70
                backdrop-blur-xl
                border
                border-blue-400/20
                shadow-[0_0_30px_rgba(37,99,235,0.05)]
              "
            >
              {/* Glow Line */}
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
                  via-blue-400
                  to-transparent
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-6
                  bg-gradient-to-r
                  from-white
                  via-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Why Respond Fast?
              </h3>

              <div className="space-y-4">
                {[
                  "24-hour response time",
                  "Free 30-minute strategy session",
                  "GDPR-compliant data handling",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp(0.1 * index)}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center"
                  >
                    {/* Check Icon */}
                    <div
                      className="
                        flex-shrink-0
                        w-7
                        h-7
                        rounded-full
                        bg-cyan-400/10
                        border
                        border-cyan-400/30
                        flex
                        items-center
                        justify-center
                        mr-3
                        shadow-[0_0_12px_rgba(34,211,238,0.1)]
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
                          w-4
                          h-4
                          text-cyan-300
                        "
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>

                    <span className="text-gray-300 text-sm md:text-base">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}