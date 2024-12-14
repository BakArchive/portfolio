import Tags from "./Tags";

export default function ProjectCard({
  title,
  subTitle,
  content,
  link,
  tags,
  className,
}: {
  title?: string;
  subTitle?: string;
  content?: string;
  link?: string;
  tags?: string[];
  className?: string;
}) {
  return (
    <div
      className={`card bg-base-100 hover:bg-base-200 shadow-xl ${className}`}
    >
      <a target="_blank" href={link} className="card-compact">
        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title text-lg font-semibold">{title}</h2>
          <p className="text-base">{subTitle}</p>
          <p className="text-sm">{content}</p>
          <Tags list={tags} tagClassName="btn-sm" />
        </div>
      </a>
    </div>
  );
}
