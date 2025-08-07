const Services = () => {
  const services = [
    {
      title: "Web & Mobile App Development",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure e–",
      active: false,
    },
    {
      title: "Application Software Services",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure e–",
      active: true,
    },
    {
      title: "Software Coding & Optimuation",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure e–",
      active: false,
    },
  ];
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-7xl font-black text-black flex items-center gap-2">
          Services
          <img src="stars.png" alt="spark" className="w-6 h-6" />
        </h2>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
          <span className="text-sm font-medium">All Services</span>
          <svg
            className="w-4 h-4"
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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between rounded-[2rem] p-6 transition duration-300 ${
              item.active ? "bg-[#25BEB4] text-white" : "bg-gray-100 text-black"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p
                className={`text-sm ${
                  item.active ? "text-white/80" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>
            </div>
            <div className="mt-8">
              <button
                className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition`}
              >
                <svg
                  className={`w-4 h-4 ${
                    item.active ? "text-[#25BEB4]" : "text-black"
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
