import React, { useState, useEffect, useRef } from "react";

function Nav() {
  const navClass =
    "w-full lg:w-1/3 shadow bg-neutral-50 flex flex-wrap justify-evenly py-2 md:rounded-full";
  const navItemClass = "text-slate-500 rounded-full px-3 py-1 ";
  const active = "bg-neutral-200";

  const menu = ["Intro", "Skills", "Projects", "Experience"];

  const [activeAnchor, setActiveAnchor] = useState(0);

  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    const handleScroll = () => {
      const anchors = [...sections].map((anchor) => anchor.offsetTop);
      let anchorId = 0;
      let minGap = Math.abs(window.scrollY - anchors[0]);
      for (let i = 1; i < anchors.length; ++i) {
        const curGap = Math.abs(window.scrollY - anchors[i]);
        if (curGap < minGap) {
          minGap = curGap;
          anchorId = i;
        } else break;
      }
      setActiveAnchor(anchorId);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={navClass}>
      {menu.map((item, index) => (
        <a
          key={index}
          href={"#" + item}
          className={navItemClass + (activeAnchor === index ? active : "")}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
