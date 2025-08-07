// import React from "react";

import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#0f1d29] to-[#0b0f1a] text-white relative overflow-hidden">
      {/* Vectors */}
      {/* Top Left*/}
      <div className="absolute -top-80 left-0">
        <img src="vector/vector.png" alt="" />
      </div>
      {/* Bottom Left  */}
      <div className="absolute top-0 -left-10">
        <img src="vector/vector.png" alt="" />
      </div>
      {/* Top Right */}
      <div className="absolute -top-30 right-0">
        <img src="vector/vector2.png" alt="" />
      </div>
      {/* Bottom Left */}
      <div className="absolute top-50 -right-40">
        <img src="vector/vector2.png" alt="" />
      </div>

      <Nav></Nav>
      <div className="text-center mt-20 space-y-2">
        <div className="inline-block bg-teal-800/20 text-teal-400 text-sm px-4 py-1 rounded-full">
          ★ Smarter Idea, Instant Solutions
        </div>
        <h1 className="text-center text-4xl md:text-8xl font-bold leading-tight space-y-2 font-bri">
          <span className="block text-[#00FFE0]  bg-clip-text">
            We are your Software
          </span>

          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#00FFE0] to-white">
            Development
            <span className="inline-block p-3 rounded-xl bg-[#00FFE0]/20 mx-2 items-center">
              <img
                src="software-license.png" // replace with actual path
                alt="software icon"
                className="w-8 h-8 object-contain"
              />
            </span>
            <span className="inline-block">
              <img
                src="y.png" // replace with actual path
                alt="software icon"
                className="w-8 h-8 object-contain"
              />
            </span>
            Team
          </h1>
          <span className="block text-white">in The Cloud</span>

          <div className="mt-6">
            <button className="btn btn-neutral btn-md rounded-full px-6">
              Contact Us
            </button>
          </div>
        </h1>

        <div className="max-w-[90%] mx-auto mb-10">
          <img src="hero_dummy.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
