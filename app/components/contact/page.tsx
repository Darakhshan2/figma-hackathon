import React from "react";
import { IoCall } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

export default function Contact() {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-wrap items-start justify-center">
        {/* Contact Info Card */}
        <div className="bg-white w-full md:w-1/3 p-4 border-2 shadow-lg m-4">
          <div className="flex flex-col items-center text-center">
            {/* Call to Us Section */}
            <div className="flex items-center justify-center text-2xl mb-4">
              <IoCall className="mr-2" />
              <h1>Call To Us</h1>
            </div>
            <div className="text-gray-600 mb-6">
              <p>We are available 24/7, 7 days a week.</p>
              <p className="font-medium mt-2">Phone: +2355465566765</p>
            </div>
            <div className="w-full border-t-2 border-gray-300"></div>

            {/* Write to Us Section */}
            <div className="flex items-center justify-center text-2xl mt-6 mb-4">
              <TfiWrite className="mr-2" />
              <h1>Write to Us</h1>
            </div>
            <div className="text-gray-600">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-4">Email: customer@exclusive.com</p>
              <p>Email: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-4 border-2 shadow-lg bg-white m-4">
          <div className="flex flex-wrap gap-4 p-4">
            <input
              type="text"
              className="flex-grow bg-gray-200 focus:outline-none p-2 rounded-md"
              placeholder="Your Name*"
            />
            <input
              type="email"
              className="flex-grow bg-gray-200 focus:outline-none p-2 rounded-md"
              placeholder="Your Email*"
            />
            <input
              type="tel"
              className="flex-grow bg-gray-200 focus:outline-none p-2 rounded-md"
              placeholder="Your Phone*"
            />
          </div>
          <div className="px-4 py-2">
            <textarea
              className="w-full h-40 bg-gray-200 focus:outline-none p-2 rounded-md"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-end px-4">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
