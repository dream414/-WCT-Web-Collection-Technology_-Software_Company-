import React from "react";

const reviews = [
  {
    name: "Ella Tran",
    role: "Operations Manager",
    image: "https://framerusercontent.com/images/X7MTN98gcTMBHWqQlbR8dFkeIY.png",
    rating: 4.9,
    text: "“At Secuby® Security, we take pride in our outstanding service, but our clients articulate it even better. Here’s what they have to say about working with our reliable and dedicated security teams.”",
  },
 {
  "name": "Marcus Johnson",
  "role": "Chief Technology Officer",
  "image": "https://framerusercontent.com/images/3NFuYGkeXC5uGXT39YxW8JIDw.png",
  "rating": 4.8,
  "text": "“Partnering with Secuby® Security has revolutionized our safety protocols. Their proactive measures and dedication have kept our operations running smoothly and securely.”"
},
 {
  "name": "Samantha Lee",
  "role": "Event Planner",
  "image": "https://framerusercontent.com/images/TcJtYePebpo8VJ4sSJ9cgJV0aQk.png",
  "rating": 5.0,
  "text": "“Secuby® Security ensured our event was both seamless and secure. Their professionalism and meticulous attention to detail allowed us to focus on what truly mattered. Highly recommended!”"
},
{
  name: "Ella Tran",
  role: "Operations Manager",
  image: "https://framerusercontent.com/images/hUjDQ3Gj9dkmZ8dc02DyWG9buc.png",
  rating: 4.9,
  text: "“At Secuby® Security, we take pride in our outstanding service, but our clients articulate it even better. Here’s what they have to say about working with our reliable and dedicated security teams.”"
},
{
  name: "Marcus Johnson",
  role: "Chief Technology Officer",
  image: "https://framerusercontent.com/images/8KEUeGWBUnOoKODsIp7TChAfY.png",
  rating: 4.8,
  text: "“Partnering with Secuby® Security has revolutionized our safety protocols. Their proactive measures and dedication have kept our operations running smoothly and securely.”"
},
{
  name: "Samantha Lee",
  role: "Event Planner",
  image: "https://framerusercontent.com/images/5FM87c04luvsYIiQbezrx5FaY.png",
  rating: 5.0,
  text: "“Secuby® Security ensured our event was both seamless and secure. Their professionalism and meticulous attention to detail allowed us to focus on what truly mattered. Highly recommended!”"
},
{
  name: "Ella Tran",
  role: "Operations Manager",
  image: "https://framerusercontent.com/images/El6hxXrqGBqiBoNWQQEUIqwdE.png",
  rating: 4.9,
  text: "“At Secuby® Security, we take pride in our outstanding service, but our clients articulate it even better. Here’s what they have to say about working with our reliable and dedicated security teams.”"
},
{
  name: "Marcus Johnson",
  role: "Chief Technology Officer",
  image: "https://framerusercontent.com/images/HksLsL5dgaLbWdfGd2I8wisCeSk.png",
  rating: 4.8,
  text: "“Partnering with Secuby® Security has revolutionized our safety protocols. Their proactive measures and dedication have kept our operations running smoothly and securely.”"
},
{
  name: "Marcus Johnson",
  role: "Chief Technology Officer",
  image: "https://framerusercontent.com/images/HksLsL5dgaLbWdfGd2I8wisCeSk.png",
  rating: 4.8,
  text: "“Partnering with Secuby® Security has revolutionized our safety protocols. Their proactive measures and dedication have kept our operations running smoothly and securely.”"
},
{
  name: "Samantha Lee",
  role: "Event Planner",
  image: "https://framerusercontent.com/images/kTwKWnKB3IyluMGKmiHOf0QXqUw.png",
  rating: 5.0,
  text: "Secuby® Security ensured our event was both seamless and secure. Their professionalism and meticulous attention to detail allowed us to focus on what truly mattered. Highly recommended!"
},
{
  name: "Ella Tran",
  role: "Operations Manager",
  image: "https://framerusercontent.com/images/TwaHv0l6G5rosafsWJUM4TbpfpM.png",
  rating: 4.9,
  text: "At Secuby® Security, we take pride in our outstanding service, but our clients articulate it even better. Here’s what they have to say about working with our reliable and dedicated security teams."
},
{
  name: "Marcus Johnson",
  role: "Chief Technology Officer",
  image: "https://framerusercontent.com/images/E4O7psv3pa2usq2u9adUbtNvbA.png",
  rating: 4.8,
  text: "Partnering with Secuby® Security has revolutionized our safety protocols. Their proactive measures and dedication have kept our operations running smoothly and securely."
},
// Add 9 more objects for a total of 12 reviews
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 shadow-lg transition-transform hover:scale-105 duration-300 border-2 border-white">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white font-semibold">{review.name}</h3>
          <p className="text-gray-400 text-sm">{review.role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{review.text}</p>
      <div className="flex items-center gap-2 mt-auto">
        <p className="text-white font-semibold">{review.rating}/5</p>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-600"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.362 2.06 10.638 2.06 10.951 2.927l1.286 3.947a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.947c.313.867-.755 1.58-1.538 1.01l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.783.57-1.851-.143-1.538-1.01l1.286-3.947a1 1 0 00-.364-1.118L2.08 9.374c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.947z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const Three = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-green-400 font-bold mb-2">Customer Reviews</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At Secuby® Solutions, we specialize in delivering professional, customized security services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Three;
