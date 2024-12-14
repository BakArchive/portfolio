import GithubState from "../components/GithubState";
import SectionTitle from "../components/SectionTitle";
import { fetchRepos } from "../api/github";
import Title from "../components/Title";
import config from "../config";
import { Metadata } from "next";
import Projects from "../components/Projects";

const conf = config.portfolio;
export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Project page of my portfolio",
};

export default function skills() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Title text={conf.title} highlight={conf.highlight} />
      <section className="my-5">
        <SectionTitle text="My Commit Calendar" className="mb-5" />
        <GithubState username={conf.github} />
      </section>
      <section className="my-5">
        <SectionTitle text={conf.subTitle} className="mb-5" />
        <Projects username={conf.github} />
      </section>
    </div>
  );
}
