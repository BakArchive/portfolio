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
    <nav className="flex flex-wrap justify-evenly w-3/4 md:w-1/2">
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
