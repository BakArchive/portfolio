"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

interface LottieAnimationProps {
  animation: object; // TypeScript type for Lottie animation data
  className?: string;
}

export default function LottieAnimation({
  animation,
  className,
}: LottieAnimationProps) {
  return <Lottie loop animationData={animation} play className={className} />;
}
