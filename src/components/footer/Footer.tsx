const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 relative overflow-hidden">
      <div className="mx-auto w-11/12 px-6">
        {/* Header */}
        <h1 className="text-7xl font-bri font-semibold leading-28 text-balance mb-16">
          LET'S TALK
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-between items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <p className="text-[#A6A6A6] max-w-md font-outfit leading-8 text-2xl mb-14">
              A new era of energy, elegance, and elite competition begins here.
              Where passion meets performance on the court like never before.
            </p>

            {/* Social media */}
            <div>
              <h3 className="uppercase font-semibold font-bri text-2xl mb-6">
                Social media
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-gray-300 font-outfit font-medium text-xl">
                <a href="#">
                  Instagram <span className="ml-2"> ↗</span>
                </a>
                <a href="#">
                  Twitter <span className="ml-2"> ↗</span>
                </a>
                <a href="#">
                  Tiktok <span className="ml-2"> ↗</span>
                </a>
                <a href="#">
                  Facebook <span className="ml-2"> ↗</span>
                </a>
                <a href="#">
                  LinkedIn <span className="ml-2"> ↗</span>
                </a>
                <a href="#">
                  Youtube <span className="ml-2"> ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="space-y-6">
            <div>
              <h3 className="uppercase text-2xl font-bri font-semibold mb-4">
                Address
              </h3>
              <p className="text-gray-400 font-outfit text-2xl w-2/3 text-balance mb-10">
                1901 Thornridge Cir, Shiloh, Hawaii 81063
              </p>
            </div>
            <div>
              <h3 className="uppercase text-2xl font-bri font-semibold mb-4">
                Phone
              </h3>
              <p className="text-gray-400 font-outfit text-2xl w-2/3 text-balance mb-10">
                +1 872-298-3989
              </p>
            </div>
            <div>
              <h3 className="uppercase text-2xl font-bri font-semibold mb-4">
                Email
              </h3>
              <p className="text-gray-400 font-outfit text-2xl w-2/3 text-balance mb-10">
                hello@tranzit.com
              </p>
            </div>
          </div>

          {/* Image (capped height so it doesn't make the row taller) */}
          <div className="self-start overflow-hidden rounded-[16px]">
            <img
              src="footer/hero.png"
              alt="Team"
              className="w-full h-auto object-cover max-h-[380px] md:max-h-[460px] lg:max-h-[520px]"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mt-20 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>2024 Software Chamber All Right Reserved</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
