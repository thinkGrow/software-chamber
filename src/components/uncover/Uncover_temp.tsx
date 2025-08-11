// import React from 'react';

const Uncover = () => {
  return (
    <section className="py-24 text-center bg-black">
      <div className="w-19/20 rounded-2xl mx-auto bg-green-400">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-[#102c2c] text-[#00FFE0] font-medium">
            🌟 Smarter Idea, instant solutions
          </div>

          <img
            src="uncover/logo.png"
            alt="logo"
            className="w-12 h-12 mx-auto mb-6"
          />

          <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
            Uncover the Design and Development
            <br />
            <span className="text-gray-400">Projects That Set Us Apart</span>
          </h2>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-full flex items-center gap-2 shadow hover:scale-105 transition">
            Contact Us
            <span className="inline-block bg-black text-white rounded-full w-6 h-6 items-center justify-center">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Uncover;
