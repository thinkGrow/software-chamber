const Pills = ({ label, icon, className = "" }) => {
  return (
    <div
      className={[
        // Smaller for mobile, larger for md+
        "relative flex items-center gap-2 px-4 md:px-7 h-10 md:h-[74px]",
        "rounded-full bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA]/5",
        className,
      ].join(" ")}
    >
      {/* Icon */}
      <div className="grid place-items-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
        <img
          src={`/stack/${icon}`}
          alt={label}
          className="w-4 h-4 md:w-6 md:h-6"
        />
      </div>

      {/* Label */}
      <span className="text-white/95 font-medium tracking-tight text-sm md:text-base font-outfit">
        {label}
      </span>

      {/* Subtle highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(to_top,transparent,rgba(255,255,255,0.18)_35%,transparent_70%)]" />
    </div>
  );
};

export default Pills;