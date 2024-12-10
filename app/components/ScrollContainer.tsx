"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [1, 2, 3];

function Section({ id }: { id: number }) {
  return (
    <motion.section
      id={`section-${id}`}
      className="w-full h-screen flex justify-center items-center border-b-2"
    >
      <h1>This is section {id}</h1>
    </motion.section>
  );
}

export default function ScrollContainer() {
  const [curSection, setCurSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Determine the nearest section based on scroll position
      const nearestSection = Math.round(scrollPosition / sectionHeight);

      if (nearestSection !== curSection) {
        setIsScrolling(true);
        setCurSection(nearestSection);
        setTimeout(() => setIsScrolling(false), 800); // Prevent rapid scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [curSection, isScrolling]);

  useEffect(() => {
    const sectionId = `section-${sections[curSection]}`;
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [curSection]);

  return (
    <div>
      {sections.map((id) => (
        <Section id={id} key={id} />
      ))}
    </div>
  );
}
