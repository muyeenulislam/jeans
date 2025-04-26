import React, { Suspense } from "react";

import DefaultLoader from "../../components/loader/defaultloader";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: "https://emadmasoud.com/contact",
    },
    openGraph: {
      url: "https://emadmasoud.com/contact",
    },
    twitter: {
      url: "https://emadmasoud.com/contact",
    },
  };
}

const Layout = ({ children }) => {
  return <Suspense fallback={<DefaultLoader />}>{children}</Suspense>;
};

export default Layout;
