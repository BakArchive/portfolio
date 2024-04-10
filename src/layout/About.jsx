import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import Content from "@/components/Content";
import LeetCode from "@/components/LeetCode";
import TMDB from "@/components/TMDB";
import config from "@/config";
import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

/**
 * The about page of the site, data from config file
 * @returns 
 */
function About() {
  const conf = config.about;
  const setTitle = useOutletContext();

  useEffect(()=>{
    setTitle("About")
  },[])

  return (
    <div className="animate__animated animate__fadeIn">
      <Title text={conf.title} highlight={conf.highlight} />
      {conf.sections.map((section, index) => (
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
              <TMDB list={section.list} />
            </>
          )}
        </section>
      ))}
    </div>
  );
}

export default About;
