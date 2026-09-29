import React from "react";
import { motion } from "framer-motion";

const Eight= () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://framerusercontent.com/images/R6I2wJHFJDTt2wG7yFKqQAaphH0.png"
          alt="Blog Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col gap-6">
        {/* Date */}
        <motion.p
          className="text-gray-400 text-sm md:text-base"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          June 4, 2025
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          How Mobile Patrols Are Changing Modern Security
        </motion.h1>

        {/* Subheading */}
        <motion.h4
          className="text-xl md:text-2xl font-semibold mt-6"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          How Technology Is Transforming Modern
        </motion.h4>

        {/* Paragraph */}
        <motion.p
          className="text-gray-200 mt-4 max-w-3xl"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          The security industry is undergoing a remarkable change, driven by cutting-edge technologies
          that enhance safety, improve response times, and reduce costs. From advanced surveillance
          systems that quickly detect suspicious behavior to intuitive applications that allow
          property owners to monitor their spaces remotely, technology is reshaping the capabilities
          of security companies and property managers.
        </motion.p>

        {/* List */}
        <motion.ul
          className="list-disc list-inside mt-4 text-gray-200 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <li>A cost-effective alternative to traditional on-site security staff.</li>
          <li>Rapid response times without sacrificing coverage.</li>
          <li>Flexible and scalable solutions suitable for properties of any size.</li>
        </motion.ul>

        {/* Randomized Patrol Section */}
        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h4 className="text-xl md:text-2xl font-semibold">Randomized Patrol Routes</h4>
          <p className="text-gray-200 mt-2 max-w-3xl">
            To boost security effectiveness, our mobile patrols take unpredictable routes and schedules.
            This unpredictability makes it harder for would-be criminals to identify patterns or plan around patrol timings,
            significantly reducing the likelihood of criminal activity.
          </p>
        </motion.div>

        {/* Client Testimonial */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h4 className="text-xl md:text-2xl font-semibold">What Our Clients Say</h4>
          <p className="text-gray-200 mt-2 italic max-w-3xl">
            “CorpSec Solutions has made our workplace a safer and more secure environment for both our employees and clients.
            Their professionalism and keen attention to detail truly set them apart.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Eight;
