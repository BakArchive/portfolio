import { useEffect, useState } from "react";
import tmdb from "@/api/tmdb";

function TMDB({list, secret, className}) {
  const [data, setData] = useState(null);
  const [state, setState] = useState(0); // 0: loading, 1: success, 2: failed

  useEffect(() => {
    tmdb(list, secret)
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
    content = data.items.map((item, index) => {
      return (
        <div
          key={index}
          className="card col-span-full md:col-span-6 lg:col-span-3 bg-base-100 hover:bg-base-200 shadow-xl"
        >
          <figure>
            <img className="object-cover" src={item.poster} alt="poster" />
          </figure>
          <a href={item.link} target="_blank">
            <div className="card-body">
              <p className="card-title text-lg">{item.name}</p>
            </div>
          </a>
        </div>
      );
    });
  } else if (state === -1) {
    content = <p>{data}</p>;
  }

  return (
    <div className={`mt-5 w-full grid grid-cols-12 min-h-40 gap-3 ${className}`}>
      {content}
    </div>
  );
}

export default TMDB;
