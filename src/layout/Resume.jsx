import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Content from "@/components/Content";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import config from "@/config";

function Resume() {
  return (
    <>
      <Title text="I'm" highlight={config.resume.highlight} />
      <section className="my-5 grid grid-cols-12 gap-5">
        <Content
          text={config.resume.intro}
          className="col-span-12 lg:col-span-8"
        />
        <figure className="col-span-12 lg:col-span-4">
          <img className="w-64 m-auto" src="/t-rex.svg" />
        </figure>
      </section>

      <section className="my-5">
        <SectionTitle text="My Skill Set" className="text-center mb-5" />
        <Skills data={config.resume.skills} />
      </section>

      <section className="my-5">
        <SectionTitle text="My Qualifications" className="text-center mb-5" />
        <div className="grid grid-cols-12 gap-3">
          {config.resume.qualifications.map((item, index) => (
            <Card
              key={index}
              className="col-span-full md:col-span-6 lg:col-span-3"
              title={item.name}
              content={item.detail}
              link={item.link}
            />
          ))}
        </div>
      </section>

      <section className="my-5">
        <SectionTitle text="My Experience" className="mb-5" />
        <Experience data={config.resume.experience} />
      </section>
    </>
  );
}

export default Resume;
