import type { Metadata } from "next";
import { satoshi, headingFont } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Asanka Send",
  description:
    "Asanka Send is a secure financial app built with a mother's heart and care for people who want full control over what their money does for their family and community back home.",
  icons: {
    icon: "/images/logo/logo.svg",
  },
  openGraph: {
    title: "Asanka Send",
    description:
      "Asanka Send is a secure financial app built with a mother's heart and care for people who want full control over what their money does for their family and community back home.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asanka Send",
    description:
      "Asanka Send is a secure financial app built with a mother's heart and care for people who want full control over what their money does for their family and community back home.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${headingFont.variable} antialiased`}
      >
          <ThemeProvider>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
