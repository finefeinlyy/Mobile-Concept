import React from 'react';
import { FaFacebook, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Copyright */}
        <p className="mb-4">© 2025 Mobile Concept. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61554455525393"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-75"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="tel:+66816322663"
            className="text-white hover:opacity-75"
          >
            <FaPhoneAlt size={24} />
          </a>
          <a
            href="mailto:mconceptth@gmail.com"
            className="text-white hover:opacity-75"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://lin.ee/jRtdduS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-75"
          >
            <SiLine size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;