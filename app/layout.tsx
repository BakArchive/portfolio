import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import FootNote from "./components/FootNote";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <header className="fixed md:py-8 w-full flex justify-center z-10">
          <Nav />
        </header>
        <main className="flex-1 z-0 flex flex-col">{children}</main>
        <footer className="py-6">
          <FootNote />
        </footer>
      </body>
    </html>
  );
}
