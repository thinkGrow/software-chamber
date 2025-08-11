// SDLC.jsx — single file, perfect semicircle arc + planet touching bottom

const SDLC = () => {
  // ── tweak these to change the arc shape/size (semicircle via SVG A command)
  const ARC = {
    leftX: 60, // arc starts here (x)
    rightX: 940, // arc ends here (x)
    baseY: 500, // baseline (y) — keep equal for left/right to get a semicircle
    r: 440, // radius — bigger = taller arc (and wider unless you move ends)
  };
  const d = `M${ARC.leftX} ${ARC.baseY} A${ARC.r} ${ARC.r} 0 0 1 ${ARC.rightX} ${ARC.baseY}`;

  // Step labels (positioned by % inside the arc box; tweak to taste)
  const steps = [
    { label: "Code", top: "86%", left: "7%" },
    { label: "Build", top: "38%", left: "18%" },
    { label: "Test", top: "15%", left: "35%" },
    { label: "Release", top: "9%", left: "51%" },
    { label: "Deploy", top: "14%", left: "65%" },
    { label: "Monitor", top: "35%", left: "82%" },
    { label: "Build", top: "86%", left: "94%" },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white pt-32 pb-0">
      {/* Headline */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#0E2F2F] text-[#00FFE0] px-4 py-1 text-sm">
          ★ Smarter Idea, Instant Solutions
        </span>
        <h2 className="mt-6 font-bri font-semibold leading-none text-[clamp(36px,6vw,72px)]">
          Our Software
        </h2>
        <h3 className="font-bri font-semibold leading-none text-[clamp(36px,6vw,72px)] bg-clip-text text-transparent bg-gradient-to-b from-[#00FFE0] to-white">
          Development Process
        </h3>
        <p className="mt-5 mx-auto max-w-3xl text-white/70 text-[clamp(14px,1.7vw,18px)]">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
        <div className="mt-6 flex justify-center z-10 font-outfit">
          <button
            className="bg-gradient-to-bl text-2xl from-white/50 to-white/10 rounded-full px-4 py-2 flex items-center justify-center gap-4 backdrop-blur-3xl font-medium text-white 
 "
          >
            <p className="outline-title">Contact Us</p>
            <div className="bg-white rounded-full p-2">
              <img className="w-4 h-4" src="hero/arrow.png" alt="arrow" />
            </div>
          </button>
        </div>
      </div>

      {/* Arc + steps (fixed canvas) */}
      <div className="relative mx-auto mt-16 w-[min(1100px,92vw)] aspect-[2/1]">
        {/* PERFECT semicircle via 'A' (elliptical arc) */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 500"
          fill="none"
        >
          <path
            d={d}
            stroke="#00FFE0"
            strokeWidth="2"
            strokeDasharray="10 12"
            strokeOpacity="0.45"
            strokeLinecap="round"
          />
        </svg>

        {/* Steps positioned over the arc */}
        {steps.map((s, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ top: s.top, left: s.left }}
          >
            <div className="text-[#00FFE0] font-outfit text-7xl text-[clamp(12px,1.6vw,18px)] pb-4 text-center">
              {s.label}
            </div>
            <div className="mb-2 grid place-items-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#FFFFFF]/50 to-[#FFFFFF]/10 backdrop-blur-lg text-white text-sm shadow-[0_4px_14px_rgba(0,0,0,.35)] font-outfit font-medium">
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Planet pinned to the section bottom (touches bottom) */}
      <img
        src="sdlc/planet.png"
        alt="Planet"
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[70%] max-w-none opacity-95"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,.35) 85%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,.35) 85%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Optional soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[100%] h-[120%] rounded-[999px] blur-[140px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, #00FFE0 0%, rgba(0,0,0,0) 60%)",
        }}
      />
    </section>
  );
};

export default SDLC;
