import React from "react";
import Image from "next/image";
const Skillset = () => {
  const points = [
    {
      icon: "/images/tick.svg",
      title: "Product & UX Strategy ",
      subtitle:
        "Leading human-centered innovation, platform scalability, and market-driven experience design.",
    },
    {
      icon: "/images/tick.svg",
      title: "Technology-Driven Business Growth",
      subtitle:
        "AI, ML, data-driven decision-making, and enterprise-wide design systems.",
    },
    {
      icon: "/images/tick.svg",
      title: "Vision & Leadership at Scale",
      subtitle:
        "Shaping product vision, mentoring global teams, and influencing board-level decisions.",
    },
    {
      icon: "/images/tick.svg",
      title: "Cross-Layer Innovation",
      subtitle:
        "Aligning UX, engineering, and business intelligence to scale industry-leading platforms.",
    },
    {
      icon: "/images/tick.svg",
      title: "Industry Influence & Advisory",
      subtitle:
        "President at EMENA-EIC, board-level advisor, and thought leader in enterprise UX & digital transformation.",
    },
    {
      icon: "/images/tick.svg",
      title: "Tech Ecosystem Expertise",
      subtitle:
        "Deep understanding of modern design systems, front-end architectures, and backend integrations, ensuring scalable, high-performance solutions.",
    },
  ];

  return (
    <div className="flex flex-col" id="bottom-section">
      <div className="px-[1.25rem] pt-[4rem] pb-[2rem] lg:px-[12.5rem] lg:pt-[8rem] lg:pb-[4rem] flex flex-col gap-[1rem] lg:gap-[3rem]">
        <p className="text-primary text-[2.125rem] leading-[2.75rem] lg:text-[3.75rem] lg:leading-[4.3875rem] lg:tracking-[0.075rem] family-glook lg:w-[49rem]">
          Unicorn Skill Set – The Rare Fusion of Design, Technology & Strategy
        </p>
        <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem] lg:max-w-[62.625rem]">
          I architect ecosystems, not just interfaces. My expertise bridges UX,
          data, and scalable technology, ensuring organizations don’t just build
          products—they build industry-defining platforms. My leadership drives
          growth, efficiency, and transformation at scale.
        </p>
      </div>
      <div className="px-[1.25rem] pb-[4rem] lg:px-[12.5rem] lg:pb-[8rem] grid grid-cols-1 lg:grid-cols-3 lg:gap-[0.125rem]">
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

export default Skillset;
