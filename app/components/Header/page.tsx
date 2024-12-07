import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <>
      <div className="bg-black text-white relative">
        {/* The entire banner area */}
        <div className="flex justify-between items-center h-11 px-4 sm:px-8 md:px-12">
          
          {/* Summer sale message */}
          <span className="absolute left-0 text-center w-full sm:text-sm md:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%{" "}
            <a href="#" className="underline">
              Shop Now
            </a>
          </span>

          {/* Language selection (with arrow dropdown) */}
          <span className="absolute right-4 flex items-center gap-1 text-sm">
            English
            <IoIosArrowDown className="text-xl" />
          </span>
        </div>
      </div>
    </>
  );
}
