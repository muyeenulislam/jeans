import React, { Suspense } from "react";

import DefaultLoader from "../../components/loader/defaultloader";

export async function generateMetadata() {
  const title = "Contact | Jeans";
  const description = "Contact Jeans";
  const url = `/contact`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      site_name: "Jeans",
      description,
      url,
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
      title,
      url,
      description,
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
