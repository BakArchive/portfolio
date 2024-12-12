import { Metadata } from "next";
import LottieAnimation from "./components/LottieAnimation";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The page does not exist",
};

export default function NotFound() {
  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center">
      <div className="w-60 h-60">
        <LottieAnimation animationPath="/animation/notfound.json" />
      </div>
      <h1 className="text-6xl">Not Found</h1>
    </div>
  );
}
