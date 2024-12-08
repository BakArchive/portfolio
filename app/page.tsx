import type { Metadata } from "next";
import lottieJson from "./animation/coding.json";
import LottieAnimation from "./components/LottieAnimation";
import TypedText from "./components/TypedText";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Home page of my portfolio",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row h-full">
      <div className="flex flex-col text-left md:w-[32rem] gap-5">
        <h1 className="text-6xl">Hello,</h1>
        <h1 className="text-6xl">I'm Muen Yu</h1>
        <h2 className="text-4xl">As <TypedText words={["a software developer", "a QUT graduate", "an open-source contributor"]} /></h2>
      </div>
      <LottieAnimation animation={lottieJson} className="w-96" />
    </div>
  );
}
