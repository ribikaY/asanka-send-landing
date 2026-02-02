import type { Metadata } from "next";
import { satoshi, headingFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Asanka Send",
  description:
    "Asanka Send is a secure financial app that allows you to send and receive money globally.",
  icons: {
    icon: "/images/logo/logo.svg",
  },
  openGraph: {
    title: "Asanka Send",
    description:
      "Asanka Send is a secure financial app that allows you to send and receive money globally.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asanka Send",
    description:
      "Asanka Send is a secure financial app that allows you to send and receive money globally.",
    images: ["/opengraph-image"],
  },
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
