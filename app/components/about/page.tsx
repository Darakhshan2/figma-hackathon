import Image from "next/image";
import React from "react";

import { FaShippingFast } from "react-icons/fa";

import { RiCustomerService2Line } from "react-icons/ri";

import { SiAdguard } from "react-icons/si";


export default function About() {
  return (
    <>
<div className="bg-white pb-10 ">

      <div className="flex flex-col sm:flex-row bg-white">
        <div className="w-2/6 sm:w-2/6 sm:ml-12 px-6 sm:px-12 mt-28 ml-12 ">
          <h1 className="text-3xl sm:text-5xl p-3">Our Story</h1>
          <p className="leading-normal p-3 text-sm sm:text-base">
            Our Story Launced in 2015, Exclusive is South Asia's premier online
            shopping makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and service
            solutions,
            <br />
            <br />
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region. Exclusive has more than 1 Million
            products to offer, growing at a very fast. Exclusive offers a
            diverse assotment in categories ranging from consumer.
          </p>
        </div>

        <div className="mt-10 sm:mt-20 sm:ml-36">
          <Image src="/about.jpg" className="h-64 sm:h-96 mx-auto" alt="about" />
        </div>
      </div>
   
      <h1 className="mt-20 text-3xl sm:text-5xl text-center ">PROJECT PARTNER'S</h1>
      <div className="flex flex-wrap justify-center sm:mt-20 mt-10 space-x-6 sm:space-x-10 mb-9">
        {/* pro1 */}
        <div className="relative h-48 sm:h-56 w-48 sm:w-56 border-2 rounded-lg overflow-hidden group mb-4 sm:mb-0">
          <Image
            src="/div1.jpg"
            className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
            alt="Partner1"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-white p-4 block">
              Miss Alyana
              <br />
              Our Designer
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="relative h-48 sm:h-56 w-48 sm:w-56 border-2 rounded-lg overflow-hidden group mb-4 sm:mb-0">
          <Image
          alt="Partner2"
            src="/div2.jpg"
            className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-white p-4 block">
              Miss Charlotte
              <br />
              Project Manager
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="relative h-48 sm:h-56 w-48 sm:w-56 border-2 rounded-lg overflow-hidden group mb-4 sm:mb-0">
            <Image
            alt=""
              src="/div3.jpg"
              className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
              <p className="text-white p-4 block">
                Miss Alexa
                <br />
                Quality Assurance Tester
              </p>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="relative h-48 sm:h-56 w-48 sm:w-56 border-2 rounded-lg overflow-hidden group">
            <Image
            alt=""
              src="/div4.jpg"
              className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
              <p className="text-white p-4 block">
                Miss Scarlett
                <br />
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl text-center mt-24">OUR SERVICES</h1>
        <div className="flex flex-wrap justify-center sm:mt-14 mt-10 space-x-6 sm:space-x-10 w-full">
          {/* Service 1 */}
          <div className="h-44 w-56 sm:w-60 border-2 rounded-md text-center font-sans shadow-lg hover:shadow-slate-400 hover:shadow-2xl mb-6 sm:mb-0">
            <FaShippingFast className="ml-16 mt-5 text-5xl sm:text-7xl border-4 border-black rounded-full p-2" />
            <p className="mt-7 text-xl">Free and Fast Delivery</p>
          </div>

          {/* Service 2 */}
          <div className="h-44 w-56 sm:w-60 border-2 shadow-lg hover:shadow-slate-400 hover:shadow-2xl rounded-md mb-6 sm:mb-0">
            <RiCustomerService2Line className="ml-16 mt-5 text-5xl sm:text-7xl border-4 border-black rounded-full p-2" />
            <p className="mt-7 text-xl">24/7 Customer Service</p>
          </div>

          {/* Service 3 */}
          <div className="h-44 w-56 sm:w-60 border-2 shadow-lg hover:shadow-slate-400 hover:shadow-2xl rounded-md mb-6 sm:mb-0">
            <SiAdguard className="ml-16 mt-5 text-5xl sm:text-7xl border-4 border-black rounded-full p-2" />
            <p className="mt-7 text-lg sm:text-xl">Money Back Guarantee</p>
          </div>
        </div>
      </div>
    </>
  );
}