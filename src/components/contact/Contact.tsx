// import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bri text-center text-balance">
            Let’s talk about your next project.
            <span className="text-gray-400"> We’re here to help.</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Image */}
          <div>
            <img
              src="contact/hero.png"
              alt="Smiling person"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>

          {/* Right Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-100 px-4 py-3 rounded outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-100 px-4 py-3 rounded outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 px-4 py-3 rounded outline-none"
            />
            <div className="flex gap-2">
              <select className="bg-gray-100 px-4 py-3 rounded w-24 outline-none">
                <option>+1</option>
                <option>+880</option>
                <option>+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="bg-gray-100 px-4 py-3 rounded flex-1 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Job Title"
              className="bg-gray-100 px-4 py-3 rounded outline-none"
            />
            <textarea
              placeholder="Your message"
              className="bg-gray-100 px-4 py-3 rounded min-h-[200px] resize-none outline-none"
            />

            <button
              type="submit"
              className="self-start mt-2 bg-[#00FFE0] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition"
            >
              Submit
              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
