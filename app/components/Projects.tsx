import { fetchRepos } from "../api/github";
import ProjectCard from "./ProjectCard";

export default async function Projects({
  username,
  className,
}: {
  username: string;
  className?: string;
}) {
  const repos = await fetchRepos(username);
  return (
    <div className={`grid grid-cols-12 px-6 lg:px-3 gap-4 md:gap-2 lg:gap-3 ${className}`}>
      {repos.map((item, idx) => (
        <ProjectCard
          key={idx}
          title={item.name}
          subTitle={item.role}
          content={item.description}
          link={item.link}
          tags={item.tags}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />
      ))}
    </div>
  );
}
