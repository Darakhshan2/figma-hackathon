import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Footer() {
  return (
    <div className="mt-12">
      <div className="bg-black text-white divide-y divide-gray-600">
        {/* Main Content */}
        <div className="flex flex-wrap justify-between px-6 py-12 space-y-8 md:space-y-0">
          {/* Exclusive Section */}
          <div className="w-full md:w-1/5">
            <h3 className="text-2xl font-bold pb-5">Exclusive</h3>
            <ul className="flex flex-col gap-3">
              <li>Subscribe</li>
              <li>Get 10% off your first order</li>
              <button className="text-start bg-gray-800 py-2 px-3 rounded-lg mt-3">
                Enter your email
              </button>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl pb-5">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>ABC Road, Karachi, Pakistan</li>
              <li>exclusive@gmail.com</li>
              <li>+92 123 4556789</li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl pb-5">Account</h3>
            <ul className="flex flex-col gap-3">
              <li>My Account</li>
              <li>Login/Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl pb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl pb-5">Download App</h3>
            <p className="py-3">5% off with App Users Only</p>
            <div className="flex justify-center">
              <BsQrCode size={56} />
            </div>
            <div className="flex justify-center space-x-4 pt-3">
              <BiLogoFacebook size={28} />
              <FiTwitter size={28} />
              <FaInstagram size={28} />
              <RiLinkedinLine size={28} />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between items-center px-6 py-3 text-gray-600">
          {/* Copyright Text */}
          <div className="w-full md:w-auto text-center md:text-left">
            <FaRegCopyright className="inline-block" />
            <p className="inline-block ml-2">Copyright Rimel 2022. All rights reserved</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-auto mt-4 md:mt-0 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-3 text-3xl">
              <a
                href="https://github.com/Darakhshan2"
                target="blank"
                className="border-2 p-1 rounded-full hover:border-red-600"
              >
                <LuGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/darakhshan-junaid-5713b422b/"
                target="blank"
                className="border-2 p-1 rounded-full hover:border-red-600"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:darakhshanjunaid2@gmail.com"
                target="blank"
                className="border-2 p-1 rounded-full hover:border-red-600"
              >
                <MdOutlineMarkEmailRead />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
