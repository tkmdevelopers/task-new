"use client";
import "./globals.css";
import RootNavbar from "../components/Navbar";
import { ThemeProvider, Button } from "@material-tailwind/react";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";

import { FaArrowUp } from "react-icons/fa";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
    },
  ],
  variable: "--font-satoshi",
  weight: ["300", "400", "500", "600", "700"],
});
const quicksand = localFont({
  src: [
    {
      path: "../fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
});
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`flex items-center justify-center  ${quicksand.variable} ${satoshi.variable} `}
      >
        <div
          id="Home"
          className="max-w-screen-2xl h-full w-full flex  flex-col items-center"
        >
          <ThemeProvider>
            <RootNavbar />

            {children}
            <div className="fixed bottom-0 right-0 p-4 m-14 ">
              <a
                size="sm"
                color="white"
                href="#Home"
                className="rounded-full  justify-center  w-12 h-12 absolute flex items-center gap-3 bg-dash_line"
              >
                <FaArrowUp size={25} color="#fff" />
              </a>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
