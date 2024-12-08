"use client"
import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedConf {
  words: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
}

export default function TypedText({
  words,
  className,
  typeSpeed,
  backSpeed,
}: TypedConf) {
  const el = useRef<HTMLParagraphElement | null>(null); // Type the ref correctly

  useEffect(() => {
    const typed = new Typed(el.current as HTMLParagraphElement, {
      strings: words,
      typeSpeed: typeSpeed??50,
      backSpeed: backSpeed??30,
      loop: true, 
    });

    return () => {
      typed.destroy(); 
    };
  }, []); 

  return <span ref={el} className={className}></span>;
}
