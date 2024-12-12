"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
};

export default function Nav({className}:{className?:string}) {
  const pathname = usePathname(); 
  const navItemClass = "text-slate-500 rounded-full px-3 py-1";
  const active = "bg-base-200";

  return (
    <nav className={`shadow bg-base-100 flex flex-wrap justify-evenly py-2 md:rounded-full ${className || ""}`}>
      {Object.entries(navItems).map(([path, label]) => (
        <Link
          href={path}
          key={path}
          className={`${
            pathname === path ? `${navItemClass} ${active}`:navItemClass
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
