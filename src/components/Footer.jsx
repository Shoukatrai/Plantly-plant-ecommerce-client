import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* UPPER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ABOUT */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Plant Haven</h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Plant Haven is your one-stop destination for indoor and outdoor
              plants, helping you bring nature closer to your home and
              workspace.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Email: support@planthaven.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Green Street, Plant City</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-green-600 pt-6">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Plant Haven. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
