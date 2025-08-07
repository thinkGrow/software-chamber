// import React from 'react';

const Stack = () => {
    return (
<section className="bg-[#0E0E0E] py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
    {/* Left Text */}
    <div className="text-left max-w-xl">
      <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
        Our Stack Powers of <br />
        the <span className="text-[#00FFE0]">World’s Most</span><br />
        <span className="text-gray-400">Beloved Companies</span>
      </h2>
    </div>

    {/* Right Pills */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Spotify", icon: "spotify.png" },
        { label: "TalentQI", icon: "talentqi.png" },
        { label: "DropBox", icon: "dropbox.png" },
        { label: "FliqPay", icon: "fliqpay.png" },
        { label: "Slack", icon: "slack.png" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-b from-[#00FFE0] to-[#008080] text-white shadow-lg"
        >
          <img src={`/stack/${item.icon}`} alt={item.label} className="w-5 h-5" />
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};

export default Stack;