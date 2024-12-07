import Link from "next/link";

export default function Nav() {
  return (
    <nav className="shadow bg-base-100 flex flex-wrap justify-evenly py-4 md:rounded-full w-full md:w-[48rem]">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
