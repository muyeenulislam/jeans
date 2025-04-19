"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./styles.css";

const VerticalSwiper = ({ point }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        modules={[]}
        className="mySwiper"
        loop={true}
      >
        {point?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col lg:flex-row gap-[2rem] lg:gap-[3rem] bg-[linear-gradient(to_bottom,#FFF,#F1F3F6))] px-[1.5rem] py-[1rem] lg:p-[3rem]">
              <div>
                <Image
                  src={item?.icon}
                  height={120}
                  width={120}
                  className="h-[6.25rem] w-[6.25rem] lg:h-[12.5rem] lg:w-[12.5rem]"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[1.5rem] lg:gap-[3rem] w-full">
                <h3 className="text-primary text-ellipsis line-clamp-3 family-glook text-[2rem] leading-[2.5rem] tracking-[0.04rem] lg:text-[2.5rem] lg:leading-[3rem] lg:tracking-[0.05rem] text-left">
                  {item?.title}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {item?.subpoints?.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col gap-[1rem] py-[1rem] lg:py-0 px-0 ${
                        item?.border &&
                        "border-t border-t-gray-300 lg:border-t-0 lg:border-l lg:border-l-gray-300"
                      } ${item?.paddingLeft && "lg:pl-[1.5rem]"} ${
                        item?.paddingRight && "lg:pr-[1.5rem]"
                      }`}
                    >
                      <Image
                        src="/images/tick.svg"
                        alt="tick"
                        height={24}
                        width={24}
                        className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
                      />
                      <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem]">
                        <h5 className="text-primary text-[1.5rem] leading-[2rem] tracking-[0.04rem] lg:text-[2rem] lg:leading-[2.5rem] lg:tracking-[0.03rem] line-clamp-3 text-ellipsis family-glook text-left">
                          {item?.title}
                        </h5>
                        <h6 className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem] line-clamp-3 text-ellipsis text-left">
                          {item?.subTitle}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VerticalSwiper;
