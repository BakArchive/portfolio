import ColorFont from "@/components/ColorFont";
import LeetCode from "@/components/LeetCode";
import TMDB from "@/components/TMDB";
import config from "@/config";

function About() {
  return (
    <>
      <h1 className="my-5 font-medium text-4xl md:text-6xl lg:text-7xl">
        I'm <ColorFont text={config.about.name} />
      </h1>

      {config.about.sections.map((section, index) => (
        <section key={index}>
          <h2 className="my-5 font-medium text-2xl md:text-2xl lg:text-4xl">
            {section.title}
          </h2>
          {section.type === 0 && (
            <p className="m-5 text-lg md:text-xl lg:text-2xl">
              {section.content}
            </p>
          )}
          {section.type === 1 && (
            <div className="grid grid-cols-12">
              <p className={"m-5 text-lg md:text-xl lg:text-2xl col-span-12 md:col-span-6"}>
                {section.content}
              </p>
              <div className="col-span-12 md:col-span-6 p-5">
                <LeetCode username={section.username} />
              </div>
            </div>
          )}
          {section.type === 2 && (
            <>
              <p className="text-center m-10 text-xl">{section.content}</p>
              <div className="m-5">
                <TMDB list={section.list} secret={section.secret} />
              </div>
            </>
          )}
        </section>
      ))}
    </>
  );
}

export default About;
