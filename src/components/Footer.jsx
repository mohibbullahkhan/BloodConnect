import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // You'll need to install react-icons
import { BiDonateBlood } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: CTA and Donate button */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <BiDonateBlood size={80} />

          <div className="flex items-center justify-between gap-5">
            <p className="text-xl font-semibold mb-4 md:mb-0">
              Ready to get started?
            </p>
            <button className="bg-white text-[#1e293b] font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-100 transition duration-300">
              Donate
            </button>
          </div>
        </div>

        {/* Main Content Section: Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Newsletter Signup */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input type="email" placeholder="mail@site.com" required />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>
                </div>
                <button className="btn btn-neutral join-item">Subscribe</button>
              </div>
            </form>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/email-marketing"
                  className="hover:text-white transition"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-white transition">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/branding" className="hover:text-white transition">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/offline" className="hover:text-white transition">
                  Offline
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/our-story" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="hover:text-white transition">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/faqs" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal Links and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
