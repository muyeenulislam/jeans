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

const title = "Jeans";
const description = "Jeans";
const url = `/`;

export const metadata = {
  title,
  description,
  icons: [
    {
      rel: "icon",
      type: "icon",
      sizes: "32x32",
      url: "/images/logo.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/logo.svg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/logo.svg",
    },
  ],
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
        url: "/images/logo.svg",
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
        url: "/images/logo.svg",
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
