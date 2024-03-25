import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import GithubProfile from "@/components/GithubProfile";
import Projects from "@/components/Projects";
import config from "@/config"

function Portfolio() {
  const username = config.portfolio.github;

  return (
    <>
      <Title text="I'm" highlight={config.portfolio.name} />
      <section className="my-5 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-around">
          <GithubProfile username={username} />
        </div>
        <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0">
          <img
            className="m-auto w-5/6 md:w-full"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&bg_color=00000000&hide_border=true`}
          />
        </div>
      </section>

      <section className="my-5">
        <SectionTitle text={config.portfolio.subTitle} className="mb-5" />
        <Projects username={username} />
      </section>
    </>
  );
}

export default Portfolio;
