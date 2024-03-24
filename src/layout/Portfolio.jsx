import ColorFont from "@/components/ColorFont";
import GithubProfile from "@/components/GithubProfile";
import Projects from "@/components/Projects";

function Portfolio() {
  const username = "muenyu";

  const titleClass = "mt-10 font-medium text-4xl md:text-6xl lg:text-7xl";
  return (
    <>
      <h1 className={titleClass}>
        I'm <ColorFont text="productive" />
      </h1>
      <section className="mt-10 grid grid-cols-12">
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

      <section>
        <h2 className="my-5 font-medium text-2xl md:text-2xl lg:text-4xl">
          Here are all Open Source Project I Involved
        </h2>
        <Projects username={username} />
      </section>
    </>
  );
}

export default Portfolio;
