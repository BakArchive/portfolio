import ColorFont from "@/components/ColorFont";
import config from "@/config";

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-0">
      <div className="md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
        <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl">
          Hi, I'm <ColorFont text={config.home.name} />
        </h1>
        <h2 className="font-medium text-3xl md:text-5xl lg:text-5xl">
          {config.home.subTitle}
        </h2>
        <div className="mt-5 flex flex-wrap gap-5">
          {config.home.social.map((item, index) => (
            <a href={item.link} key={index} target="_blank">
              <i className={`text-2xl hover:font-semibold ti ${item.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="m-auto md:w-1/3 lg:w-1/2 flex items-center justify-center">
        <img className="w-2/3 min-w-52 md:min-w-72 md:w-full" src="/hero.png" />
      </div>
    </div>
  );
}

export default Home;
