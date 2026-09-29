import React, { useState } from "react";

const latestBlog = {
  date: "June 4, 2025",
  title: "How Mobile Patrols Are Changing Modern Security",
  image: "https://framerusercontent.com/images/R6I2wJHFJDTt2wG7yFKqQAaphH0.png",
};

const blogs = [
  {
    date: "April 24, 2025",
    title: "How Technology Is Transforming Modern Security Services",
    image: "https://framerusercontent.com/images/YmXzmvQYMP40FuVS1YKm4EuW9Q.png",
  },
  {
    date: "May 6, 2025",
    title: "The Future of Remote Work: Trends and Predictions",
    image: "https://framerusercontent.com/images/GugTN14kndKc8bMsczQVM5R4kI.png",
  },
  {
    date: "May 22, 2025",
    title: "Sustainable Practices in Tech: A Necessity for Our Future",
    image: "https://framerusercontent.com/images/Ks7xlqi0b0lWxTlk9VAa0IhxUwc.png",
  },
  {
    date: "June 11, 2025",
    title: "Artificial Intelligence: Revolutionizing Customer Service",
    image: "https://framerusercontent.com/images/jOldOiKKiI95gttUC6n0tZl1CDA.png",
  },
  {
    date: "June 26, 2025",
    title: "Blockchain Beyond Cryptocurrency: Innovations in Security",
    image: "https://framerusercontent.com/images/37e0YRcD5IWZk8UJBEJqjav0dA.png",
  },
  {
    date: "July 2, 2025",
    title: "The Impact of 5G on Everyday Life and Business",
    image: "https://framerusercontent.com/images/8hH98VtsojrOLYwsZbl00ZScFk.png",
  },
  {
    date: "September 15, 2025",
    title: "Understanding Edge Computing: Benefits and Use Cases",
    image: "https://framerusercontent.com/images/PylJaLm4AMjcYzqrThRn08vSY.png",
  },
  {
    date: "October 5, 2025",
    title: "Cybersecurity: Protecting Your Data in a Digital World",
    image: "https://framerusercontent.com/images/e5PtvxdJAgdpVcwyQERuRAygslc.png",
  },
  {
  date: "November 10, 2025",
  title: "Cybersecurity Trends: How to Safeguard Your Digital Life",
  image: "./pro.png",
},

];


const staticDescription = "In today’s fast-paced world, static security measures are no longer enough to deter evolving threats. Mobile patrol services are transforming how properties."

const Two = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <section className="bg-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-white text-4xl sm:text-5xl font-bold text-center mb-4">
          Secuby® Insights & blogs
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Stay informed with our latest articles on property protection, security
          trends, and best practices from the professionals at CorpSec Solutions.
        </p>

        {/* Featured Blog */}
        <div className="block sm:flex items-center gap-8 bg-gray-900 rounded-2xl overflow-hidden">
          <div className="sm:w-1/2 h-64 sm:h-auto relative">
            <img
              src={latestBlog.image}
              alt={latestBlog.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="sm:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-400 mb-2">{latestBlog.date}</p>
            <h2 className="text-white text-2xl font-semibold mb-4">
              {latestBlog.title}
            </h2>
            <p className="text-gray-400 mb-6">{staticDescription}</p>
            <div>
              <button
                onClick={() => openModal(latestBlog)}
                className="bg-yellow-400 text-[#030E14] font-bold px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-2">Latest Blogs</h2>
        <p className="text-gray-400 mb-8">
          Stay informed with our latest articles on property protection, security trends, and best practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group block rounded-xl overflow-hidden bg-gray-900 hover:scale-105 transform transition duration-300"
            >
              <div className="relative w-full h-64">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-1">{blog.date}</p>
                <h3 className="text-white text-lg font-semibold mb-2">{blog.title}</h3>
                <button
                  onClick={() => openModal(blog)}
                  className="text-yellow-400 font-medium"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 p-6 rounded-2xl max-w-lg w-full relative m-10"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white font-bold text-xl"
            >
              &times;
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-green-400 text-2xl font-semibold mb-2">
              {selectedBlog.title}
            </h2>


<h2 className="text-yellow-400 ">How Technology Is Transforming Modern</h2>
<p className="text-white">The security industry is undergoing a remarkable change, driven by cutting-edge technologies that enhance safety, improve response times, and reduce costs. From advanced surveillance systems that quickly detect suspicious behavior to intuitive applications that allow property owners to monitor their spaces remotely, technology is reshaping the capabilities of security companies and property managers.</p>

          </div>
        </div>
      )}
    </section>
  );
};

export default Two;
