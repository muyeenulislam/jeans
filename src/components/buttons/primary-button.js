import React from "react";
import Image from "next/image";

const PrimaryButton = ({ icon, text, ...rest }) => {
  return (
    <button
      className="flex justify-between items-center bg-primary border border-white p-[1.25rem] md:px-[1.25rem] w-full cursor-pointer text-white text-[1rem] md:text-[1.125rem] leading-[1.375rem] transition-all duration-200 ease-in-out hover:bg-primaryHover hover:scale-[1.015] active:scale-[0.97] active:bg-primary/80"
      {...rest}
    >
      <p>{text}</p>
      {icon && (
        <Image
          src={icon}
          height={24}
          width={24}
          className="aspect-square h-[1.5rem] w-[1.5rem]"
          alt="btn-icon"
        />
      )}
    </button>
  );
};

export default PrimaryButton;
