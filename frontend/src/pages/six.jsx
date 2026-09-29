import React from "react";

const Six = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Intro Heading and Paragraph above the main content */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-green-500 text-3xl md:text-4xl font-bold mb-4">
          Welcome to Cyber Solutions
        </h2>
        <p className="text-white text-base md:text-lg">
          Corporate Office Security: Addressing unauthorized access incidents
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
        <img
          src="https://framerusercontent.com/images/Utl5UYF1g7dzawa3LeoLnekCbXY.png"
          alt="Case Studies"
          className="w-full h-full  border-2 border-green-400 rounded-xl object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Who We Are */}
        <div>
          <h4 className="text-green-500 text-2xl md:text-3xl font-bold mb-4">
            Who We Are
          </h4>
          <p className="mb-4">
            SecureGuard Services is a comprehensive security provider dedicated
            to offering reliable protection and peace of mind. With a
            foundation built on trust, alertness, and customer satisfaction, we
            focus on protecting commercial, residential, industrial, and public
            sector properties throughout the area.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Affordable option to traditional on-site security personnel</li>
            <li>Quick response times without compromising coverage quality</li>
            <li>Adaptable and versatile for properties of all dimensions</li>
          </ul>
        </div>

        {/* Randomized Patrol Routes */}
        <div>
          <h4 className="text-green-500 text-2xl md:text-3xl font-bold mb-4">
            Randomized Patrol Routes
          </h4>
          <p className="mb-4">
            To enhance security effectiveness, our mobile patrols navigate
            unpredictable routes and schedules. This randomness hinders
            potential criminals from recognizing patterns or planning around
            patrol timings, greatly diminishing the chances for unlawful
            activities. By maintaining varied and inconsistent movements, we
            ensure your property stays a tough target — safeguarded by strategy
            as well as presence.
          </p>
          <p className="mb-4">
            Our Mobile Patrol Services are tailored to deliver swift,
            dependable security coverage for businesses, residential
            neighborhoods, construction sites, parking areas, and beyond.
            Whether you require scheduled patrols or sporadic visits, our mobile
            units are prepared to deter threats, enforce property regulations,
            and respond instantly to any suspicious behavior.
          </p>
          <p className="mb-4">
            Our patrol units operate in distinctly marked security vehicles that
            act as a strong visual deterrent against potential intruders and
            criminal acts. These vehicles feature flashing lights, security
            branding, and communication devices, ensuring high visibility
            during both day and night patrols.
          </p>
          <p className="mb-4">
            During each patrol, our officers perform thorough inspections of
            your property to detect any signs of forced entry, vandalism, or
            unauthorized access. They meticulously examine doors, windows,
            gates, and perimeter fencing to confirm that everything is secure
            and intact.
          </p>
        </div>

        <div>
           <h4 className="text-green-500 text-2xl md:text-3xl font-bold mb-4">
           Randomized Patrol Routes
          </h4>
          <p className="mb-4">
            To enhance security effectiveness, our mobile patrols navigate unpredictable routes and schedules. This randomness hinders potential criminals from recognizing patterns or planning around patrol timings, greatly diminishing the chances for unlawful activities. By maintaining varied and inconsistent movements, we ensure your property stays a tough target — safeguarded by strategy as well as presence.
          </p>
           <ul className="list-disc list-inside space-y-2">
            <li>Affordable option to traditional on-site security personnel</li>
            <li>Quick response times without compromising coverage quality</li>
            <li>Adaptable and versatile for properties of all dimensions</li>
          </ul>
        </div>

        {/* What Our Clients Say */}
        <div>
          <h4 className="text-green-500 text-2xl md:text-3xl font-bold mb-4">
            What Our Clients Say
          </h4>
          <p>
            “SecureGuard Services transformed our workspace into a safer, more
            secure environment for our staff and clients. Their professionalism
            and meticulous attention to detail truly distinguish them from
            others.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Six;
