const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* About Title */}
      <div>
        <h1 className="text-7xl font-bri text-center text-balance">
          <span className="inline-block">
            <img src="stars.png" alt="stars" />
          </span>
          At Software Chamber,
          <span className="text-neutral-400"> we specialize</span>
          in turning complex challenges into elegant
          <span className="text-neutral-400"> digital solutions</span>
          <span className="inline-block">
            <img src="about/stock.png" alt="stock" />
          </span>
        </h1>
      </div>

      {/* About Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-black grid grid-cols-1 md:grid-cols-3 gap-12 items-center min-h-full">
        {/* Left Text */}
        <div className="min-h-full">
          <div className="h-full flex flex-col justify-between text-left space-y-8 py-10">
            <p className="text-4xl font-bri font-medium">
              20+
              <span className="block text-2xl font-light text-gray-400 font-outfit">
                Tech Partners
              </span>
            </p>
            <p className="text-4xl font-bri font-medium">
              150+
              <span className="block text-2xl font-light text-gray-400 font-outfit">
                Project Completed
              </span>
            </p>
            <p className="text-4xl font-bri font-medium">
              1K+
              <span className="block text-2xl font-light text-gray-400 font-outfit">
                Satisfied Customers
              </span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="/about/team.png"
            alt="Team"
            className="rounded-2xl object-cover w-full shadow-xl"
          />
        </div>

        {/* Features List */}
        <div className="space-y-6">
          {[
            {
              title: "Your Team in the cloud",
              desc: "We hire best and brightest talents to build world-class technology.",
            },
            {
              title: "Grow more with less",
              desc: "We have a competitive pricing structure.",
            },
            {
              title: "Weekly sprint and reviews",
              desc: "Our fast feedback loop keeps you in the driver’s seat.",
            },
            {
              title: "Communication First",
              desc: "We use modern tools and services to collaborate.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              {/* Outer circle */}
              <div className="size-10 aspect-square shrink-0 rounded-full bg-[#27B4A3] flex items-center justify-center">
                {/* Inner circle */}
                <div className="size-6 aspect-square shrink-0 rounded-full bg-white flex items-center justify-center text-[#436255] text-xs font-semibold leading-none">
                  {i + 1}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black font-bri">
                  {item.title}
                </h4>
                <p className="text-sm font-outfit text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
