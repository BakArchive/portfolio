"use client";

import dynamic from "next/dynamic";
import React from "react";

interface LottiePlayerProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  background?: string;
  speed?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const LottiePlayer = dynamic<LottiePlayerProps>(
  async () => {
    await import("@lottiefiles/lottie-player");
    // Give the component a display name
    const LottiePlayerComponent = (props: LottiePlayerProps) =>
      React.createElement("lottie-player", props);
    LottiePlayerComponent.displayName = "LottiePlayerComponent"; // Important!
    return LottiePlayerComponent;
  },
  { ssr: false }
);

interface LottieAnimationProps {
  animationPath: string;
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
      speed={1}
      loop
      autoplay
      className={className}
    />
  );
}