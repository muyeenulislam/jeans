import React from "react";
import Image from "next/image";

import PrimaryButton from "../buttons/primary-button";

const Footer = () => {
  return (
    <div className="bg-primary text-white pt-[2rem] md:pt-[4rem] pb-[8rem] md:pb-[8rem]">
      <Image
        src="/images/footer-image.jpeg"
        alt="footer"
        width={2660}
        height={1440}
        className="h-full w-full"
      />
      <div className="flex items-stretch gap-[1rem] md:gap-[3rem] flex-col px-[1.25rem] md:px-[12.5rem]">
        <p className="text-[1rem] md:text-[1.5rem] leading-[1.375rem] md:leading-[2rem] text-center md:text-left">
          Be the First to Get My Upcoming Leadership Playbook
        </p>
        <PrimaryButton
          text="Coming Soon - Order Now"
          icon="/images/amazon.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
