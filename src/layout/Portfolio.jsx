import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import GithubProfile from "@/components/GithubProfile";
import Projects from "@/components/Projects";
import config from "@/config"

/**
 * The portfolio page layout
 * @returns 
 */
function Portfolio() {
  const conf = config.portfolio;

  return (
    <>
      <Title text={conf.title} highlight={conf.highlight} />
      <section className="my-5 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-around mt-5 lg:mt-0">
          <GithubProfile username={conf.github} />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <img
            className="m-auto w-5/6 md:w-full"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${conf.github}&layout=compact&bg_color=00000000&hide_border=true`}
          />
        </div>
      </section>

      <section className="my-5">
        <SectionTitle text={conf.subTitle} className="mb-5" />
        <Projects username={conf.github} />
      </section>
    </>
  );
}

export default Portfolio;
