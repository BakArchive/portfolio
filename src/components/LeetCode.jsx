import { useEffect, useState } from "react";
import leetcode from "@/api/leetcode";

function LeetCode() {
  const username = "muenyu";
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
    content = (
      <>
        <p>Name: {username}</p>
        <p>World Ranking: {data.ranking}</p>
        <div className="grid grid-cols-12">
          <div className="col-span-2">Total</div>
          <div className="col-span-7">
            <progress
              className="progress progress-info w-full"
              value={data.totalSolved}
              max={data.totalQuestions}
            ></progress>
          </div>
          <div className="col-span-3 text-center">
            {data.totalSolved}/{data.totalQuestions}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">Easy</div>
          <div className="col-span-7">
            <progress
              className="progress progress-success w-full"
              value={data.easySolved}
              max={data.totalEasy}
            ></progress>
          </div>
          <div className="col-span-3 text-center">
            {data.easySolved}/{data.totalEasy}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">Mid</div>
          <div className="col-span-7">
            <progress
              className="progress progress-warning w-full"
              value={data.mediumSolved}
              max={data.totalMedium}
            ></progress>
          </div>
          <div className="col-span-3 text-center">
            {data.mediumSolved}/{data.totalMedium}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">Hard</div>
          <div className="col-span-7">
            <progress
              className="progress progress-error w-full"
              value={data.hardSolved}
              max={data.totalHard}
            ></progress>
          </div>
          <div className="col-span-3 text-center">
            {data.hardSolved}/{data.totalHard}
          </div>
        </div>
      </>
    );
  } else if (state === -1){
    content = <p>{data}</p>;
  }

  return <div>{content}</div>;
}

export default LeetCode;
