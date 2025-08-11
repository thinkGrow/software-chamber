import Marquee from "react-fast-marquee";
import Span from "../span/Span";

const industries = [
  { title: "Tech", img: "/industries/tech.png" },
  { title: "Health Care", img: "/industries/healthcare.png" },
  { title: "Developers", img: "/industries/developers.png" },
  { title: "Software", img: "/industries/software.png" },
  { title: "Entertainment", img: "/industries/entertainment.png" },
  { title: "Hospitality", img: "/industries/hospitality.png" },
  { title: "Energy", img: "/industries/energy.png" },
  { title: "Auto Motion", img: "/industries/automotive.png" },
  { title: "Agriculture", img: "/industries/agriculture.png" },
];

const Industry = () => {
  return (
    <section className="bg-black pb-30 overflow-hidden">
      {/* Heading */}
      <div className="w-11/12 mx-auto flex justify-center mb-10">
        <Span></Span>
      </div>

      {/* Row 1 */}
      <Marquee gradient={false} speed={70}>
        <div className="flex items-center gap-10">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[150px] text-white"
            >
              <img
                src={industry.img}
                alt={industry.title}
                className="w-32 h-20 object-cover rounded-full shadow-md"
              />
              <p className="text-white text-sm font-semibold font-dm tracking-tight">
                {industry.title}
              </p>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Row 2 - offset and reverse direction */}
      <Marquee gradient={false} speed={100} direction="right">
        <div className="flex items-center gap-10 mt-14">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[150px] text-white"
            >
              <img
                src={industry.img}
                alt={industry.title}
                className="w-32 h-20 object-cover rounded-full shadow-md"
              />
              <p className="text-white text-sm font-semibold font-dm tracking-tight">
                {industry.title}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Industry;
