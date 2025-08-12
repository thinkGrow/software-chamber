// import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col  md:flex-row justify-between items-center px-6 py-4 w-11/12 mx-auto">
      <div className="flex items-center gap-2">
        <img src="logo_img.png" alt="" />
        <img src="logo_text.png" alt="Software Chamber" />
      </div>

      <div className="flex gap-2 items-center justify-center">
        <div className="mt-6 flex justify-center z-10 font-outfit">
          <button
            className="bg-gradient-to-bl text-2xl from-white/50 to-white/10 rounded-full px-4 py-2 flex items-center justify-center gap-4 backdrop-blur-3xl font-medium text-white cursor-pointer mb-2
 "
          >
            <p className="outline-title">Contact Us</p>
            <div className="bg-white rounded-full p-2">
              <img className="w-4 h-4" src="hero/arrow.png" alt="arrow" />
            </div>
          </button>
        </div>

        {/* <div className="bg-gradient-to-bl from-white/50 to-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl text-white">
          <img className="w-1/4 h-1/4" src="nav/burger.png" alt="burger" />
        </div> */}
        <div className="w-10 h-10 bg-gradient-to-bl from-white/50 to-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl text-white p-2 mt-5 cursor-pointer mb-2">
          <img className="w-1/2 h-1/2" src="nav/burger.png" alt="burger" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
