import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Five = () => {
  const { scrollYProgress } = useViewportScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const sections = [
    {
      title: "Introduction",
      content:
        "At SecureCorp Solutions, we prioritize your privacy. This Privacy Policy outlines how we gather, utilize, and safeguard the personal information you share with us on our website. By visiting our site, you agree to the practices detailed herein.",
    },
    {
      title: "How we use your information.",
      content:
        "The personal data we gather is utilized to enhance and deliver Mintly's financial management services. This encompasses account management, transaction processing, report generation, and tailored financial insights. We also use your information for communication, including notifications, service updates, and marketing materials (if you have opted in). Additionally, Sapick may leverage data analytics to refine our platform’s functionality and user experience.",
    },
    {
      title: "Data protection and security.",
      content:
        "At Mintly, we enforce stringent security protocols to safeguard your personal and financial information. We employ encryption methods, secure servers, and access controls to prevent unauthorized access, disclosure, or misuse of your data. While we strive to protect your information, please understand that no online transmission or storage method is entirely secure. We advise users to take extra precautions, such as creating strong passwords and enabling two-factor authentication.",
    },
    {
      title: "Sharing Your Information",
      content:
        "We do not sell, trade, or lease your personal information to third parties. However, Mintly may share your data with trusted partners who help us deliver our services (e.g., payment processors, cloud service providers). These partners are contractually bound to safeguard your information and utilize it solely for the specified purposes. In accordance with legal obligations, we may also disclose your information to authorities if mandated by law or during a legal dispute.",
    },
    {
      title: "Your Rights and Choices.",
      content:
        "As a Mintly user, you have the right to access, modify, and rectify your personal information at any time via your account settings. You can also request the deletion of your data or withdraw consent for specific data processing activities. Please note that some data may be retained to meet legal obligations or for legitimate business reasons. If you wish to opt out of marketing communications, you can modify your preferences in your account or unsubscribe using the link in our emails.",
    },
    {
      title: "Cookies and tracking technologies.",
      content:
        "Mintly employs cookies and similar tracking technologies to improve your experience on our platform. These tools assist us in understanding user behavior, optimizing site performance, and personalizing content. You can manage your cookie preferences through your browser settings, but disabling cookies may limit your ability to access certain features of our platform.",
    },
    {
      title: "International data transfers.",
      content:
        "If you access Mintly from outside your home country, please be aware that your data may be transferred to and processed in countries with varying data protection laws. In such instances, we take measures to ensure your personal information is adequately protected in accordance with applicable legal standards.",
    },
    {
      title: "Updates to the privacy policy.",
      content:
        "Mintly may revise this Privacy Policy periodically to reflect updates in our practices, technologies, or legal requirements. We will inform you of any significant changes by posting the updated policy on our website and, where appropriate, through other means. Your continued use of Sapick following these changes signifies your acceptance of the revised Privacy Policy.",
    },
    {
      title: "Contact information.",
      content:
        "If you have any questions or concerns regarding this Privacy Policy or how your data is managed, please reach out to us at [email address] or [phone number]. We are dedicated to addressing your inquiries and ensuring your privacy is upheld. This content clarifies how Mintly manages user data and ensures users are aware of their rights and protections. Adjustments can be made based on specific legal requirements or additional features.",
    },
  ];

  return (
    <motion.section
      className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Main heading */}
        <motion.h2
          className="text-5xl sm:text-5xl font-extrabold text-white text-center mb-12"
          style={{ y: yParallax }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Privacy Policy
        </motion.h2>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="relative mb-10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 z-0"
            variants={item}
            whileHover={{ scale: 1.03 }}
            style={{ y: yParallax }}
          >
            {/* Neon animated border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                padding: "3px",
                borderRadius: "1rem",
                background: "linear-gradient(270deg, #00ff7f, #00ff00, #64ffda, #00ff7f)",
                backgroundSize: "600% 600%",
                animation: "neonBorder 4s linear infinite",
                boxShadow: "0 0 10px #00ff7f, 0 0 20px #00ff7f, 0 0 40px #00ff7f",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) padding-box",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Content */}
            <h4 className="text-2xl sm:text-3xl font-bold text-green-500 mb-3 relative z-10 inline-block">
              {section.title}
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </h4>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed relative z-10">
              {section.content}
            </p>

            <style>
              {`
                @keyframes neonBorder {
                  0% {background-position: 0% 50%;}
                  50% {background-position: 100% 50%;}
                  100% {background-position: 0% 50%;}
                }
              `}
            </style>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Five;
