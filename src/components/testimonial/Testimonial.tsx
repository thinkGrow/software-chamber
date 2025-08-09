const Testimonial = () => {
  return (
    <section className="relative bg-black py-30 text-white overflow-hidden">
      {/* Background Aura Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00FFE0] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00FFE0] opacity-20 blur-[150px] rounded-full"></div>

      {/* Top Badge */}
      <div className="text-center mb-6">
        <div className="inline-block bg-teal-800/20 text-teal-400 text-sm px-4 py-1 rounded-full">
          ★ Smarter Idea, Instant Solutions
        </div>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-7xl font-bri text-center text-balance font-medium tracking-tighter mb-20 w-9/12 mx-auto">
          Don’t just take our word for it. Hear what
          <span className="text-gray-400"> our clients say</span>
        </h1>
      </div>

      {/* Testimonial Card */}
      <div className="mt-12 w-9/12 mx-auto relative">
        {/* Glow under card */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-32
                        rounded-full blur-3xl
                        [background:radial-gradient(50%_100%_at_50%_100%,rgba(0,255,224,0.35),transparent)]" />

        <div className="relative bg-[#101010] rounded-xl shadow-lg border-t border-[#00FFE0]/20 px-20 py-10">
          <p className="text-white text-base md:text-4xl leading-12 tracking-tighter mb-20">
            "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna
            risus phasellus nec. In facilisis pulvinar sagittis odio nibh
            condimentum aliquet commodo."
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="testimonials/alex.png"
                alt="Alex Larkins"
                className="w-10 h-10 object-cover border border-black rounded-none"
              />
              <div className="text-sm">
                <p className="font-medium text-white">Alex Larkins</p>
                <p className="text-gray-400">Art Director at Airbnb</p>
              </div>
            </div>
            <img
              src="testimonials/mono.png"
              alt="Mono"
              className="h-5 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
