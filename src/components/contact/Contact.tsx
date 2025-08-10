// import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-16 bg-white text-black mb-20">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-12 pb-8 max-w-6xl mx-auto">
          <h1 className="text-7xl font-bri text-center text-balance tracking-tighter font-semibold">
            Let’s talk about your next project.
            <span className="text-gray-400"> We’re here to help.</span>
          </h1>
          <p className="mt-4 text-3xl font-outfit leading-10 tracking-tight text-[#494949] max-w-xl mx-auto">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-[2fr_3fr] gap-12 items-start w-11/12 mx-auto">
          {/* Left Image */}
          <div>
            <img
              src="contact/hero.png"
              alt="Smiling person"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>

          {/* Right Form */}
          <form className="flex flex-col gap-4 pt-1 justify-between">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium"
            />
            <div className="flex gap-2">
              <select className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium w-24">
                <option>+1</option>
                <option>+880</option>
                <option>+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium flex-1"
              />
            </div>
            <input
              type="text"
              placeholder="Job Title"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium"
            />
            <textarea
              placeholder="Your message"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit leading-8 text-lg tracking-normal text-black font-medium min-h-[19vh] resize-none"
            />

            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-tr to-[#2CCEBA] from-[#16AD71] text-white rounded-full backdrop-blur-2xl cursor-pointer hover:scale-105 transition flex items-center gap-4 font-outfit font-semibold w-1/4 justify-between"
            >
              <p>Let’s Discuss</p>
              <div className="bg-[#E9E9E9] rounded-full p-2">
                <img className="w-4 h-4" src="next-top.png" alt="arrow" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
