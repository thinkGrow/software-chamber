// import React from "react";

import Nav from "./Nav";

const Hero = () => {
  return (
    // dotted bg
    <div className="min-h-screen relative inset-0 bg-black pb-20 ">
      {/* Black background */}
      <div
        className="absolute inset-0 object-cover bg-no-repeat brightness-125"
        style={{
          backgroundImage: "url('vector/star.png')",
          backgroundPosition: "0px 90px",
        }}
      ></div>
      <div className="text-white z-100">
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
        <div className="text-center mt-20 space-y-2 relative">
          <div className="relative inline-block p-4">
            {/* dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
              <defs>
                <pattern
                  id="dots"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,.18)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
            <div className="inline-block bg-teal-800/20 text-teal-400 text-sm px-4 py-1 rounded-full">
              ★ Smarter Idea, Instant Solutions
            </div>
            <h1 className="text-center text-4xl md:text-8xl font-bold leading-tight space-y-2 font-bri">
              <span className="block text-[#00FFE0]  bg-clip-text">
                We are your Software
              </span>

              <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#00FFE0] to-white">
                Development
                <span className="inline-block">
                  <img
                    src="hero/text-img.png"
                    alt="software icon"
                    className="w-[0.75em] h-[0.75em] object-fill ml-2 mr-1"
                  />
                </span>
                <span className="inline-block">
                  <img
                    src="hero/text-img2.png"
                    alt="software icon"
                    className="w-[0.75em] h-[0.75em] object-fill ml-1 mr-2"
                  />
                </span>
                Team
              </h1>
              <span className="block text-white">in The Cloud</span>

              <div className="mt-6 flex justify-center z-10 font-outfit">
                <button
                  className="bg-gradient-to-bl text-2xl from-white/50 to-white/10 rounded-full px-4 py-2 flex items-center justify-center gap-4 backdrop-blur-3xl font-medium text-white 
 "
                >
                  <p className="outline-title">Contact Us</p>
                  <div className="bg-white rounded-full p-2">
                    <img className="w-4 h-4" src="hero/arrow.png" alt="arrow" />
                  </div>
                </button>
              </div>
            </h1>
          </div>

          <div className="max-w-[90%] mx-auto mb-10">
            <img src="hero_dummy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
