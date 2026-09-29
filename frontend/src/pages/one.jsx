import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // For animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const faqs = [
  {
    question: "How do I request a quote or consultation?",
    answer:
      "You can request a quote or consultation by contacting us via our contact page or calling our office directly.",
  },
  {
    question: "Do you provide both armed and unarmed guards?",
    answer:
      "Yes, we offer both armed and unarmed security guard services. Our team will help you determine the best option based on your needs, risk level, and environment.",
  },
  {
    question: "How do you monitor the performance of your guards?",
    answer:
      "We monitor our guards through regular check-ins, reports, and using modern tracking tools to ensure high performance.",
  },
  {
    question: "What happens in case of an emergency?",
    answer:
      "In case of an emergency, our team follows a strict protocol to ensure safety, including alerting authorities and rapid response.",
  },
];


const One = () => {
  const imageSliderData = [
    { img: "./1face.png", heading: "Amelia Torres", para: "Head of Surveillance" },
    { img: "./2 face.png", heading: "Michelle Grant", para: "Director of cliesnt services" },
    { img: "./face3.png", heading: "Marcus Reed ", para: "Cheif of Security Operations" },
    { img: "./face4.png", heading: "John Carter", para: "Event Security Cordinator" },
  ];

  const contentSliderData = [
     {
    img: "https://framerusercontent.com/images/8y6SWlbXeBn4VFSUtW1Liqbluro.jpg",
    name: "Meherun Nisa",
    designation: "Nutritionist",
    text: "Outstanding security service! Their technology and manpower both exceeded expectations. It’s rare to find such commitment and reliability in this field. We finally have peace of mind.",
    rating: 1
  },
     {
    img: "https://framerusercontent.com/images/qrSqZPIapxGZylPtzFaK5YpLb8.jpg",
    name: "Farah Jahan",
    designation: "Architect",
    text: "Very professional and attentive team. Our business premises are now fully secured thanks to their advanced systems and regular monitoring. I sleep peacefully knowing they’re on the job.",
    rating: 5
  },
  {
    img: "https://framerusercontent.com/images/Zz6E4geUiWCHYBZwDMH2Lyd8psk.png",
    name: "Mark Johnson",
    designation: "Chief Technology Officer",
    text: "“Working with Secuby® Security has transformed our approach to safety. Their proactive strategies and commitment have ensured our operations run smoothly and securely. We couldn't ask for more.”",
    rating: 3
  },{
  img: "https://framerusercontent.com/images/blJby5BevdR5yH04OZRQlqNAu0I.jpg",
  name: "David Chowdhury",
  designation: "Software Engineer",
  text: "Excellent service! Their team was professional and ensured our property was secured 24/7. We feel much safer now. Highly recommend for anyone looking for reliable security.",
  rating: 4
}
    ,
   {
  img: "https://framerusercontent.com/images/lkgd28SsajBw7C9F8paPTIChKZM.jpg",
  name: "Rayhan Karim",
  designation: "Real Estate Developer",
  text: "Quick response time and highly trained personnel. They handled every situation with care and efficiency. I’m very satisfied with the level of protection provided. Highly recommend for anyone looking.",
  rating: 5
},
  ];

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const contentSliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };


 
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);}

  return (
    <div className="bg-black text-white w-full">

      {/* Section 1: Right Image, Left Text */}
      <section className="flex flex-col md:flex-row items-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center mb-8 md:mb-0"
        >
          <h2 className="text-7xl font-bold text-green-500 mb-4">Our Story</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-2/2 flex justify-end"
        >
          <img src="./s1.png" alt="Section 1" className="rounded-lg border-3 border-green-500 hover:scale-105 transition-transform duration-500 w-md" />
        </motion.div>
      </section>

      {/* Section 2: Right Two Images, Left Text */}
      <section className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gray-900">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left mb-8 md:mb-0"
        >
          <p className="text-white">With over a decade of experience, Titan Shield Security delivers reliable, 24/7 protection tailored to your unique needs.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-end space-x-4"
        >
          <img src="./s2.png" alt="Img1" className="rounded-lg border-3 border-green-500    hover:scale-105 transition-transform duration-500" />
          <img src="./s3.png" alt="Img2" className="rounded-lg border-3 border-green-500  hover:scale-105 transition-transform duration-500" />
          <p className="text-white">Our commitment to vigilance keeps us alert and prepared at all providing proactive protection to our clients. We uphold the highest standards of professionalism, delivering reliable and respectful.</p>
        </motion.div>
      </section>

      {/* Section 3: Heading + Paragraph + 3 Boxes */}
      <section className="text-center p-8 md:p-16 border-3 border-green-500  bg-black">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-green-500 mb-4"
        >
          Section 3 Heading
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white mb-8"
        >
          Section 3 paragraph goes here. Lorem ipsum dolor sit amet.
        </motion.p>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      title: "Professionalism",
      subtitle: "01",
      desc: "From our appearance to our conduct, we uphold the highest standards of discipline and respect in every environment." 
    },
    {
      title: "Client Commitment",
      subtitle: "02",
      desc: "Every client is unique. We listen, adapt, and provide personalized solutions that match your exact security needs."
    },
    {
      title: "Client Commitment",
      subtitle: "03",
      desc: "Every client is unique. We listen, adapt, and provide personalized solutions that match your exact security needs."
    }
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-500"
    >
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-2">
        {item.subtitle}
      </h2>

      {/* Sub Heading */}
      <h4 className="text-sm sm:text-base md:text-lg text-gray-300 mb-3">
        {item.title}
      </h4>

      {/* Paragraph */}
      <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>

      </section>

      {/* Section 4: Left Image, Right Text + 4 LI */}
      <section className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gray-900">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-start mb-8 md:mb-0"
        >
          <img src="./s4.png" alt="Section 4" className="rounded-lg hover:scale-105 transition-transform duration-500" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h2 className="text-3xl font-bold text-green-500 mb-4">Why clients trust us</h2>
          <p className="text-white mb-4">At Titan Shield Security, trust is earned through consistent performance, clear communication, commitment to our clients’ safety offer more than just a presence.</p>
          <ul className="list-disc pl-5  text-white space-y-2">
            <li className="border-2 border-white rounded-xl p-2">Zero security breaches reported during</li>
            <li className="border-2 border-white rounded-xl p-2">Flawless record no incidents or disruptions </li>
            <li className="border-2 border-white rounded-xl p-2">Maintained 100% incident-free coverage</li>
            <li className="border-2 border-white rounded-xl p-2">No critical incidents reported under</li>
          </ul>
        </motion.div>
      </section>

      {/* Section 5: 4 Boxes Deluxe */}
      <section className="p-8 md:p-16 bg- text-center">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {[
    {
      title: "150",
      subtitle: "+",
      desc: "Certified Security Officers" 
    },
    {
      title: "12",
      subtitle: "+",
      desc: "Years of Experience"
    },
    {
      title: "4.9/5",
      subtitle: "03",
      desc: "Client Satisfaction Rating"
    },
    {
      title: "99.9%",
      subtitle: "+",
      desc: "Incident-Free Rats"
    }
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className=" p-6 border-2 border-white rounded-lg hover:scale-105 transition-transform duration-500"
    >
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-2">
        {item.title}
        {item.subtitle}
      </h2>

      {/* Sub Heading */}
      <h4 className="text-sm sm:text-base md:text-lg text-gray-300 mb-3">
      </h4>

      {/* Paragraph */}
      <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>
      </section>

      {/* Section 6: Image Slider */}
      <section className="p-8 md:p-16 bg-gray-900 text-white">
        <h1 className="text-green-500 text-2xl font-bold text-center mb-8">
   Meet Our Leadership Team
  </h1>
  <Slider {...imageSliderSettings}>
  {imageSliderData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="px-3"
    >
      <div className="flex flex-col items-center text-center space-y-4">

        {/* Image wrapper (box) */}
        <div className="w-full flex justify-center overflow-hidden rounded-xl">
          <img
            src={item.img}
            alt={`Slide ${index}`}
            className="
              w-[30%]              /* 👈 image box se choti */
              rounded-lg
              transition-all
              duration-500
              ease-out
              hover:scale-110
              hover:shadow-2xl
              hover:-translate-y-1
            "
          />
        </div>

        <h3 className="text-xl font-bold text-green-500">
          {item.heading}
        </h3>

        <p className="text-sm">
          {item.para}
        </p>

      </div>
    </motion.div>
  ))}
