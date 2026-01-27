import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const headingFont = localFont({
    src: [
      {
        path: "../public/fonts/roc-grotesk/Fontspring-DEMO-rocgrotesk-bold.otf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../public/fonts/roc-grotesk/Fontspring-DEMO-rocgrotesk-extrabold.otf",
        weight: "800",
        style: "normal",
      },
      {
        path: "../public/fonts/roc-grotesk/Fontspring-DEMO-rocgrotesk-black.otf",
        weight: "900",
        style: "normal",
      },
    ],
    variable: "--font-heading",
    display: "swap",
});