"use client"
import { useState } from "react"
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
export default function HeaderTop() {
  const[menuOpen , setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (

    <div>

      <div className="flex justify-between pl-12  sm:pl-12 sm:pr-12 pr-12 pt-4 ">
        <h1 className="text-3xl font-    ">Exclusive</h1>

         {/* Hamburger Menu for small screens */}

        <div className="sm:hidden">
          <HiOutlineMenu
            className="text-3xl text-gray-600 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <nav className= {`space-x-8 mt-2  hidden sm:flex ${menuOpen ? "block" : "hidden"}`}>
          <a href="/components/recover">Home</a>
          <a href="/components/contact">Contact</a>
          <a href="/components/about">About</a>
          <a href="/components/signup">SignUp</a>
        </nav>

        <div className="flex relative space-x-4">
          <input
            type="text"
            placeholder="What are looking for "
            className="w-full sm:max-w-[300px] pl-12 border border-gray-300 rounded-lg focus:outline-none  focus:ring-2  focus:ring-blue-500"
          />
          <CiSearch className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <CiHeart className="text-4xl" />
          <a href="/components/whistlist">
          <MdOutlineShoppingCart className="text-3xl " /></a>
        </div>
      </div>
      <div className="border w-full bg-gray-600 mt-3 "></div>

    </div>
  )
}
