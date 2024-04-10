import { Link } from "react-router-dom";

/**
 * The card component for projects only
 * @param {*} param0
 * @returns
 */
function ProjectCard({ title, subTitle, content, img, link, tags, className }) {
  return (
    <div
      className={`card bg-base-100 hover:bg-base-200 shadow-xl ${
        className || ""
      }`}
    >
      <Link to={`/project/${title}`}>
        <div className="card-body flex flex-col justify-between">
          <p className="card-title">{title}</p>
          <p>{subTitle}</p>
          <p>{content}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
