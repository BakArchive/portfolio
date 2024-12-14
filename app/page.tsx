import { Metadata } from "next";
import config from "./config";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Social from "./components/Social";
import LottieAnimation from "./components/LottieAnimation";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Home page of my portfolio",
};

export default function Home() {
  const conf = config.home;

  return (
    <div className="h-full flex flex-col md:flex-row gap-20 md:gap-0 animate__animated animate__fadeIn">
      <div className="md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
        <Title text={conf.title} highlight={conf.highlight} />
        <SubTitle text={conf.subTitle} />
        <Social social={conf.social} className="mt-5" />
      </div>
      <figure className="m-auto md:w-1/3 lg:w-1/2 flex items-center justify-center">
        <LottieAnimation animationPath="/animation/hi.json" />
      </figure>
    </div>
  );
}
