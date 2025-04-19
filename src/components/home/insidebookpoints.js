import React from "react";
import Image from "next/image";

const InsideBookPoints = () => {
  const points = [
    {
      icon: "/images/one-square.svg",
      title: "Think Like a CEO & Make High-Stakes Decisions with Confidence",
      subtitle:
        "Master Strategic Thinking – Make bold decisions in uncertain times.",
    },
    {
      icon: "/images/two-square.svg",
      title: "Build & Lead Elite Teams That Drive Innovation & Growth",
      subtitle:
        "Learn leadership strategies that attract and retain top talent.",
    },
    {
      icon: "/images/three-square.svg",
      title: "Transform Ideas into Market-Leading Products",
      subtitle:
        "Develop a CEO mindset for driving digital transformation and product success.",
    },
    {
      icon: "/images/four-square.svg",
      title: "Turn Crisis into Competitive Advantage",
      subtitle:
        "Navigate uncertainty, disruption, and business challenges like a visionary leader.",
    },
  ];
  return (
    <div className="px-[1.25rem] pb-[4rem] lg:px-[12.5rem] lg:pb-[8rem] grid grid-cols-1 lg:grid-cols-2 lg:gap-[0.125rem]">
      {points?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-[1rem] lg:gap-[2rem] px-[1rem] py-[1.5rem] lg:p-[3rem] bg-[linear-gradient(to_bottom,#FFF,#F1F3F6))]"
        >
          <div>
            <Image
              src={item?.icon}
              height={120}
              width={120}
              alt="icon"
              className="h-[3.75rem] w-[3.75rem] lg:h-[7.5rem] lg:w-[7.5rem]"
            />
          </div>
          <div className="pr-[1rem] lg:pr-[2rem] flex flex-col gap-[0.5rem] lg:gap-[1rem]">
            <p className="text-primary text-[1.5rem] leading-[2rem] tracking-[0.03rem] lg:text-[2.5rem] lg:leading-[3rem] lg:tracking-[0.05rem] line-clamp-3 text-ellipsis items-stretch family-glook">
              {item?.title}
            </p>
            <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem] line-clamp-3 text-ellipsis items-stretch">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsideBookPoints;
