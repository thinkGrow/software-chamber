const Contact = () => {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-16 bg-white text-black mb-20">
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 pb-6 sm:pb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bri text-balance tracking-tighter font-semibold">
            Let’s talk about your next project.
            <span className="text-gray-400"> We’re here to help.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-outfit leading-8 md:leading-10 tracking-tight text-[#494949] max-w-2xl md:max-w-xl mx-auto">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="order-1 lg:order-none md:h-full">
            <img
              src="contact/hero.png"
              alt="Smiling person"
              className="rounded-[20px] w-full h-[50vh] md:h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <form
            className="flex flex-col gap-4 pt-1 lg:h-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium focus-visible:ring-2 focus-visible:ring-[#16AD71]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium focus-visible:ring-2 focus-visible:ring-[#16AD71]"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium focus-visible:ring-2 focus-visible:ring-[#16AD71]"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium sm:w-28 focus-visible:ring-2 focus-visible:ring-[#16AD71]">
                <option>+1</option>
                <option>+880</option>
                <option>+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium flex-1 focus-visible:ring-2 focus-visible:ring-[#16AD71]"
              />
            </div>
            <input
              type="text"
              placeholder="Job Title"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium focus-visible:ring-2 focus-visible:ring-[#16AD71]"
            />
            <textarea
              placeholder="Your message"
              className="bg-[#F3F3F3] px-4 py-3 rounded-xl outline-none font-outfit text-lg font-medium min-h-[28vh] md:min-h-[19vh] resize-none focus-visible:ring-2 focus-visible:ring-[#16AD71]"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-tr to-[#2CCEBA] from-[#16AD71] text-white rounded-full cursor-pointer hover:scale-[1.02] transition font-outfit font-semibold w-full md:w-1/2 sm:w-auto lg:w-1/3 flex items-center justify-center gap-3"
            >
              <span>Let’s Discuss</span>
              <span className="bg-[#E9E9E9] rounded-full p-2">
                <img className="w-4 h-4" src="next-top.png" alt="arrow" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
