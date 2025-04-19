import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center md:gap-[9rem] sticky top-0 right-0 w-full transition-all duration-300 z-[1000] bg-white border-b border-b-gray-300">
      <div className="p-4 cursor-pointer">
        <Image
          src="./images/menu.svg"
          height={24}
          width={24}
          alt="menu"
          className="w-[1.5rem]"
        />
      </div>

      <Image
        src="./images/logo.svg"
        height={24}
        width={24}
        alt="menu"
        className="w-[8.597rem]"
      />
    </div>
  );
};

export default Navbar;
