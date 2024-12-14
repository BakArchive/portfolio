import { Metadata } from "next";
import Title from "../components/Title";
import config from "../config";
import Content from "../components/Content";
import LottieAnimation from "../components/LottieAnimation";
import SectionTitle from "../components/SectionTitle";
import TimeLine from "../components/TimeLine";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About page of my portfolio",
};

const conf = config.about;
export default function about() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Title text={conf.title} highlight={conf.highlight} />
      <section className="my-5 grid grid-cols-12 gap-5">
        <Content text={conf.intro} className="col-span-12 lg:col-span-8" />
        <figure className="col-span-12 lg:col-span-4 min-h-64">
          <LottieAnimation animationPath="/animation/coding.json" />
        </figure>
      </section>
      <section className="my-5">
        <SectionTitle text="My Experience" className="mb-5" />
        <TimeLine data={conf.experience} />
      </section>
    </div>
  );
}
