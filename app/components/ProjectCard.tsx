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
      <div className="card-body flex flex-col justify-between">
        <a
          target="_blank"
          href={link}
          className="card-title text-lg font-semibold hover:underline"
        >
          {title}
        </a>
        <p className="text-base">{subTitle}</p>
        <p className="text-sm">{content}</p>
        <Tags list={tags} tagClassName="btn-sm" />
      </div>
    </div>
  );
}
