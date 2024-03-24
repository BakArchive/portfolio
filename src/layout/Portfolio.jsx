import ColorFont from "@/components/ColorFont";
import GithubProfile from "@/components/GithubProfile";

function Portfolio() {
  const username = "muenyu";

  const titleClass = "mt-10 font-medium text-4xl md:text-6xl lg:text-7xl";
  return (
    <>
      <h1 className={titleClass}>
        I'm <ColorFont text="productive" />
      </h1>
      <div className="mt-10 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-around">
          <GithubProfile />
        </div>
        <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0">
          <img
            className="m-auto w-5/6 md:w-full"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=muenyu&layout=compact&bg_color=00000000&hide_border=true"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
