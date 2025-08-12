import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section className="relative w-11/12 mx-auto px-4 py-12 md:py-20 lg:py-24 text-center">
      {/* Title */}
      <h1 className="font-bri font-medium text-balance leading-tight pb-6 md:pb-8 lg:pb-10 text-3xl md:text-6xl lg:text-7xl">
        Comprehensive Answers to the{" "}
        <br className="hidden md:block" />
        <span className="inline-block align-middle mx-1">
          <img
            src="stars.png"
            alt="stars"
            className="h-[0.9em] md:h-[1em] w-auto"
          />
        </span>
        <span> Most Common Questions</span>
        <span className="text-gray-400"> About Our Service</span>s and How We
        <span className="text-gray-400"> Work </span>
        <span className="inline-block align-middle mx-1">
          <img
            src="about/stock.png"
            alt="stock"
            className="h-[0.9em] md:h-[1em] w-auto"
          />
        </span>
      </h1>

      {/* Section Header */}
      <div
        className="my-6 md:my-10 lg:my-12 pb-5 md:pb-8 lg:pb-10 border-b-4 border-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 text-left md:text-inherit"
        style={{
          // denser dashes on mobile so it still reads nicely
          borderImage:
            "repeating-linear-gradient(to right, gray 0, gray 14px, transparent 14px, transparent 28px) 30",
        }}
      >
        <h2 className="font-bri font-medium text-3xl md:text-6xl lg:text-7xl text-black">
          FAQ
        </h2>

        {/* Button: full width on mobile, pill on md+ */}
        <button className="w-full md:w-auto inline-flex items-center justify-between md:justify-center gap-3 bg-white text-black px-5 py-3 md:py-2 rounded-full hover:bg-gray-100 transition font-outfit">
          <span className="text-lg md:text-2xl font-medium tracking-tight">
            All FAQ
          </span>
          <span className="bg-[#2CCEBA] rounded-full w-10 h-10 md:w-10 md:h-10 grid place-items-center shrink-0">
            <img src="next.png" alt="" className="w-5 h-5 md:w-5 md:h-5" />
          </span>
        </button>
      </div>

      {/* Accordion */}
      <Accordion />
    </section>
  );
};

export default FAQ;
