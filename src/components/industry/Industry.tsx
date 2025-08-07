// import React from 'react';

import Marquee from "react-fast-marquee";

const industries = [
  { title: "Tech", img: "/industries/tech.png" },
  { title: "Health Care", img: "/industries/healthcare.png" },
  { title: "Developers", img: "/industries/developers.png" },
  { title: "Software", img: "/industries/software.png" },
  { title: "Entertainment", img: "/industries/entertainment.png" },
  { title: "Hospitality", img: "/industries/hospitality.png" },
  //   { title: "Manufacturing", img: "/industries/manufacturing.png" },
  { title: "Energy", img: "/industries/energy.png" },
  { title: "Auto Motion", img: "/industries/automotive.png" },
  { title: "Agriculture", img: "/industries/agriculture.png" },
];

const Industry = () => {
  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="text-center mb-8">
        <p className="mb-3 inline-block bg-[#0E2F2F] text-sm text-primary px-4 py-1 rounded-full">
          🌟 Smarter Idea, instant solutions
        </p>
      </div>

      <Marquee gradient={false} speed={70}>
        <div className="flex items-center gap-10 px-10">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[150px] text-white"
            >
              <img
                src={industry.img}
                alt={industry.title}
                className="w-32 h-20 object-cover rounded-full shadow-md"
              />
              <p className="text-white text-sm font-medium">{industry.title}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Industry;
