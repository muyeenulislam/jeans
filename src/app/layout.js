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
  title:
    "CEO in Jeans – A Real-World Guide to Bold Leadership & Human-Centered Decisions",
  description:
    "CEO in Jeans is not just a leadership book. It's a raw, real, and refreshing journey into decision-making, ambition, and leading with heart in a suit-free world. Written by Emad Masoud., it blends strategy, humility, and personal fire.",
  author: "Emad Masoud",
  keywords:
    "leadership, CEO book, Emad N, business strategy, human-centered leadership, executive book, decision-making, entrepreneurship, real-world leadership",
  type: "website",
  icons: [
    {
      rel: "icon",
      type: "icon",
      sizes: "32x32",
      url: "/images/favicon-light.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/favicon-light.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/favicon-light.ico",
    },
  ],
  alternates: {
    canonical: "https://emadmasoud.com",
  },
  openGraph: {
    title: "CEO in Jeans – A Real-World Guide to Bold Leadership",
    site_name: "CEO in Jeans – A Real-World Guide to Bold Leadership",
    description:
      "More than a business book, CEO in Jeans is a personal journey about leading with conviction, clarity, and no mask.",
    url: "https://emadmasoud.com",
    type: "website",
    author: "Emad Masoud",
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
    url: "https://emadmasoud.com",
    type: "website",
    author: "Emad Masoud",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
