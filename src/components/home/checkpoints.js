import React from "react";
import Image from "next/image";

const Checkpoints = () => {
  const points = [
    {
      icon: "/images/tick.svg",
      title: "Startup Founders & Growth-Stage CEOs",
      subtitle:
        "Learn how to scale companies, attract investment, and build high-performing teams.",
    },
    {
      icon: "/images/tick.svg",
      title: "Executives & Business Leaders",
      subtitle:
        "Master the strategies used by Fortune 500 leaders to drive innovation and transformation.",
    },
    {
      icon: "/images/tick.svg",
      title: "Product & UX Visionaries",
      subtitle:
        "Discover how to create market-leading products and build teams that drive continuous innovation.",
    },
  ];

  return (
    <div className="bg-lightgray flex flex-col">
      <div className="px-[1.25rem] pt-[4rem] pb-[2rem] lg:px-[12.5rem] lg:pt-[8rem] lg:pb-[4rem]">
        <p className="text-primary text-[2.125rem] leading-[2.75rem] lg:text-[3.75rem] lg:leading-[4.3875rem] lg:tracking-[0.075rem] family-glook">
          This Book is for the
          <br />
          Visionaries, Innovators
          <br />& Decision-Makers:
        </p>
      </div>
      <div className="px-[1.25rem] pb-[4rem] lg:px-[12.5rem] lg:pb-[8rem] grid grid-cols-1 lg:grid-cols-3 lg:gap-[0.125rem]">
        {points?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[1rem] lg:gap-[2rem] px-[1rem] py-[1.5rem] lg:p-[3rem] bg-[linear-gradient(to_top,#FFF,#F1F3F6))] hover:bg-[linear-gradient(to_bottom,#FFF,#F1F3F6))]"
          >
            <div>
              <Image
                src={item?.icon}
                height={120}
                width={120}
                alt="icon"
                className="h-[3rem] w-[3rem]"
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
    </div>
  );
};

export default Checkpoints;
