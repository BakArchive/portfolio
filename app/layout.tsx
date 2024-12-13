"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "./components/ThemeSwitch";
import Nav from "./components/Nav";
import "animate.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const time: number = new Date().getFullYear();
  const [theme, setTheme] = useState<boolean>();

  // TODO: find out better solution to solve theme issue
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme") ?? "false");
    setTheme(storedTheme);
  }, []);

  if (theme === undefined)
    return (
      <html>
        <body></body>
      </html>
    );

  return (
    <html lang="en" data-theme={theme ? "dark" : "light"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="py-8 w-full flex justify-center animate__animated animate__fadeInDown">
          <Nav className="w-full md:w-4/5 lg:w-1/3" />
        </header>
        <main className="flex-grow px-5 w-full md:w-4/5 m-auto flex flex-col">
          {children}
        </main>
        <footer className="py-4 animate__animated animate__fadeInUp">
          <p className="text-center">
            Crafted by Muen Yu | ©{time} All rights reserved
          </p>
        </footer>
        <ThemeSwitch
          className="fixed bottom-10 right-10"
          theme={theme}
          setTheme={setTheme}
        />
      </body>
    </html>
  );
}
