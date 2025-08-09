import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section className="relative py-24 px-4 text-center w-11/12 mx-auto mb-10">
      {/* FAQ Title */}
      <div>
        <h1 className="text-7xl font-bri text-center text-balance font-medium pb-10">
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
      <div
        className="flex justify-between items-center my-12 border-b-4 border-transparent pb-10"
        style={{
          borderImage:
            "repeating-linear-gradient(to right, gray 0, gray 20px, transparent 20px, transparent 40px) 30",
        }}
      >
        <div>
          <h2 className="text-7xl font-bri text-black flex items-center gap-2 font-medium">
            FAQ
          </h2>
        </div>

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition font-outfit">
          <span className="text-2xl font-medium tracking-tighter">All FAQ</span>

          <div className="bg-[#2CCEBA] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 transition ml-2">
            <img className="h-5 w-5" src="next.png" alt="" />
          </div>
        </button>
      </div>
      {/* Accordion */}
      <Accordion></Accordion>
    </section>
  );
};

export default FAQ;
