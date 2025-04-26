import React, { Suspense } from "react";

import DefaultLoader from "../../components/loader/defaultloader";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: "https://emadmasoud.com/about",
    },
    openGraph: {
      url: "https://emadmasoud.com/about",
    },
    twitter: {
      url: "https://emadmasoud.com/about",
    },
  };
}

const Layout = ({ children }) => {
  return <Suspense fallback={<DefaultLoader />}>{children}</Suspense>;
};

export default Layout;
