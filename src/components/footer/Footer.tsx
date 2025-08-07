const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      <div className="mx-auto w-11/12 px-6">
        {/* Header */}
        <h1 className="text-6xl font-bri text-balance mb-12">
          LET'S TALK
        </h1>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Side */}
          <div className="space-y-6">
            <p className="text-gray-400 max-w-md">
              A new era of energy, elegance, and elite competition begins here.
              Where passion meets performance on the court like never before.
            </p>

            {/* Social media */}
            <div>
              <h3 className="uppercase font-medium text-sm mb-3">
                Social media
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-gray-300 text-sm">
                <a href="#">Instagram ↗</a>
                <a href="#">Twitter ↗</a>
                <a href="#">Tiktok ↗</a>
                <a href="#">Facebook ↗</a>
                <a href="#">LinkedIn ↗</a>
                <a href="#">Youtube ↗</a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div>
              <h3 className="uppercase font-medium text-sm">Address</h3>
              <p className="text-gray-400">
                1901 Thornridge Cir, Shiloh, Hawaii 81063
              </p>
            </div>
            <div>
              <h3 className="uppercase font-medium text-sm">Phone</h3>
              <p className="text-gray-400">+1 872-298-3989</p>
            </div>
            <div>
              <h3 className="uppercase font-medium text-sm">Email</h3>
              <p className="text-gray-400">hello@tranzit.com</p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="footer/hero.png"
              alt="Team"
              className="rounded-[16px] w-full max-w-[200px] object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mt-20 mb-6" />

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
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
