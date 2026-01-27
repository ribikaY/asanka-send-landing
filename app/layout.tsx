import type { Metadata } from "next";
import { satoshi, headingFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asanka Send",
  description: "Asanka Send is a secure financial app that allows you to send and receive money globally.",
  icons: {
    icon: "/images/logo/logo.svg",
  },
  // openGraph: {
  //   title: "Asanka Send",
  //   description: "Asanka Send is a secure financial app that allows you to send and receive money globally.",
  //   images: "/images/logo/logo.svg",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Asanka Send",
  //   description: "Asanka Send is a secure financial app that allows you to send and receive money globally.",
  //   images: "/images/logo/logo.svg",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${headingFont.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
