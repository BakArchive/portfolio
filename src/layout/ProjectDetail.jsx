import { useOutletContext, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectDetail } from "@/api/github";
import config from "@/config";
import Loading from "@/components/Loading";
import ErrUI from "@/components/ErrUI";
import Title from "@/components/Title";
import SectionTitle from "@/components/SectionTitle";
import Tags from "@/components/Tags";

export default function ProjectDetail() {
  const setTitle = useOutletContext();
  const projectName = useLoaderData();
  const userName = config.portfolio.github;

  const [data, setData] = useState(null);
  const [state, setState] = useState(0); // 0: loading, 1: success, 2: failed

  useEffect(() => {
    setTitle("Loading");
    projectDetail(userName, projectName)
      .then((data) => {
        setState(1);
        setData(data);
        setTitle(projectName);
      })
      .catch((e) => {
        setState(-1);
        setData(e.message);
        setTitle(e.message);
      });
  }, []);

  if (state === 0) return <Loading className="col-span-full" />;
  else if (state === 1)
    return (
      <div className="grid grid-cols-12">
        <div className="col-span-full md:col-span-5">
          <a className="hover:underline" href={data.link} target="_blank">
            <Title highlight={data.name} />
          </a>
          <SectionTitle text={`As ${data.role}`} className="my-3" />
        </div>
        <div className="col-span-full md:col-span-7 text-lg md:text-xl">
          <div className="flex flex-wrap gap-2 my-5">
            <p>Star: {data.star}</p>
            {data.license && <p>License: {data.license}</p>}
          </div>
          <p className="my-5">{data.description}</p>
          <Tags list={data.topics} />
        </div>
      </div>
    );
  else return <ErrUI err={data} className="col-span-full" />;
}
