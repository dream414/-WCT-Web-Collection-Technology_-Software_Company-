import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Global Clients" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "Experts Support" },
  { value: "5+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-black">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative group"
        >
          {/* Animated gradient border with green colors */}
          <div className="absolute inset-0 rounded-2xl">
            <div
              className="absolute inset-0 rounded-2xl border-2 border-transparent overflow-hidden animate-[slow-border-flow_15s_linear_infinite]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, transparent, transparent), linear-gradient(to right, #059669, #22c55e, #059669)", // green gradient
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                backgroundSize: "300% 100%",
              }}
            ></div>
          </div>

          {/* Inner greenish card */}
          <div className="absolute inset-[2px] bg-black rounded-xl"></div>

          {/* Card Content */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(5, 150, 105, 0.7)", // green glow
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10 h-full p-6 bg-black/10 backdrop-blur-md rounded-xl text-center flex flex-col items-center justify-center shadow-md text-white transition-all duration-300"
          >
            <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
            <div className="text-sm text-green-200">{stat.label}</div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
