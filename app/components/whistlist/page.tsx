import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

export default function WhistList() {
  return (
    <div className="m-24">
      <div className="flex justify-between">
        <h1 className="text-3xl">WhistList</h1>
        <button className="border p-2">Move All To Bag</button>
      </div>

      <div className="flex">
        <div className="m-10 w-[290px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
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
            <div className="flex text-yellow-400 text-xl mt-1"></div>
            <span className=" text-sm text-gray-500">(44)</span>
          </div>
        </div>

        <div className=" m-10 w-[290px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
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
              <span className=" text-sm text-gray-500">(88)</span>
            </div>
          </div>
        </div>

        <div className="m-10 w-[290px] h-[350px] border-2 hover:rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
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
              <span className=" text-sm text-gray-500">(44)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between ">
        <h1 className="text-3xl">Just For You</h1>
        <button className="border w-32"> See All</button>
      </div >
      <div className="flex">
      <div className="m-10 w-[290px] h-[350px] border-2 rounded-lg shadow-xl hover:shadow-gray-500 hover:translate-x-1 hover:translate-y-1  ">
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
            <span className=" text-sm text-gray-500">(88)</span>
          </div>
        </div>
      </div>
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
            
              <span className=" text-sm text-gray-500">(90)</span>
            </div>
          </div>
        </div>

        </div>
    </div>
  );
}

