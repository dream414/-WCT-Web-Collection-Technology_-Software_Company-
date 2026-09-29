import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Four = () => {
  return (
    <motion.section
      className="bg-black min-h-screen flex flex-col items-center justify-center p-8 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-white mb-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Terms & Conditions
      </motion.h1>

      <motion.div className="mb-12" variants={itemVariants}>
        <p className="text-green-400 font-semibold">Last Updated:</p>
        <p className="text-green-300">06 May, 2024</p>
      </motion.div>

      {/* CONTENT */}
      <motion.div className="max-w-4xl space-y-8 text-left" variants={itemVariants}>
        {[
          {
            title: "Acceptance of Terms",
            content:
              "The information provided on this site is solely for informational purposes and does not represent a formal offer of services. CorpSec Solutions can change or stop any service at any time without notice.",
          },
          {
            title: "Use of the Platform",
            content:
              "Mintly offers financial management tools for budgeting, forecasting, reporting, and analysis. Users must be at least 18 years old and use the platform only for lawful purposes.",
          },
          {
            title: "Subscription and Payment",
            content:
              "Subscription fees are charged in advance on a monthly or annual basis. All fees are non-refundable unless explicitly stated.",
          },
          {
            title: "User Responsibilities",
            content:
              "Do not engage in illegal activities, reverse engineer the platform, or share account access without permission.",
          },
          {
            title: "Data Privacy and Security",
            content:
              "We collect and store data according to our Privacy Policy. Reasonable security measures are applied, but complete protection cannot be guaranteed.",
          },
          {
            title: "Intellectual Property",
            content:
              "All content, trademarks, and software are owned by the company and may not be used without written permission.",
          },
          {
            title: "Limitation of Liability",
            content:
              "The platform is not liable for indirect or consequential damages arising from usage.",
          },
          {
            title: "Termination",
            content:
              "We may suspend or terminate access at any time. Upon termination, all associated data may be removed.",
          },
          {
            title: "Changes to the Terms",
            content:
              "Terms may be updated periodically. Continued use implies acceptance of updated terms.",
          },
          {
            title: "Governing Law",
            content: "These Terms are governed by applicable jurisdictional laws.",
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-6 rounded-xl shadow-2xl text-white"
            variants={itemVariants}
          >
            <h4 className="text-xl font-bold mb-2">{section.title}</h4>
            <p className="text-green-100">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Four;
