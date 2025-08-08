const Why = () => {
  return (
    <section className="bg-white py-20 relative mx-auto w-11/12">
      {/* Left Arrow */}
      <div className="absolute -left-5 bottom-50 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition">
        <img src="left.png" alt="left-chevron" />
      </div>

      {/* Right Arrow */}
      <button className="absolute -right-5 bottom-50 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition">
        <img src="right.png" alt="right-chevron" />
      </button>

      <div className="text-center">
        <h2 className="text-7xl font-bri text-center text-balance tracking-tighter font-medium">
          Why Choose <br />{" "}
          <span className="text-primary">Software Chamber</span>
        </h2>
        <p className="mt-4 font-outfit tracking-wide max-w-xl mx-auto text-xl">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-tr to-[#2CCEBA] from-[#16AD71] text-white rounded-full backdrop-blur-2xl cursor-pointer hover:scale-105 transition">
          Let’s Discuss 
          <div>
            
          </div>
        </button>
      </div>

      {/* Cards */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Efficiency",
            desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
            icon: "why/efficiency.png",
          },
          {
            title: "Adaptability",
            desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
            icon: "why/adapt.png",
            
          },
          {
            title: "Scalability",
            desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
            icon: "why/scale.png",

          },
          {
            title: "Precision",
            desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
            icon: "why/precision.png",

          },
        ].map((card, i) => (
          <div
            key={i}
            className={`flex flex-col items-start justify-between p-6 bg-gray-100 rounded-2xl shadow-sm transition hover:shadow-md h-[35vh]
        ${i % 2 === 0 ? "lg:mt-8" : "lg:-mt-8"}`}
          >
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-4xl font-semibold font-bri">{card.title}</h3>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-sm spect-square shrink-0 leading-none">
                <img className="w-6 h-6 p-1" src={card.icon} alt={card.title} />
              </div>
            </div>
            <hr className="border-t border-gray-300 w-full" />
            <p className="text-xl font-outfit text-gray-700 my-5">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
