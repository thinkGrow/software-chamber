import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      q: "What software development services does your company offer?",
      a: 'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      q: "What industries do you specialize in?",
      a: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      q: "What sets your company apart from the competition?",
      a: 'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
    {
      q: "Is my project idea and information kept confidential?",
      a: 'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
  ];

  return (
    <div className="join join-vertical bg-base-100 w-full text-left">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="collapse join-item border-base-300 border-b py-5"
          >
            <input
              type="radio"
              name="my-accordion"
              checked={isOpen}
              onChange={() => setOpenIndex(i)}
            />
            <div className="collapse-title font-medium flex justify-between items-center cursor-pointer font-bri tracking-tighter leading-2 text-3xl pb-10">
              {item.q}

              {/* Different button for open/closed */}
              {isOpen ? (
                // open
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition font-outfit">
                  <div className="bg-[#2CCEBA] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 transition ml-2">
                    <img className="h-5 w-5" src="up.png" alt="" />
                  </div>
                </button>
              ) : (
                // closed
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition font-outfit">
                  <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-105 transition ml-2">
                    <img className="h-5 w-5" src="down.png" alt="" />
                  </div>
                </button>
              )}
            </div>
            <div className="collapse-content text-xl leading-2.5 tracking-tighter font-outfit">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
