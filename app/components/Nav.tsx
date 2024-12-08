"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
};

export default function Nav() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <nav className="shadow bg-base-100 flex flex-wrap justify-evenly py-4 md:rounded-full w-full md:w-[48rem]">
      {Object.entries(navItems).map(([path, label]) => (
        <Link
          href={path}
          key={path}
          className={`${
            pathname === path ? "pointer-events-none" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
