"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import _ from "lodash";

const navItems: { path: string; name: string }[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/skills", name: "Skills" },
  { path: "/projects", name: "Projects" },
];

const navItemClass = "text-slate-500 rounded-full px-3 py-1";
const active = "bg-base-200";

export default function Nav({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = _.debounce((isUp: boolean, pathname: string) => {
    const isTop = window.scrollY === 0;
    const isBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight;

    const index = navItems.findIndex((item) => item.path === pathname);
    if (isTop && isUp && index > 0) {
      router.push(navItems[index - 1].path);
    } else if (isBottom && !isUp && index + 1 < navItems.length) {
      router.push(navItems[index + 1].path);
    }
  }, 300);

  useEffect(() => {
    const handleWheel = (event: any) => {
      const isUp = event.deltaY > 0 ? false : true;
      handleScroll(isUp, pathname);
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pathname]);

  return (
    <nav
      className={`shadow bg-base-100 flex flex-wrap justify-evenly py-2 md:rounded-full ${className}`}
    >
      {navItems.map((item, idx) => (
        <Link
          href={item.path}
          key={idx}
          className={`${navItemClass} ${
            pathname === item.path ? `${active}` : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
