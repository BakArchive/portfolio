import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import Projects from "@/components/Projects";
import GithubCalendar from "@/components/GithubCalendar";
import config from "@/config";
import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

/**
 * The portfolio page layout
 * @returns
 */
function Portfolio() {
  const conf = config.portfolio;
  const setTitle = useOutletContext();

  useEffect(()=>{
    setTitle("Portfolio")
  },[])

  return (
    <div className="animate__animated animate__fadeIn">
      <Title text={conf.title} highlight={conf.highlight} />
      <section className="my-5">
        <SectionTitle text="My Commit Calendar" className="mb-5" />
        <GithubCalendar username={conf.github} />
      </section>

      <section className="my-5">
        <SectionTitle text={conf.subTitle} className="mb-5" />
        <Projects username={conf.github} />
      </section>
    </div>
  );
}

export default Portfolio;
