const Why = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-snug">
          Why Choose <br />{" "}
          <span className="text-primary">Softwarechamber</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
        <button className="mt-6 px-6 py-2 bg-primary text-white rounded-full shadow hover:scale-105 transition">
          Let’s Discuss →
        </button>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[
          { title: "Efficiency", icon: "🛠️" },
          { title: "Adaptability", icon: "❄️" },
          { title: "Scalability", icon: "⚙️" },
          { title: "Precision", icon: "❌" },
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-start justify-between p-6 bg-gray-100 rounded-2xl shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-sm">
                {card.icon}
              </div>
            </div>
            <hr className="border-t border-gray-300 w-full mb-4" />
            <p className="text-sm text-gray-700 mt-auto">
              Software Chamber specializes in creating powerful, scalable, and
              secure e-commerce solutions tailored to business needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
