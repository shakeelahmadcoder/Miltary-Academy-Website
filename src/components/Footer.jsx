import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-gray-300 py-10 px-4 sm:px-6 md:px-14 mx-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="#" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </Link>
            <Link to="#" aria-label="Google">
              <FaGoogle className="text-2xl hover:text-red-500" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Information</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Address: 123 Military Academy Road, City, State</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@militaryacademy.com</p>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          Military Academy © 2024.{" "}
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
