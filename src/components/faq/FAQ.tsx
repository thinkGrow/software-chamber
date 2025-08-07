import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section className="relative py-24 px-4 text-center w-11/12 mx-auto">
      {/* FAQ Title */}
      <div>
        <h1 className="text-7xl font-bri text-center text-balance">
          Comprehensive Answers to the <br />
          <span className="inline-block">
            <img src="stars.png" alt="stars" />
          </span>
          <span> Most Common Questions</span>
          <span className="text-gray-400">About Our Service</span>s and How We
          <span className="text-gray-400"> Work </span>
          <span className="inline-block">
            <img src="about/stock.png" alt="stock" />
          </span>
        </h1>
      </div>

      {/* Section Header */}
      <div className="flex justify-between items-center my-12 ">
        <h2 className="text-7xl font-bri text-black flex items-center gap-2">
          FAQ
        </h2>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
          <span className="text-sm font-medium">All FAQ</span>
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
      {/* Accordion */}
      <Accordion></Accordion>
    </section>
  );
};

export default FAQ;
