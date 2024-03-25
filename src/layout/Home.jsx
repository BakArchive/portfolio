import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Social from "@/components/Social";
import config from "@/config";

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-0">
      <div className="md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
        <Title text="I'm" highlight={config.home.highlight} />
        <SubTitle text={config.home.subTitle} />
        <Social social={config.home.social} className="mt-5" />
        {/* <div className="mt-5 flex flex-wrap gap-5">
          {config.home.social.map((item, index) => (
            <a href={item.link} key={index} target="_blank">
              <i className={`text-2xl hover:font-semibold ti ${item.icon}`}></i>
            </a>
          ))}
        </div> */}
      </div>
      <figure className="m-auto md:w-1/3 lg:w-1/2 flex items-center justify-center">
        <img className="w-2/3 min-w-52 md:min-w-72 md:w-full" src="/hero.png" />
      </figure>
    </div>
  );
}

export default Home;
