"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import SwiperCard from "../about/swipercard";

const AboutSlider = ({ points }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div ref={container}>
      {points?.map((point, index) => {
        const targetScale = 1 - (points.length - index) * 0.05;
        return (
          <SwiperCard
            key={`p_${index}`}
            item={point}
            i={index}
            progress={scrollYProgress}
            range={[index * 0.33, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default AboutSlider;
