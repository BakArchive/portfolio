import { useState } from "react";
import Loading from "@/components/Loading";

function GithubCalendar({ username, className }) {
  const [load, setLoad] = useState(false);

  return (
    <figure className={`w-full overflow-auto ${className}`}>
      {!load && <Loading className="h-40" />}
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username}'s Github chart`}
        className="w-full min-w-[1000px]"
        onLoad={() => {
          setLoad(true);
        }}
      />
    </figure>
  );
}

export default GithubCalendar;
