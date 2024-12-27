import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      {/* Main Footer Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>Contact</li>
            <li>Returns & Exchanges</li>
            <li>Help Center</li>
            <li>Brexit Info</li>
          </ul>
        </div>
        {/* More Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">More</h3>
          <ul className="space-y-2">
            <li>Share The Look</li>
            <li>About Us</li>
            <li>Alphaland</li>
            <li>Summer Shredding</li>
          </ul>
        </div>
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p>
            13927 South Gessner Road, <br />
            Missouri City Texas 77489, <br />
            United States
          </p>
        </div>
        {/* Stay Connected */}
        <div >
          <h3 className="text-lg font-semibold mb-4 ">Stay Connected</h3>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full bg-gray-800 text-sm text-white px-4 py-2 mb-4 rounded"
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full bg-gray-800 text-sm text-white px-4 py-2 mb-4 rounded"
          />
          <button className="bg-gray-600 w-full py-2 rounded hover:bg-gray-700">
            Subscribe
          </button>
          <p className="text-xs mt-4">
            By signing up via text, you agree to receive recurring automated
            marketing messages and shopping cart reminders. Msg frequency
            varies. Msg & Data rates may apply. View <span className="underline">Privacy Policy</span> &{" "}
            <span className="underline">ToS</span>.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>
          &copy; 2024 &bull; Alphalete Athletics UK LLC &bull; All Rights Reserved
        </p>
        <ul className="flex space-x-4">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Sitemap</li>
          <li>Accessibility</li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
