import { ConfigProvider } from "antd";
import { Gloock, IBM_Plex_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
  title: "Jeans",
  description: "Jeans Website",
  icons: [
    {
      rel: "icon",
      type: "icon",
      sizes: "32x32",
      url: "/images/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/favicon.svg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://www.jeans.com" />
        <meta property="og:image" content="/images/og-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jeans.hk" />
        <meta property="twitter:url" content="https://www.jeans.hk" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/og-logo.png" />
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
