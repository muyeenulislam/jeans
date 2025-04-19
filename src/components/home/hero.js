"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../buttons/primary-button";
import useScreenSize from "../../utils/usescreensize";

const Hero = () => {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="flex flex-col justify-between px-[1.25rem] pt-[2rem] pb-[4rem] lg:py-[8rem] lg:pl-[12.5rem] lg:pr-[4rem] w-full lg:w-1/2">
        <div className="flex flex-col gap-[0.75rem] lg:gap-[2rem] family-glook">
          <h1 className="text-primary text-[3rem] lg:text-[5.5rem] text-center lg:text-left">
            CEO In Jeans
          </h1>
          <h2 className="text-secondary text-[1.5rem] lg:text-[2.5rem] text-center lg:text-left pb-[2rem] lg:pb-[4rem]">
            The Leadership Blueprint for the Modern Executive
          </h2>
        </div>
        <div className="flex flex-col gap-[0.5rem] lg:gap-[1.5rem]">
          <p className="text-primary text-[1rem] lg:text-[1.5rem] text-center lg:text-left leading-[1.35rem] lg:leading-[2rem]">
            Launching Soon – Be the First to Read It
          </p>
          <Link href={"#"} className="w-full">
            <PrimaryButton
              text="Coming Soon - Order Now"
              icon="/images/amazon.svg"
            />
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-[linear-gradient(0deg, #FFF 0%, rgba(241, 243, 246, 0.00) 48.4%)]">
        <Image
          src={
            screenSize?.width > 1024
              ? "/images/hero-image.svg"
              : "/images/hero-image-mobile.svg"
          }
          alt="hero banner"
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
