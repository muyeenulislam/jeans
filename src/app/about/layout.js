import React, { Suspense } from "react";

import DefaultLoader from "../../components/loader/defaultloader";

export async function generateMetadata() {
  return {
    title:
      "CEO in Jeans – A Real-World Guide to Bold Leadership & Human-Centered Decisions",
    description:
      "CEO in Jeans is not just a leadership book. It's a raw, real, and refreshing journey into decision-making, ambition, and leading with heart in a suit-free world. Written by Emad Masoud., it blends strategy, humility, and personal fire.",
    alternates: {
      canonical: "https://emadmasoud.com/about",
    },
    openGraph: {
      title: "CEO in Jeans – A Real-World Guide to Bold Leadership",
      site_name: "CEO in Jeans – A Real-World Guide to Bold Leadership",
      description:
        "More than a business book, CEO in Jeans is a personal journey about leading with conviction, clarity, and no mask.",
      url: "https://emadmasoud.com/about",
      images: [
        {
          url: "/images/favicon-light.png",
          width: 100,
          height: 100,
          alt: "jeans",
        },
      ],
    },
    twitter: {
      title: "CEO in Jeans – A Real-World Guide to Bold Leadership",
      description:
        "More than a business book, CEO in Jeans is a personal journey about leading with conviction, clarity, and no mask.",
      url: "https://emadmasoud.com/about",
      images: [
        {
          url: "/images/favicon-light.png",
          width: 100,
          height: 100,
          alt: "jeans",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const Layout = ({ children }) => {
  return <Suspense fallback={<DefaultLoader />}>{children}</Suspense>;
};

export default Layout;
