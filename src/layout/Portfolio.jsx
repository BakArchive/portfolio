import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import Projects from "@/components/Projects";
import GithubCalendar from "@/components/GithubCalendar";
import config from "@/config";

/**
 * The portfolio page layout
 * @returns
 */
function Portfolio() {
  const conf = config.portfolio;

  return (
    <>
      <Title text={conf.title} highlight={conf.highlight} />
      <section className="my-5">
        <SectionTitle text="My Commit Calendar" className="mb-5" />
        <GithubCalendar username={conf.github} />
      </section>

      <section className="my-5">
        <SectionTitle text={conf.subTitle} className="mb-5" />
        <Projects username={conf.github} />
      </section>
    </>
  );
}

export default Portfolio;
