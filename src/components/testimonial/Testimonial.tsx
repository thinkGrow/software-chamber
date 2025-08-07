const Testimonial = () => {
  return (
    <section className="relative bg-black py-20 text-white overflow-hidden">
      {/* Background Aura Glow (optional use absolute positioned SVGs or radial gradients) */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00FFE0] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00FFE0] opacity-20 blur-[150px] rounded-full"></div>

      {/* Top Badge */}
      <div className="text-center mb-6">
        <p className="mb-3 inline-block bg-[#0E2F2F] text-sm text-primary px-4 py-1 rounded-full">
          🌟 Smarter Idea, instant solutions
        </p>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-7xl font-bri text-center text-balance">
          Don’t just take our word for it. Hear what
          <span className="text-gray-400"> our clients say</span>
        </h1>
      </div>

      {/* Testimonial Card */}
      <div className="mt-12 max-w-3xl mx-auto px-4">
        <div className="bg-[#101010] rounded-xl p-6 md:p-8 shadow-lg border border-[#00FFE0]/20">
          <p className="text-white text-base md:text-lg leading-relaxed mb-6">
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
