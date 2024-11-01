import React, { useState } from "react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <footer id="footer" className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            Our mission is to connect families with child-friendly centers,
            activities, and resources for a safe, enjoyable experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#features"
                onClick={() => setActiveSection("features")}
                className={`text-gray-400 hover:text-white ${
                  activeSection === "features" ? "active-link" : ""
                }`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setActiveSection("about")}
                className={`text-gray-400 hover:text-white ${
                  activeSection === "about" ? "active-link" : ""
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#footer"
                onClick={() => setActiveSection("contact")}
                className={`text-gray-400 hover:text-white ${
                  activeSection === "contact" ? "active-link" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates on new features, events, and child-friendly
            locations.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <p className="text-gray-400 mb-4">Connect with us on social media.</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} FunNest. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="hover:text-white">
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
