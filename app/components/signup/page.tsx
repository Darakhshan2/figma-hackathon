import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function HeadBottom() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center md:justify-start h-full bg-white">
        {/* Side Image */}
        <img
          className="w-full md:w-2/5 max-h-96 object-contain mt-6 md:mt-12"
          src="/SideImage.jpg"
          alt="Side Illustration"
        />

        {/* Form Section */}
        <div className="w-full md:w-2/5 text-center md:text-left px-6 md:ml-10 md:pt-8">
          <h1 className="text-3xl md:text-4xl font-bold">Create an account</h1>

          <p className="font-light mt-4 md:mt-7">
            Enter your details below
          </p>

          {/* Form Inputs */}
          <div className="mt-6">
            <input
              type="text"
              className="block w-full md:w-72 border-b-2 focus:outline-none py-2"
              placeholder="Name:"
            />
            <input
              type="text"
              className="block w-full md:w-72 border-b-2 focus:outline-none mt-6 py-2"
              placeholder="Email or Phone Number:"
            />
            <input
              type="password"
              className="block w-full md:w-72 border-b-2 focus:outline-none mt-6 py-2"
              placeholder="Password:"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full md:w-2/5 bg-red-600 text-white py-2 mt-8 transition duration-300 ease-in-out hover:bg-gray-800">
            Create Account
          </button>

          {/* Sign Up with Google */}
          <div className="flex mt-6">
            <button className="flex items-center justify-center w-full md:w-2/5 border-2 p-2 bg-white text-black hover:bg-gray-200 transition duration-300 ease-in-out">
              <FcGoogle className="mr-2 text-2xl" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
