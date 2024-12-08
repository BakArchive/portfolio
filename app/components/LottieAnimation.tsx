"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import @lottiefiles/lottie-player with SSR disabled
const LottiePlayer = dynamic(
  async () => {
    await import("@lottiefiles/lottie-player"); // Ensure the library is registered
    return (props: React.HTMLProps<HTMLElement>) => <lottie-player {...props} />;
  },
  { ssr: false } // Disable SSR
);

interface LottieAnimationProps {
  animationPath: string; // Path to the Lottie JSON file
  className?: string;
}

export default function LottieAnimation({
  animationPath,
  className,
}: LottieAnimationProps) {
  return (
    <LottiePlayer
      src={animationPath}
      background="transparent"
      speed="1"
      loop
      autoplay
      className={className}
    />
  );
}
