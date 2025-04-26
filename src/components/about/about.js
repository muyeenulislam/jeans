"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../buttons/primary-button";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="flex flex-col gap-[2rem] lg:gap-[4rem] px-[1.25rem] pt-[2rem] pb-[4rem] lg:py-[8rem] lg:pl-[12.5rem] lg:pr-[4rem] w-full lg:w-1/2">
        <div className="flex flex-col gap-[0.75rem] lg:gap-[2rem] family-glook">
          <h1 className="text-primary text-[3rem] lg:text-[5.5rem] items-stretch uppercase leading-[3rem] lg:leading-[5.5rem] tracking-[0.11rem]">
            Emad Masoud-
          </h1>
          <h2 className="text-secondary text-[1.5rem] lg:text-[2.5rem]">
            The Unicorn Who Builds the Future of Product & Experience
          </h2>
        </div>
        <div className="w-full lg:hidden">
          <Image
            src={"/images/about-page-image.png"}
            alt="contact"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-[0.75rem] lg:gap-[1.5rem]">
          <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
            Emad Masoud doesn’t just build products—he architects the future of
            business through innovation, experience, and technology. As a board
            advisor, product visionary, and digital transformation leader, he
            turns complex ideas into scalable, industry-defining ecosystems.
          </p>
          <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
            He drives strategic innovation by scaling AI, data, and digital
            experience platforms that transform industries. With a deep focus on
            product strategy, UX, and enterprise growth, he helps organizations
            navigate disruption, implement cutting-edge technology, and build
            scalable ecosystems that fuel long-term success.
          </p>
          <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
            As a product strategist, board advisor, thought leader, and digital
            transformation expert, Emad collaborates with executives and
            founders to bridge the gap between technology, business, and
            customer experience—turning complex challenges into competitive
            advantages.
          </p>
          <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
            As President of EMENA-EIC, a board advisor, and an industry thought
            leader, he continues to drive business growth through experience-led
            innovation.
          </p>
        </div>
        <div className="flex flex-col gap-[0.5rem] lg:gap-[1.5rem]">
          <p className="text-primary text-[1rem] lg:text-[1.5rem] leading-[1.35rem] lg:leading-[2rem]">
            Let’s Build the Future Together:
          </p>
          <Link href={"/contact"} className="w-full" id="top-section">
            <PrimaryButton
              text="Scaling Innovation? Let’s Talk"
              icon="/images/arrow-right-white.svg"
            />
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 hidden lg:block">
        <Image
          src={"/images/about-page-image.webp"}
          alt="hero banner"
          height={1400}
          width={900}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
