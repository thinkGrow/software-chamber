const SDLC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-center text-white py-32">
      <p className="mb-3 inline-block bg-[#0E2F2F] text-sm text-primary px-4 py-1 rounded-full">
        🌟 Smarter Idea, instant solutions
      </p>

      <h2 className="text-5xl font-semibold">Our Software</h2>
      <h3 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#00FFE0] to-[#fff]">
        Development Process
      </h3>

      <p className="mt-4 max-w-xl mx-auto text-sm text-white/70">
        Deliver personalized experiences to your customers with AI-powered
        recommendation engines and dynamic content generation.
      </p>

      <div className="mt-6">
        <button className="flex items-center gap-2 bg-neutral-900 px-6 py-2 rounded-full text-white shadow-md">
          Contact Us
          <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center">
            →
          </span>
        </button>
      </div>

      {/* Planet and Steps */}
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        {/* SVG arc */}
        <svg
          className="absolute w-full h-full top-0 left-0"
          viewBox="0 0 500 250"
          fill="none"
        >
          <path
            d="M20,230 Q250,-50 480,230"
            stroke="#00FFE0"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            strokeOpacity="0.4"
          />
        </svg>

        {/* Planet */}

        {/* Steps on arc */}
        {[
          { label: "Code", top: "65%", left: "6%" },
          { label: "Build", top: "38%", left: "16%" },
          { label: "Test", top: "21%", left: "33%" },
          { label: "Release", top: "10%", left: "50%" },
          { label: "Deploy", top: "21%", left: "67%" },
          { label: "Monitor", top: "38%", left: "84%" },
          { label: "Build", top: "65%", left: "94%" },
        ].map((step, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              top: step.top,
              left: step.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-1 text-sm">
              {i + 1}
            </div>
            <p className="text-primary text-sm font-medium">{step.label}</p>
          </div>
        ))}
      </div>
      <div>
        <img
          src="sdlc/planet.png"
          alt="Planet"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-100 opacity-90"
        />
      </div>
    </section>
  );
};

export default SDLC;
