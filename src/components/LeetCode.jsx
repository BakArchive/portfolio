import { useEffect, useState } from "react";
import leetcode from "@/api/leetcode";

function LeetCode({ username, className }) {
  const [data, setData] = useState(null);
  const [state, setState] = useState(0); // 0: loading, 1: success, 2: failed

  useEffect(() => {
    leetcode(username)
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
    const progressColor = [
      "progress-info",
      "progress-success",
      "progress-warning",
      "progress-error",
    ];
    content = (
      <>
        <p>Name: {username}</p>
        <p>World Ranking: {data.ranking}</p>
        {data.stat.map((item, index) => (
          <div key={index} className="grid grid-cols-12">
            <div className="col-span-2">{item.name}</div>
            <div className="col-span-7">
              <progress
                className={"progress w-full " + progressColor[index]}
                value={item.solved}
                max={item.total}
              ></progress>
            </div>
            <div className="col-span-3 text-center">
              {item.solved}/{item.total}
            </div>
          </div>
        ))}
      </>
    );
  } else if (state === -1) {
    content = <p>{data}</p>;
  }

  return <div className={`${className || ""}`}>{content}</div>;
}

export default LeetCode;
