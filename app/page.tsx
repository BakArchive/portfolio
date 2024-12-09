import type { Metadata } from "next";
import TypedText from "./components/TypedText";
import LottieAnimation from "./components/LottieAnimation";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Home page of my portfolio",
};

const words: string[] = [
  "a software developer",
  "a QUT graduate",
  "an open-source contributor",
];

export default function Home() {
  return (
    <div className="mt-2 flex flex-col items-center justify-center md:flex-row h-full">
      <div className="flex flex-col text-left md:w-[32rem] gap-5">
        <h1 className="text-6xl">Hello,</h1>
        <h1 className="text-6xl">I'm Muen Yu</h1>
        <h2 className="text-4xl">
          As <TypedText words={words} />
        </h2>
      </div>
      <LottieAnimation
        animationPath="/animation/coding.json"
        className="max-w-96"
      />
    </div>
  );
}
