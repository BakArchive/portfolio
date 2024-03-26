import { profile } from "@/api/github";
import { useEffect, useState } from "react";

/**
 * component to show github profile, including avatar, username, 
 * number of public repos, follower/following, github join time
 * @param {*} param0 
 * @returns 
 */
function GithubProfile({ username, className }) {
  const [data, setData] = useState(null);
  const [state, setState] = useState(0);

  useEffect(() => {
    profile(username)
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
    content = (
      <>
        <figure className="col-span-12 md:col-span-4">
          <a href={data.link} target="_blank">
            <img
              className="rounded-full m-auto w-32 md:w-full"
              src={data.avatar}
            />
          </a>
        </figure>
        <div className="text-center md:text-left col-span-12 md:col-span-8 flex flex-col justify-evenly ">
          <h2 className="font-medium text-2xl md:text-2xl lg:text-4xl">
            {data.name}
          </h2>
          <p className="text-lg lg:text-2xl">
            Public Repositories: {data.repos}
          </p>
          <p className="text-lg lg:text-2xl">Followers: {data.followers}</p>
          <p className="text-lg lg:text-2xl">Following: {data.following}</p>
          <p className="text-lg lg:text-2xl">
            Join GitHub in {new Date(data.created).getFullYear()}
          </p>
        </div>
      </>
    );
  } else if (state === -1) {
    content = <p>{data}</p>;
  }

  return (
    <div className={`grid grid-cols-12 md:gap-5 ${className || ""}`}>
      {content}
    </div>
  );
}

export default GithubProfile;
