import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cyber Solutions",
    desc: "Corporate Office Security: Addressing unauthorized access incidents",
    points: [
      "Live monitoring & reports",
      "85% fewer security breaches",
      "Enhanced tenant satisfaction",
    ],
    img: "https://framerusercontent.com/images/xbouawoDsO32i9ukVY1Ongq6STU.png",
  },
  {
    title: "Peace of Mind Guaranteed",
    desc: "Expert crowd management for VIP & large events",
    points: [
      "No significant incidents",
      "Smooth guest flow",
      "Law enforcement approved",
    ],
    img: "https://framerusercontent.com/images/Y3mFF5lD5a3YIlB2As7L39vTnDc.png",
  },
  {
    title: "Advanced Surveillance",
    desc: "24/7 monitoring with cutting-edge surveillance systems",
    points: [
      "AI threat detection",
      "Instant alerts",
      "High-resolution coverage",
    ],
    img: "https://framerusercontent.com/images/xbouawoDsO32i9ukVY1Ongq6STU.png",
  },
  {
    title: "Access Control",
    desc: "Smart access systems for restricted environments",
    points: [
      "Biometric systems",
      "Role-based access",
      "Audit logs",
    ],
    img: "https://framerusercontent.com/images/Y3mFF5lD5a3YIlB2As7L39vTnDc.png",
  },
  {
    title: "Risk Assessment",
    desc: "Identify and mitigate risks before they escalate",
    points: [
      "Professional analysis",
      "Preventive strategy",
      "Compliance ready",
    ],
    img: "https://framerusercontent.com/images/xbouawoDsO32i9ukVY1Ongq6STU.png",
  },
  {
    title: "Emergency Response",
    desc: "Rapid response teams for critical situations",
    points: [
      "Trained professionals",
      "Quick deployment",
      "24/7 readiness",
    ],
    img: "https://framerusercontent.com/images/Y3mFF5lD5a3YIlB2As7L39vTnDc.png",
  },
];

const securityBenefits = [
  {
    title: "Customized Security Plans",
    desc: "No two properties are alike. We assess your specific risks and goals to deliver.",
  },
  {
    title: "Rapid Response Team",
    desc: "In the face of an emergency, every second counts our rapid response units.",
  },
  {
    title: "Peace of Mind, Guaranteed",
    desc: "From surveillance cameras and access control systems to mobile patrol.",
  },
];

const Seven = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 md:px-8 py-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Our Most Requested Protection Solution
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Commercial Security is our most in-demand service — and for good reason.
            From office buildings and retail centers to warehouses and banks, businesses
            trust us to deliver 24/7 protection.
          </p>
          <p className="text-white text-lg md:text-xl">
            Our highly trained security officers, advanced surveillance systems, and customized
            access control strategies work together.
          </p>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden m-auto"
        >
          <img
            src="https://framerusercontent.com/images/8tflBNMNRmTNVjbnBrEiwYlg34.png"
            alt="Service Image"
            className="w-full h-full object-cover rounded-lg m-auto"
          />
        </motion.div>
      </div>

 <section className="bg-black py-20">
      <div
        className="
          max-w-7xl mx-auto px-4
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {services.map((item, index) => (
          <ServiceCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>



      {/* Benefits Section */}
     <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
  <div className="flex flex-col lg:flex-row gap-8 items-start">

    {/* TEXT + BENEFITS */}
    <div className="flex-1 order-1 lg:order-1">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white text-3xl md:text-3xl font-semibold mb-6">
          Benefits of choosing Secuby® security
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {securityBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-20 p-6 rounded-lg border border-gray-600"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-white text-xl font-bold mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-400">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* IMAGE (SAME AS PREVIOUS SECTION) */}
    <div className="flex-1 order-2 lg:order-2">
      <div className="relative w-full h-106 md:h-[500px] rounded-lg overflow-hidden">
        <img
          src="./securit.png"
          alt="Benefits Image"
          className="w-full h-full  sm:items-center object-cover rounded-lg"
        />
      </div>
    </div>

  </div>
</div>

    </section>
  );
};

function ServiceCard({ title, desc, points, img, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="
        relative h-full
        rounded-xl
        border border-white/10
        bg-[#030E14]
        p-6
        overflow-hidden
      "
    >
      {/* green glow */}
      <div className="absolute inset-0 bg-green-500/10 blur-3xl opacity-0 hover:opacity-100 transition" />

      {/* icon */}
      <img src={img} alt="" className="w-20 h-20 mb-6 relative z-10" />

      {/* heading */}
      <motion.h4
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-green-400 text-xl font-semibold mb-2"
      >
        {title}
      </motion.h4>

      {/* description */}
      <p className="text-white/80 text-sm mb-4">{desc}</p>

      {/* list */}
      <ul className="space-y-2 mb-6">
        {points.map((p, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-white/70 text-sm"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            {p}
          </li>
        ))}
      </ul>

      {/* button */}
      <div className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm">
        Discover More
      </div>
    </motion.div>
  );
}

export default Seven;

