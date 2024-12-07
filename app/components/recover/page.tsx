import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { IoMdHeadset } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";

import { RiCustomerService2Line } from "react-icons/ri";

import { SiAdguard } from "react-icons/si";

import { BsSmartwatch } from "react-icons/bs";
export default function Recover() {
  return (
    <>
      <div className="flex">
        <div className="pt-10   w-[400px]  border-r border-gray-300">
          <ul className="space-y-4  pl-12 ">
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer transition duration-300">
              Woman's Fashion
              <IoChevronForwardOutline className="text-lg mr-9" />
            </li>
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer transition duration-300">
              Men's Fashion
              <IoChevronForwardOutline className="text-lg mr-9" />
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Electronics
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Home & Lifestyle
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Medicine
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Sports & Outdoors
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Baby's & Toys
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Groceries & Pets
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Health & Beauty
            </li>
          </ul>
        </div>

        <div className="border m-6 ml-10 w-[800px] h-[340px] flex bg-black ">
          <div className="border-red-500   text-white w-[400px] h-[200px] ">
            <div className=" mt-12 pl-16 flex align-middle">
              <FaApple className="text-5xl" />
              <h2 className=" mt-5 ml-3 text-xs">iPhone 14 Series</h2>
            </div>

            <div className="relative text-5xl pl-16 pt-7 space-y-4 tracking-[3px]">
              <h1>Up to 10%</h1>
              <h1>off Voucher</h1>
              <a
                href="#"
                className="group relative flex text-xl hover:text-gray-400 pt-9"
              >
                Shop Now <IoMdArrowForward className="mt-1 ml-3 text-2xl " />
                <span className="absolute bottom-0 left-0  block w-0 h-[2px] bg-gray-400  hover:underline-offset-4 transition-all  duration-300 group-hover:w-[114px]"></span>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[280px] w-full object-cover"
              src="/iphone.jpg"
              alt="iPhone"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="mt-14 ml-16">
        <h4 className="text-red-700 font-bold">Today's</h4>
        <div className="flex space-x-14">
          <h1 className="pt-12 text-4xl font-extrabold tracking-[4]">
            FLASH SALES
          </h1>

          <table className="table-auto  text-center mx-auto ">
            <thead>
              <tr className=" text-xl">
                <th className="px-4 py-2">Days</th>
                <th className="px-4 py-2 ">Hours</th>
                <th className="px-4 py-2 ">Minutes</th>
                <th className="px-4 py-2 ">Seconds</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-2xl text-center">
                <td className="px-4 py-2">03 :</td>
                <td className="px-4 py-2">23 :</td>
                <td className="px-4 py-2">14 :</td>
                <td className="px-4 py-2">55</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className=" mt-12 flex overflow-x-auto justify-between
"
      >
        <div className="m-2  w-[290px] h-[350px] border-2 rounded-lg  hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 611.jpg"
              alt=""
              className=" p-9 h-[250px] w-[290px] bg-slate-200"
            />
            <button className=" absolute top-1 left-2 rounded bg-red-800 text-white p-1">
              - 60%
            </button>
            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>HAVIT HV-G92 Gamepad</h2>
            <p className="inline-block mr-8 text-red-600">$120</p>{" "}
            <p className="inline-block text-gray-500 line-through">$160</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="m-2 w-[290px] h-[350px] border-2 rounded-lg hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 612.jpg"
              alt=""
              className=" p-9 h-[250px] w-[290px] bg-slate-200"
            />
            <button className=" absolute top-1 left-2 rounded bg-red-800 text-white p-1">
              - 40%
            </button>
            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>AK-900 Wired Keyboard</h2>
            <p className="inline-block mr-8 text-red-600">$220</p>{" "}
            <p className="inline-block text-gray-500 line-through">$500</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(88)</span>
            </div>
          </div>
        </div>
        {/* 3rd */}

        <div className="m-2 w-[290px] h-[350px] border-2 rounded-lg  hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 613.jpg"
              alt=""
              className=" p-9 h-[250px] w-[290px] bg-slate-200"
            />
            <button className=" absolute top-1 left-2 rounded bg-red-800 text-white p-1">
              - 30%
            </button>
            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>IPS LCD Gaming Monitor</h2>
            <p className="inline-block mr-8 text-red-600">$200</p>{" "}
            <p className="inline-block text-gray-500 line-through">$440</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(44)</span>
            </div>
          </div>
        </div>
        <div className="m-2 w-[290px] h-[350px] border-2 rounded-lg hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 616.jpg"
              alt=""
              className=" p-9 h-[250px] w-[290px] bg-slate-200"
            />
            <button className=" absolute top-1 left-2 rounded bg-red-800 text-white p-1">
              - 40%
            </button>
            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>AK-900 Wired Keyboard</h2>
            <p className="inline-block mr-8 text-red-600">$220</p>{" "}
            <p className="inline-block text-gray-500 line-through">$500</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(88)</span>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-red-400 w-[200px] text-white p-4 mb-2 mt-3 rounded-lg relative left-[45%]">
        View All Products
      </button>

      <div className="w-[1220px] mt-12 mb-3 bg-slate-500 border ml-16 mr-2"></div>

      <div className="mt-12 ml-20">
        <h4 className="text-red-700 font-bold">Categories</h4>
        <div className="flex">
          <h1 className="pt-12 text-4xl font-extrabold tracking-[4]">
            Browse By Category
          </h1>
        </div>
        <div className="h-[150px] w-[1268px]  mt-8  mb-2 space-x-[20px] flex">
          <div className="h-[150px] w-[190px] border p-1">
            <CiMobile4 className="text-8xl ml-10" />
            <h2 className="text-center mt-3 text-2xl ">Phone</h2>
          </div>
          <div className="h-[150px] w-[190px] border p-1">
            <RiComputerLine className="text-8xl ml-8" />
            <h2 className="text-center mt-3 text-2xl ">Computers</h2>
          </div>
          <div className="h-[150px] w-[190px] border p-1">
            <BsSmartwatch className="text-8xl ml-8" />
            <h2 className="text-center mt-3 text-2xl ">Smart Watch</h2>
          </div>
          <div className="h-[150px] w-[190px] border p-1">
            <IoCameraOutline className="text-8xl ml-8" />
            <h2 className="text-center mt-3 text-2xl ">Camera</h2>
          </div>
          <div className="h-[150px] w-[190px] border p-1">
            <IoMdHeadset className="text-8xl ml-8" />
            <h2 className="text-center mt-3 text-2xl ">HeadPhones</h2>
          </div>
          <div className="h-[150px] w-[190px] border p-1">
            <SiYoutubegaming className="text-8xl ml-8" />
            <h2 className="text-center mt-3 text-2xl ">Gaming</h2>
          </div>
        </div>
      </div>

      <div className="w-[1220px] mt-16 mb-3 bg-slate-500 border ml-16 mr-2"></div>

      <h4 className="text-red-700  mt-12 font-bold ml-16">This Month </h4>
      <h1 className="text-black text-5xl font-bold ml-16 mt-3 ">
        Our Best Sales
      </h1>
      <div className="flex">
        <div className=" flex overflow-x-auto justify-between">
          <div className="m-14 w-[290px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
            <div className="flex relative">
              <img
                src="/jacket.jpg"
                alt=""
                className=" p-9 h-[250px] w-[290px] bg-slate-200"
              />

              <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
                <CiHeart className=" rounded-full p-1 bg-white " />
                <IoEyeOutline className="  rounded-full p-1 bg-white " />
              </div>
            </div>

            <div className="mt-2 pl-1 space-y-1">
              <h2>The North Coat</h2>
              <p className="inline-block mr-8 text-red-600">$260</p>{" "}
              <p className="inline-block text-gray-500 line-through">$360</p>
              <div className="flex text-yellow-400 text-xl mt-1">
                {" "}
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />{" "}
                <span className=" text-sm text-gray-500">(90)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-12 w-[290px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/bag.jpg"
              alt=""
              className=" p-9 h-[250px] w-[290px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Gucci Bag</h2>
            <p className="inline-block mr-8 text-red-600">$460</p>{" "}
            <p className="inline-block text-gray-500 line-through">$760</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
        <div className="m-14 w-[290px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/speaker.jpg"
              alt=""
              className=" p-9 h-[250px] w-[290px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>RGB liquid CPU Cooler</h2>
            <p className="inline-block mr-8 text-red-600">$860</p>{" "}
            <p className="inline-block text-gray-500 line-through">$1360</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-20">
        <img src="/Frame 600.jpg" alt="" />
      </div>

      <div className="mt-12 ml-16">
        <h4 className="text-red-700 font-bold">Our Produts</h4>
        <h1 className="pt-12 text-4xl font-extrabold tracking-[4]">
          Explore Our Products
        </h1>
      </div>

      <div className="flex">
        <div className="m-10  w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 604.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>The Dog food</h2>
            <p className="inline-block mr-8 text-red-600">$1320</p>{" "}
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>

        <div className="m-10 w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/camera.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Camera DSLR</h2>
            <p className="inline-block mr-8 text-red-600">$1720</p>{" "}
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>

        <div className="m-10 w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/iped.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Gaming Ipad</h2>
            <p className="inline-block mr-8 text-red-600">$1520</p>{" "}
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
        <div className="m-10 w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/shoes.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Jr. Zoom Soccer Cleats</h2>
            <p className="inline-block mr-8 text-red-600">$2120</p>{" "}
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-10  w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/kids.jpg"
              alt=""
              className=" p-12 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Kids Electric Car</h2>
            <p className="inline-block mr-8 text-red-600">$540</p>{" "}
            <p className="inline-block text-gray-500 line-through">$960</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>

        <div className="m-10 w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/denim.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Quilted Satin Jacket</h2>
            <p className="inline-block mr-8 text-red-600">$9920</p>{" "}
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>

        <div className="m-10 w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 614.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>Comfort Chair</h2>
            <p className="inline-block mr-8 text-red-600">$1220</p>{" "}
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
        <div className="m-10 w-[270px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
          <div className="flex relative">
            <img
              src="/Frame 608.jpg"
              alt=""
              className=" p-9 h-[250px] w-[270px] bg-slate-200"
            />

            <div className="absolute  right-1  top-5  space-y-2 text-4xl ">
              <CiHeart className=" rounded-full p-1 bg-white " />
              <IoEyeOutline className="  rounded-full p-1 bg-white " />
            </div>
          </div>

          <div className="mt-2 pl-1 space-y-1">
            <h2>GP11 Shooter USB Gamepad</h2>
            <p className="inline-block mr-8 text-red-600">$520</p>
            <div className="flex text-yellow-400 text-xl mt-1">
              {" "}
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />{" "}
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-red-400 text-white p-3 mb-2 rounded-lg relative left-[50%]">
        View All Products
      </button>

      <div className=" mt-10 ml-20">
        <h4 className="text-red-700 font-bold">Featured</h4>
        <h1 className="pt-12 text-4xl font-extrabold tracking-[4]">
          New Arrival's
        </h1>
        <div className="flex space-x-3 mt-12">
          <img src="/main.jpg" alt="" />
          <div className="">
            <img src="/Frame 685.jpg" className="w-[560px] h-[345px]" alt="" />
            <div className="flex mt-4 space-x-4">
              <img src="/Frame 686.jpg" alt="" />
              <img src="/Frame 687.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex mt-14 justify-center space-x-10  w-full ">
        <div className="h-44 w-56 border-2 rounded-md text-center font-sans shadow-lg hover:shadow-slate-400 hover:shadow-2xl ">
          <FaShippingFast className=" ml-16 mt-5 text-7xl border-4  border-black rounded-full p-2 " />
          <p className="mt-7 text-xl">Free and fast Delivery</p>
        </div>
        <div className="h-44 w-60 border-2 shadow-lg hover:shadow-slate-400 hover:shadow-2xl rounded-md border-grey-300">
          <RiCustomerService2Line className="  ml-20 mt-5 text-7xl border-4  border-black rounded-full p-2 " />
          <p className="mt-7 pl-2 text-xl">24/7 Customer Service</p>
        </div>
        <div className="h-44 w-56 border-2 shadow-lg hover:shadow-slate-400 hover:shadow-2xl rounded-md ">
          <SiAdguard className=" ml-16 mt-5 text-7xl border-4  border-black rounded-full p-2  " />
          <p className="mt-7 text-lg pl-3"> Money Back Guarentee</p>
        </div>
      </div>
    </>
  );
}
