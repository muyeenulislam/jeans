import { ConfigProvider } from "antd";
import { Gloock, IBM_Plex_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import "./globals.css";
import "@ant-design/v5-patch-for-react-19";

const glook = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-glook",
});
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm",
});

export const metadata = {
  alternates: {
    canonical: "https://emadmasoud.com/",
  },
  icons: [
    {
      rel: "icon",
      type: "icon",
      sizes: "32x32",
      url: "./favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "./favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "./favicon.ico",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          CEO in Jeans – A Real-World Guide to Bold Leadership & Human-Centered
          Decisions
        </title>
        <meta
          name="description"
          content="CEO in Jeans is not just a leadership book. It's a raw, real, and refreshing journey into decision-making, ambition, and leading with heart in a suit-free world. Written by Emad Masoud., it blends strategy, humility, and personal fire."
        />
        <meta
          name="keywords"
          content="leadership, CEO book, Emad N, business strategy, human-centered leadership, executive book, decision-making, entrepreneurship, real-world leadership"
        />
        <meta
          property="og:title"
          content="CEO in Jeans – A Real-World Guide to Bold Leadership"
        />
        <meta
          property="og:description"
          content="More than a business book, CEO in Jeans is a personal journey about leading with conviction, clarity, and no mask."
        />
        <meta property="og:url" content="https://emadmasoud.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="CEO in Jeans – A Real-World Guide to Bold Leadership & Human-Centered
          Decisions"
        />
        <meta property="og:image" content="/images/favicon-light.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="emadmasoud.com" />
        <meta property="twitter:url" content="https://emadmasoud.com" />
        <meta
          property="twitter:site"
          content="CEO in Jeans – A Real-World Guide to Bold Leadership & Human-Centered
          Decisions"
        />
        <meta
          name="twitter:title"
          content="CEO in Jeans – A Real-World Guide to Bold Leadership"
        />
        <meta
          name="twitter:description"
          content="More than a business book, CEO in Jeans is a personal journey about leading with conviction, clarity, and no mask."
        />
        <meta name="twitter:image" content="/images/favicon-light.png" />
        <meta name="robots" content="index, follow" />
      </head>
      <ConfigProvider
        theme={{
          components: {},
          token: {},
        }}
      >
        <body className={`${ibm.variable} ${glook.variable} relative`}>
          <AntdRegistry>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </AntdRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
