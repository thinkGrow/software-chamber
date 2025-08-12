import React, { useState } from "react";

type AccordionItem = {
  q: string;
  a: string;
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items: AccordionItem[] = [
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

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <div className="w-full text-left">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="border-b border-base-300 py-4 md:py-6">
            {/* HEADER */}
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${i}`}
              className="w-full flex items-start justify-between gap-3 text-left"
            >
              {/* Title */}
              <div
                className="
                  min-w-0 flex-1 break-words whitespace-normal
                  font-bri tracking-tight
                  text-[clamp(18px,4.8vw,24px)]
                  leading-[1.2]
                "
              >
                {item.q}
              </div>

              {/* Custom arrow button */}
              <span className="shrink-0 flex items-center gap-2 bg-white text-black px-3 md:px-4 py-2 rounded-full hover:bg-gray-100 transition font-outfit">
                <span
                  className={`${
                    isOpen ? "bg-[#2CCEBA]" : "bg-black"
                  } rounded-full w-9 h-9 md:w-10 md:h-10 grid place-items-center transition`}
                >
                  <img
                    src={isOpen ? "up.png" : "down.png"}
                    alt={isOpen ? "Collapse" : "Expand"}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                </span>
              </span>
            </button>

            {/* BODY */}
            <div
              id={`acc-panel-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="font-outfit text-black/70 text-[clamp(14px,4vw,18px)] leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
