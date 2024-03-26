import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import Content from "@/components/Content";
import LeetCode from "@/components/LeetCode";
import TMDB from "@/components/TMDB";
import config from "@/config";

function About() {
  return (
    <>
      <Title text={config.about.title} highlight={config.about.highlight} />
      {config.about.sections.map((section, index) => (
        <section className="my-5" key={index}>
          <SectionTitle text={section.title} />
          {section.type === 0 && (
            <Content text={section.content} className="p-5" />
          )}
          {section.type === 1 && (
            <div className="grid grid-cols-12">
              <Content
                text={section.content}
                className="col-span-12 md:col-span-6 p-5"
              />
              <div className="col-span-12 md:col-span-6 p-5">
                <LeetCode username={section.username} />
              </div>
            </div>
          )}
          {section.type === 2 && (
            <>
              <Content text={section.content} className="text-center p-5" />
              <TMDB list={section.list} secret={section.secret} />
            </>
          )}
        </section>
      ))}
    </>
  );
}

export default About;
