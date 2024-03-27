import Card from "/src/components/Card.jsx";
import Loading from "/src/components/Loading.jsx";
import { useEffect, useState } from "react";
import { projects } from "@/api/github";
import ErrUI from "@/components/ErrUI";

/**
 * component showing github repos, supporting keyword search
 * @param {*} param0 
 * @returns 
 */
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
  }, [username]);

  let content = <Loading className="col-span-full" />;

  if (state === 1) {
    const filterRepos = data.repos.filter((proj) =>
      proj.name.toLowerCase().includes(keyword.toLowerCase())
    );
    if (filterRepos.length === 0) {
      content = <p className="col-span-full text-center">No project matching your keyword, please try something else.</p>
    } else {
      content = filterRepos.map((proj, index) => (
        <Card
          key={index}
          title={proj.name}
          link={proj.link}
          subTitle={proj.role}
          content={proj.description}
          tags={proj.techniques}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />
      ));
    }
  } else if (state === -1) {
    content = <ErrUI err={data} className="col-span-full" />;
  }

  return (
    <div className={`flex flex-col gap-5 ${className || ""}`}>
      <input
        type="text"
        placeholder="Project Name Search"
        className="block input input-bordered m-auto w-full max-w-xs"
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <div className="grid grid-cols-12 px-6 lg:px-3 gap-4 md:gap-2 lg:gap-3">
        {content}
      </div>
    </div>
  );
}

export default Projects;