</Slider>


      </section>

   
{/* Section 7: Content Slider / Review */}
<section className="p-8 md:p-16 bg-black text-white">
  <h1 className="text-green-500 text-2xl font-bold text-center mb-8">
    Our Client Partners
  </h1>

  <Slider {...contentSliderSettings}>
    {contentSliderData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="mx-2 flex flex-col items-center bg-gray-800 p-6 rounded-lg"
      >
        {/* Profile Image */}
        <img
          src={item.img}
          alt={item.name}
          className="w-16 h-16 rounded-full mb-3 object-cover"
        />

        {/* Name & Designation */}
        <div className=" mb-2">
          <h4 className="font-bold text-white">{item.name}</h4>
          <p className="text-sm text-gray-400">{item.designation}</p>
        </div>

        {/* Review / Content */}
        <p className="text-sm text-center text-white mb-3">{item.text}</p>

        {/* Rating */}
        <div className="flex space-x-1">
          {Array.from({ length: item.rating }, (_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
          {Array.from({ length: 5 - item.rating }, (_, i) => (
            <span key={i} className="text-gray-600">★</span>
          ))}
        </div>
      </motion.div>
    ))}
  </Slider>
</section>


     

      {/* Section 8: FAQ + Contact Button + Accordion */}
      <section className="bg-[#04141C] text-white py-16 px-4 md:px-16 rounded-lg max-w-4xl mx-auto">
      {/* Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-400">
          Where we address some of the most commonly asked questions about our services. If you have a question that isn't answered here, contact us.
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-8 py-2 bg-lime-400 text-black rounded-full font-medium hover:bg-lime-500 transition"
        >
      Go Back to 
        </a>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#0C1B2A] rounded-lg overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            <div
              className={`px-4 pb-4 transition-max-height duration-300 overflow-hidden ${
                openIndex === index ? "max-h-86" : "max-h-0"
              }`}
            >
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default One;
