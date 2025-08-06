// import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 w-11/12 mx-auto">
      <div className="flex items-center gap-2">
        <img src="logo_img.png" alt="" />
        <img src="logo_text.png" alt="Software Chamber" />
      </div>
      <div className="flex items-center gap-4">
        <button className="btn btn-sm btn-outline text-white">
          Contact Us
        </button>
        <button className="btn btn-circle btn-ghost">
          <svg>...hamburger icon...</svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;
