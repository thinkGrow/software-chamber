// import React from 'react';

const Cards = () => {
  return (
    <div className="flex text-left">
      <div>
        <img src="hero/card.png" alt="" />
      </div>
      <div className="space-y-8 p-22">
        <h3 className="font-rubik text-4xl font-medium">Software Service Solutions</h3>
        <p className="text-3xl font-inter text-[#F8F8F8] outline-title backdrop-blur-xl">Plan, track, and  <br /> manage projects with <br /> precision tools.</p>
        <button className="btn rounded-full text-2xl font-medium font-rubik bg-[#282828] bg-opacity-70 text-gray-300 border-none outline-title px-10 py-8">
            Discover
        </button>
      </div>
    </div>
  );
};

export default Cards;
