// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About2() {
  return (
    <section className="relative w-full py-20 bg-black">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-green-600/20 rounded-full blur-3xl"></div>

      {/* Title */}
      <motion.div
        className="relative z-10 text-center px-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-white text-sm sm:text-base md:text-lg mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          👋 Hey, I Am Sadaqat Aly Founder and Chief Executive :-
        </motion.p>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-green-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sadaqat Aly | Founder And Chief Executive Of Web Collection Technology
        </motion.h1>
      </motion.div>

      {/* 3 Columns Container */}
      <div className="relative max-w-7xl mx-auto flex flex-nowrap items-start gap-6 px-4 z-10 space-y-6">

        {/* Column 1: Contact Info */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-2 min-w-[100px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-1 text-sm sm:text-base mt-40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-bold text-white">E</span>
            <a href="mailto:Alycod3r@gmail.com" className="underline text-white hover:text-green-400">
              Alycod3r@gmail.com
            </a>
          </motion.div>

          <motion.a
            href="tel:+923470470741"
            className="underline text-white text-sm sm:text-base hover:text-green-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            T +92 347 047 0741
          </motion.a>
        </motion.div>

        {/* Column 2: Image */}
        <motion.div
          className="flex-1 flex justify-center min-w-[120px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="https://framerusercontent.com/images/9h5iojzZWreXYDs7gTbRjMePgM.png?width=800&height=836"
            alt="Hero Image"
            className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-sm object-cover rounded-xl"
          />
        </motion.div>

        {/* Column 3: Scroll + Description + Social */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-2 min-w-[120px] text-white space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
         {/* Scroll indicator with text ABOVE the line */}
<motion.div
  className="flex flex-col items-center mb-2 text-gray-400"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  {/* Text ABOVE line */}
  

  {/* Vertical line */}
  <div className="h-16 w-1 bg-green-600 animate-pulse "></div>
  <p className="rotate-[-90deg] text-xs sm:text-sm mb-3 mt-8 ">SCROLL</p>
</motion.div>


          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            I grow businesses by finding new opportunities, building strong partnerships, and creating smart strategies that drive results.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-2 sm:gap-3 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a href="https://x.com/Alycod3r" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200 text-xs sm:text-sm">X</a>
            <a href="https://www.linkedin.com/in/sadaqat-aly-24aa9918a/" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200 text-xs sm:text-sm">LinkedIn</a>
            <a href="https://www.arcgis.com/home/search.html?restrict=false&sortField=relevance&sortOrder=desc&searchTerm=owner%3A%22Alycod3r%22#content" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200 text-xs sm:text-sm">GIS Blogs</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
