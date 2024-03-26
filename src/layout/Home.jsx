import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Social from "@/components/Social";
import config from "@/config";

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-0">
      <div className="md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
        <Title text={config.home.title} highlight={config.home.highlight} />
        <SubTitle text={config.home.subTitle} />
        <Social social={config.home.social} className="mt-5" />
      </div>
      <figure className="m-auto md:w-1/3 lg:w-1/2 flex items-center justify-center">
        <img className="w-2/3 min-w-52 md:min-w-72 md:w-full" src="/hero.png" />
      </figure>
    </div>
  );
}

export default Home;
