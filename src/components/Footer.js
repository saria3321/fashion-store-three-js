import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaEllipsisH, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Share Buttons */}
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mb-8">
          <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <FaFacebook />
            <span>Share on Facebook</span>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <FaTwitter />
            <span>Share on Twitter</span>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <FaEnvelope />
            <span>Email</span>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <FaEllipsisH />
            <span>More</span>
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="https://www.google.com/">Help Centre</a></li>
              <li><a href="https://www.google.com/">Shipping & Delivery</a></li>
              <li><a href="https://www.google.com/">Returns & Refunds</a></li>
              <li><a href="https://www.google.com/">Customer Reviews</a></li>
              <li><a href="https://www.google.com/">Refer a Friend</a></li>
              <li><a href="/">Subscribe & Save</a></li>
              <li><a href="https://www.google.com/">Vouchers</a></li>
              <li><a href="https://www.google.com/">FAQs</a></li>
              <li><a href="https://www.google.com/">Affiliate Programme</a></li>
              <li><a href="https://www.google.com/">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="https://www.google.com/">About Us</a></li>
              <li><a href="https://www.google.com/">Viperfume Club</a></li>
              <li><a href="https://www.google.com/">Blog</a></li>
              <li><a href="https://www.google.com/">Clearpay</a></li>
              <li><a href="https://www.google.com/">Klarna</a></li>
              <li><a href="https://www.google.com/">Amazon Pay</a></li>
              <li><a href="https://www.google.com/">Fragrance Strengths & Types</a></li>
              <li><a href="https://www.google.com/">A-Z of Celebrity Scents</a></li>
              <li><a href="https://www.google.com/">Fragrance Map</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            <div className="mt-4 flex justify-center md:justify-start">
              <img src="/assets/images/images.jpeg" alt="Customer reviews" className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.google.com/" className="block">
                <FaApple className="text-4xl" />
                <span className="block text-sm">Download on the App Store</span>
              </a>
              <a href="https://www.google.com/" className="block">
                <FaGooglePlay className="text-4xl" />
                <span className="block text-sm">Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <FaFacebook className="text-xl cursor-pointer" />
          <FaTwitter className="text-xl cursor-pointer" />
          <FaWhatsapp className="text-xl cursor-pointer" />
          <FaEnvelope className="text-xl cursor-pointer" />
          <FaEllipsisH className="text-xl cursor-pointer" />
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Fashion Store | Terms | Privacy Policy | All Rights Reserved by Saria Irshad
        </div>
      </div>
    </footer>
  );
};

export default Footer;
