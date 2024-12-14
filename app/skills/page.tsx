import Title from "../components/Title";
import SectionTitle from "../components/SectionTitle";
import Tags from "../components/Tags";
import config from "../config";
import { Metadata } from "next";
import Card from "../components/Card";

const conf = config.skills;
export const metadata: Metadata = {
  title: "Skills | Portfolio",
  description: "Skills page of my portfolio",
};

export default function skills() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Title text={conf.title} highlight={conf.highlight} />
      <section className="my-5">
        <SectionTitle text="My Skill Set" className="text-center mb-5" />
        <Tags list={conf.skills} />
      </section>
      <section className="my-5">
        <SectionTitle text="My Qualifications" className="text-center mb-5" />
        <div className="grid grid-cols-12 gap-3">
          {conf.qualifications.map((item, index) => (
            <Card
              key={index}
              className="col-span-full md:col-span-6 lg:col-span-4"
              img={item.img}
              title={item.name}
              content={item.detail}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
