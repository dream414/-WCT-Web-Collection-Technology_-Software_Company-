import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const slides = [
    {
      text: "Accurate, fast, and professional web solutions from frontend UI to backend functionality. Sadaqat built us a scalable and user-friendly web app. His communication was smooth, and he went the extra mile to ensure we got exactly what we needed.",
      author: "- Tech Startup Client",
      image: "/A.png",
      imageText: "Anus Ali",
      imageText2: "Spark Code Group of Companies",
    },

    {
      text: "Stunning drone mapping and visuals! We hired Sadaqat for aerial surveys and video documentation of our site. The drone footage was clean, professional, and full of valuable spatial context. Highly recommended for drone-based projects.",
      author: "- Construction & Survey",
      image: "/Stunning.png",
      imageText: "Awaiz Abbasi",
      imageText2:
        "Deputy Secretary, Public Development & Policy Center, Gilgit",
    },

    {
      text: "Valuable government consultancy. Sadaqat helped us with spatial planning and public development proposals. His GIS-backend insights played a major role in improving our local planning strategy.",
      author: "- Government Project Coordinator",
      image: "/Val.png",
      imageText: "Assistant Commissioner",
      imageText2: "",
    },

    {
      text: "Very happy with WCT's work on our soapstone site at Khanda Khoah. Their drone survey and 3D models finally gave us a clear picture of our tunnels, and the team was professional throughout.",
      author: "- Director, Feroz Mining",
      image: "/feroz.png",
      imageText: "Director",
      imageText2: "Feroz Mining",
    },

    {
      text: "Sadaqat Ali, CEO: WCT and his team conducted a detailed geological exploration of emerald (Zamrud) deposits in Daskin, Astore, with professional field surveys and geological research. They developed detailed 3D geological models and spatial maps to help us better understand the area's mineral potential. We appreciate their professional approach, technical expertise, and commitment to delivering quality work.",
      author: "- Client Feedback",
      image: "/shams.png",
      imageText: "Shams",
      imageText2: "Daskin, Astore",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="test"
      className="
        relative
        w-full
        py-20
        px-4
        bg-[#020617]
        text-white
        flex
        flex-col
        items-center
        overflow-hidden
      "
    >
      {/* =====================================================
          FUTURISTIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large Cyan Glow */}
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

        {/* Large Blue Glow */}
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

        {/* Bottom Glow */}
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

        {/* Animated Sprinkles */}
        {Array.from({ length: 32 }).map((_, i) => (
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
              left: `${(i * 31) % 100}%`,
              top: `${(i * 43) % 100}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.3,
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
          HEADING
      ===================================================== */}

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="
          relative
          z-10
          text-3xl
          md:text-4xl
          font-bold
          mb-12
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
        What Clients Say About Me
      </motion.h1>

      {/* =====================================================
          TESTIMONIAL CARD
      ===================================================== */}

      <motion.div
        initial={{
          scale: 0.95,
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-5xl
          mx-4
          sm:mx-6
          md:mx-10
          rounded-3xl
          p-6
          md:p-10
          bg-[#07111f]/90
          border
          border-cyan-400/20
          shadow-[0_0_35px_rgba(34,211,238,0.08)]
          hover:border-cyan-400/40
          transition-all
          duration-500
          backdrop-blur-xl
        "
      >
        {/* Card Top Glow */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[65%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            shadow-[0_0_20px_rgba(34,211,238,0.7)]
          "
        />

        {/* =================================================
            SLIDE
        ================================================= */}

        <motion.div
          key={current}
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* =================================================
              TEXT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="relative"
          >
            {/* Quote Icon */}
            <div
              className="
                text-cyan-400
                text-5xl
                leading-none
                mb-4
                opacity-70
              "
            >
              “
            </div>

            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="
                text-lg
                md:text-xl
                font-medium
                text-gray-100
                text-center
                md:text-left
                leading-8
              "
            >
              {slides[current].text}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              className="
                mt-6
                text-cyan-300
                text-center
                md:text-left
                font-semibold
              "
            >
              {slides[current].author}
            </motion.p>
          </motion.div>

          {/* =================================================
              IMAGE SIDE
          ================================================= */}

          <motion.div
            className="
              flex
              flex-col
              items-center
              text-center
            "
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            {/* Image Glow */}
            <div
              className="
                relative
                p-1
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                via-sky-400
                to-blue-500
                shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >
              <motion.img
                src={slides[current].image}
                alt={slides[current].imageText || "Client"}
                className="
                  w-40
                  h-40
                  object-cover
                  rounded-xl
                  bg-[#020617]
                "
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              />
            </div>

            {/* Client Name */}
            <motion.p
              whileHover={{
                scale: 1.05,
              }}
              className="
                mt-5
                text-white
                font-bold
                text-lg
              "
            >
              {slides[current].imageText}
            </motion.p>

            {/* Client Organization / Designation */}
            {slides[current].imageText2 && (
              <motion.p
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  mt-2
                  text-gray-400
                  text-sm
                  font-semibold
                  max-w-sm
                  leading-6
                "
              >
                {slides[current].imageText2}
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* =====================================================
            SLIDE INDICATORS
        ===================================================== */}

        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                cursor-pointer
                ${
                  current === i
                    ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                    : "w-2 bg-cyan-400/30 hover:bg-cyan-400/60"
                }
              `}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <div className="relative z-10 flex gap-4 mt-8">
        {/* Previous Button */}
        <motion.button
          onClick={prevSlide}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(34,211,238,0.35)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            px-6
            py-2.5
            bg-gradient-to-r
            from-cyan-400
            to-sky-400
            text-black
            rounded-full
            font-bold
            cursor-pointer
            transition-all
            duration-300
          "
        >
          Prev
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(34,211,238,0.35)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            px-6
            py-2.5
            bg-gradient-to-r
            from-sky-400
            to-blue-500
            text-black
            rounded-full
            font-bold
            cursor-pointer
            transition-all
            duration-300
          "
        >
          Next
        </motion.button>
      </div>
    </section>
  );
}