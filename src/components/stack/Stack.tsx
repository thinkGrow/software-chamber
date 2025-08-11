import Pills from "./Pills";

const Stack = () => {
  return (
    <section className="relative bg-[#0E0E0E] py-20 overflow-x-clip isolate">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-0 top-1/4 w-[44vw] h-[44vw] -translate-x-1/3 -translate-y-1/3 
                    rounded-full bg-[#00FFE0]/10 blur-[120px]"
        />
        <div
          className="absolute right-10 top-10 w-[28vw] h-[28vw] 
                    rounded-full bg-[#00FFE0]/10 blur-[120px]"
        />
      </div>

      <div className="relative w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-center gap-12">
        {/* Left text */}
        <div className="text-white">
          <h2 className="font-bri font-medium leading-tight text-[clamp(28px,6vw,64px)]">
            Our Stack Powers of
          </h2>
          <h2 className="font-bri font-medium leading-tight text-[clamp(28px,6vw,64px)] mt-1">
            the{" "}
            <span className="bg-gradient-to-b from-[#00FFE0] to-white bg-clip-text text-transparent">
              World’s Most
            </span>
          </h2>
          <h2 className="font-bri font-medium leading-tight text-[clamp(28px,6vw,64px)] text-gray-400 mt-1">
            Beloved Companies
          </h2>
        </div>

        {/* Right pills */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Row 1 */}
          <div className="flex gap-6 translate-x-30">
            <Pills
              label="Spotify"
              icon="spotify.png"
              className="min-w-[220px]"
            />
            <Pills
              label="TalentQI"
              icon="talentqi.png"
              className="min-w-[220px]"
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 md:translate-x-8">
            <Pills
              label="DropBox"
              icon="dropbox.png"
              className="min-w-[240px]"
            />
            <Pills
              label="FliqPay"
              icon="fliqpay.png"
              className="min-w-[220px]"
            />
          </div>

          {/* Row 3 */}
          <div className="flex justify-start translate-x-38">
            <Pills label="Slack" icon="slack.png" className="min-w-[240px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
