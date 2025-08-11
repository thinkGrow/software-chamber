import Span from "../span/Span";

const Uncover = () => {
  return (
    <section className="relative bg-black py-24 text-center overflow-hidden">
      {/* scene glows (kept inside section, but clipped to avoid horizontal scroll) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-15%] top-[-12%] w-[55vw] h-[55vw] rounded-full bg-[#2CCEBA]/10 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-12%] w-[60vw] h-[60vw] rounded-full bg-[#2CCEBA]/14 blur-[160px]" />
      </div>

      <div className="w-19/20 mx-auto">
        {/* Card */}
        <div className="relative mx-auto rounded-[28px] px-6 md:px-16 py-16 md:py-24 bg-[#22C1AD] overflow-hidden">
          {/* subtle inner rim + inner vignette */}
          <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
          <span className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_40px_rgba(0,0,0,0.35)]" />

          {/* card-local glow (so it doesn't cause page scroll) */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-25%] top-[-20%] w-[65vw] h-[65vw] rounded-full bg-[#2CCEBA]/10 blur-[130px]" />
            <div className="absolute right-[-18%] bottom-[-18%] w-[70vw] h-[70vw] rounded-full bg-[#2CCEBA]/18 blur-[150px]" />
          </div>

          {/* badge */}
          <Span></Span>

          {/* logo */}
          <img
            src="uncover/logo.png"
            alt="Brand Mark"
            className="w-12 h-12 mx-auto mb-8"
          />

          {/* heading */}
          <h2 className="font-bri font-semibold leading-tight text-[clamp(28px,5.2vw,52px)] text-white/95">
            Uncover the Design and Development
            <br />
            <span className="text-white/60">Projects That Set Us Apart</span>
          </h2>

          {/* cta */}
          <button
            type="button"
            className="mt-10 mx-auto px-6 py-3 rounded-full relative overflow-hidden
                       bg-[linear-gradient(180deg,#ffffff,#ececec)] text-black
                       flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,.25)] hover:shadow-[0_10px_28px_rgba(0,0,0,.3)] transition"
          >
            {/* glossy sweep */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-60
                             bg-[linear-gradient(0deg,transparent,rgba(255,255,255,.45))]"
            />
            <span className="relative">Contact Us</span>
            <span className="relative inline-flex w-6 h-6 items-center justify-center rounded-full bg-black/85 text-white">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Uncover;
