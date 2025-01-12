import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiLine } from "react-icons/si";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-4 shadow-2xl rounded-full backdrop-blur-lg z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/images/453831165_122157433856148517_5302819023832236663_n.jpg"
            alt="Mobile Concept Logo"
            className="w-10 h-10 rounded-full shadow-md border-2 border-white"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              Mobile Concept
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-white hover:text-gray-200 font-medium transition-colors"
          >
            หน้าแรก
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 font-medium transition-colors"
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-200 font-medium transition-colors"
          >
            บริการ
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 font-medium transition-colors"
          >
            ติดต่อ
          </Link>
        </nav>

        {/* Social Icons for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61554455525393"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 text-2xl transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mobileconceptth/?fbclid=IwY2xjawHveytleHRuA2FlbQIxMAABHRJ8sKFD9MLL3uJUF1eaoIVIK6GCizrycYuCsGXAqbEW1EP4RWuM1JlHRw_aem_zJ3n6iaUTd_sYpni04OFcA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 text-2xl transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://lin.ee/jRtdduS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 text-2xl transition-colors"
          >
            <SiLine />
          </a>
          <a
            href="tel:+66816322663"
            className="text-white hover:text-gray-200 text-2xl transition-colors"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-lg shadow-md p-4">
          <nav className="flex flex-col items-start gap-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 font-medium transition-colors"
            >
              หน้าแรก
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 font-medium transition-colors"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 font-medium transition-colors"
            >
              บริการ
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 font-medium transition-colors"
            >
              ติดต่อ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;