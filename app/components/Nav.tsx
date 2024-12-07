// "use client";
import Link from "next/link";

const downloadResume = () => {
  alert("Download Resume");
};

export default function Nav() {
  return (
    <nav className="shadow bg-base-100 flex flex-wrap justify-evenly py-4 md:rounded-full w-full md:w-[48rem]">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      {/* <a onClick={downloadResume}>Resume</a> */}
    </nav>
  );
}
