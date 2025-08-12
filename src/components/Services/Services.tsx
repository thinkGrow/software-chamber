const Services = () => {
  const services = [
    {
      title: "Web & Mobile App Development",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure e–...",
      active: false,
    },
    {
      title: "Application Software Services",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure e–...",
      active: true,
    },
    {
      title: "Software Coding & Optimuation",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure e–...",
      active: false,
    },
  ];
  return (
    <section className="py-20 w-11/12 mx-auto mb-24">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-12">
        {/* Left Column */}
        <h2 className="text-4xl md:text-7xl text-black flex items-center gap-2 font-bri font-medium">
          Services
          <img
            src="stars.png"
            alt="spark"
            className="w-8 h-8 md:w-10 md:h-10 relative right-5 top-0.5"
          />
        </h2>
        {/* Right Column */}
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition font-outfit">
          <span className="text-xl md:text-2xl font-medium tracking-tighter">
            All Services
          </span>

          <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 transition">
            <img className="h-5 w-5" src="next.png" alt="" />
          </div>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-90">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-[2rem] transition duration-300 hover:bg-[#25BEB4] hover:text-white bg-gray-100 text-black p-10"
          >
            <div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bri font-semibold mb-2 h-[12vh]">
                  {item.title}
                </h3>
              </div>
              <p className="pt-2 text-xl md:pt-0 md:text-2xl font-outfit text-gray-500">{item.desc}</p>
            </div>
            <div className="md:mt-8">
              <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition cursor-pointer hover:text-[#25BEB4] text-black">
                <svg
                  className={`w-4 h-4"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
