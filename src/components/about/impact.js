import React from "react";

import AboutSwiper from "../slider/aboutswiper";
import AboutSlider from "../slider/aboutslider";

const Impact = () => {
  const points = [
    {
      icon: "/images/idea.svg",
      title: "Visionary Product Leadership",
      subpoints: [
        {
          title: "From Strategy to Execution",
          subTitle:
            "Crafting scalable digital experiences that drive revenue growth.",
          paddingRight: true,
        },
        {
          title: "Aligning UX & Business Goals",
          subTitle: "Bridging product innovation with C-suite objectives.",
          border: true,
          paddingLeft: true,
          paddingRight: true,
        },
        {
          title: "Building Industry-Defining Platforms",
          subTitle: "Leading the development of global enterprise solutions.",
          border: true,
          paddingLeft: true,
        },
      ],
    },
    {
      icon: "/images/database-sync.svg",
      title: "Data & Digital Transformation",
      subpoints: [
        {
          title: "Harnessing AI & Analytics",
          subTitle: "Driving predictive insights and intelligent automation.",
          paddingRight: true,
        },
        {
          title: "End-to-End Systems Thinking",
          subTitle:
            "Connecting product, data, and technology to scale businesses.",
          border: true,
          paddingLeft: true,
          paddingRight: true,
        },
        {
          title: "Leveraging Data for Market Leadership",
          subTitle:
            "Using real-time intelligence to drive competitive advantage.",
          border: true,
          paddingLeft: true,
        },
      ],
    },
    {
      icon: "/images/mentoring.svg",
      title: "Executive Leadership & Board Advisory",
      subpoints: [
        {
          title: "Guiding Global Team",
          subTitle: "Shaping leadership vision and decision-making at scale.",
          paddingRight: true,
        },
        {
          title: "Investor & Board-Level Strategy",
          subTitle: "Defining business models that fuel high-growth companies.",
          border: true,
          paddingLeft: true,
          paddingRight: true,
        },
        {
          title: "Cross-Functional Influence",
          subTitle:
            "Bridging technology, UX, and strategy across executive teams.",
          border: true,
          paddingLeft: true,
        },
      ],
    },
  ];
  return (
    <div className="py-[4rem] pb-[6rem] lg:py-[8rem] bg-lightgray">
      <div className="text-primary text-[3rem] lg:text-[5.5rem] family-glook leading-[3rem] lg:leading-[6rem] px-[1.25rem] lg:px-[12.5rem] pb-[2rem] lg:pb-[4rem]">
        Executive Impact Areas
      </div>
      <div className="lg:px-[12.5rem]">
        {/* <AboutSwiper points={points} /> */}
        <AboutSlider points={points} />
      </div>
    </div>
  );
};

export default Impact;
