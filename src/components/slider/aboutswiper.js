"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCards } from "swiper/modules";

import SwiperCard from "../about/swipercard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import "./styles.css";

export default function AboutSwiper({ point }) {
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (swiperRef?.current && swiperRef?.current.swiper) {
      swiperRef?.current.swiper.mousewheel.disable();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (swiperRef?.current && swiperRef?.current.swiper) {
      swiperRef?.current.swiper.mousewheel.enable();
    }
  };

  const handleReachEnd = () => {
    if (!isHovering) {
      const bottomSection = document.getElementById("bottom-section");
      if (bottomSection) {
        bottomSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleReachBeginning = () => {
    if (!isHovering) {
      const topSection = document.getElementById("top-section");
      if (topSection) {
        topSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={-30}
        mousewheel={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Mousewheel, EffectCards]}
        className="mySwiper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onReachEnd={handleReachEnd}
        onReachBeginning={handleReachBeginning}
      >
        {point?.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
