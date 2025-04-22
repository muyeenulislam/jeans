"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import PrimaryButton from "../buttons/primary-button";
import WhiteButton from "../buttons/white-button";

const Vision = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full">
      <div className="flex flex-col justify-between gap-[2rem] px-[1.25rem] pt-[2rem] pb-[4rem] lg:py-[8rem] lg:pl-[12.5rem] lg:pr-[4rem] w-full lg:w-1/2">
        <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem] ">
          <h2 className="text-primary  text-[1rem] lg:text-[1.5rem] leading-[1.375rem] lg:leading-[2rem]">
            Transforming Industries Through Strategy, Innovation & Experience
          </h2>
          <h1 className="text-primary text-[2.125rem] lg:text-[3.75rem] family-glook">
            Emad Masoud
          </h1>
        </div>
        <div className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
          I don’t just consult, I build and scale world-class digital
          experiences.
          <br />
          <br />
          With over 19 years of experience in strategy, UX, and innovation, I
          help executives, founders, and boards drive business growth through
          product leadership and digital transformation.
          <br />
          <br />
          As President of EMENA-EIC and a board advisor, I focus on disrupting
          industries, scaling innovation, and shaping the future of digital
          leadership.
          <br />
          <br />
          Let’s discuss how I can bring strategic insight, innovation, and
          growth to your business.
        </div>
        <div className="flex flex-col gap-[0.5rem] lg:gap-[1.5rem]">
          <div className="w-full flex flex-col lg:flex-row gap-[1rem]">
            <Link href={"/contact"} className="w-full">
              <PrimaryButton
                text="Drive Innovation with Me"
                icon="/images/arrow-right-white.svg"
              />
            </Link>
            <Link href={"/about"} className="w-full">
              <WhiteButton
                text="See My Vision for the Future"
                icon="/images/arrow-right-primary.svg"
              />
            </Link>
          </div>
          <p className="text-primary text-[1rem] lg:text-[1.5rem] text-center lg:text-left leading-[1.35rem] lg:leading-[2rem]">
            Follow for Exclusive Insights on Product Leadership & Business
            Growth{" "}
            <Link
              href={"https://www.linkedin.com/in/emad-m-65279714/"}
              className="underline font-bold"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          src={"/images/about-image.png"}
          alt="about"
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Vision;
