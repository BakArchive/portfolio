import { activities } from "@/api/github";
import { useEffect, useState } from "react";
import ActivityCalendar, { Skeleton } from "react-activity-calendar";
import ErrUI from "@/components/ErrUI";

function GithubCalendar({ username }) {
  const [data, setData] = useState(null);
  const [state, setState] = useState(0); // 0: loading, 1: success, 2: failed

  useEffect(() => {
    activities(username)
      .then((data) => {
        setData(data);
        setState(1);
      })
      .catch((e) => {
        setState(-1);
        setData(e.message);
      });
  }, [username]);

  if (state === 0)
    return (
      <Skeleton
        loading
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
        colorScheme="light"
      />
    );
  else if (state === -1) return <ErrUI err={data} />;
  else
    return (
      <ActivityCalendar
        data={data.contributions}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
        colorScheme="light"
        labels={{
          totalCount: "{{count}} commits in the last year",
        }}
      />
    );
}

export default GithubCalendar;
