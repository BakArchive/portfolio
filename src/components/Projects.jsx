import ProjectCard from "/src/components/ProjectCard.jsx";
import { useEffect, useState } from "react";
import { projects } from "@/api/github";

function Projects({ username, className }) {
  const [data, setData] = useState(null);
  const [state, setState] = useState(0); // 0: loading, 1: success, 2: failed
  const [keyword, setKeyWord] = useState("");

  useEffect(() => {
    projects(username)
      .then((data) => {
        setState(1);
        setData(data);
      })
      .catch((e) => {
        setState(-1);
        setData(e.message);
      });
  }, [state]);

  let content = <span className="loading loading-spinner text-neutral"></span>;

  if (state === 1) {
    content = data.repos
      .filter((proj) => proj.name.toLowerCase().includes(keyword))
      .map((proj, index) => (
        <ProjectCard
          key={index}
          name={proj.name}
          link={proj.link}
          role={proj.role}
          description={proj.description}
          techniques={proj.techniques}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />
      ));
  } else if (state === -1) {
    content = <p>{data}</p>;
  }

  return (
    <div className={`flex flex-col gap-5 ${className || ""}`}>
      <input
        type="text"
        placeholder="Project Name Search"
        className="block input m-auto w-full max-w-xs"
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <div className="grid grid-cols-12 px-6 lg:px-3 gap-4 md:gap-2 lg:gap-3">
        {content}
      </div>
    </div>
  );
}

export default Projects;
