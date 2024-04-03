import Tags from "@/components/Tags";
import { IconLink } from "@tabler/icons-react";

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
      onClick={() => document.getElementById(title).showModal()}
    >
      {img && (
        <figure>
          <img className="object-cover" src={img} alt="poster" />
        </figure>
      )}
      <div className="card-body flex flex-col justify-between">
        <p className="card-title">{title}</p>
        {subTitle && <p>{subTitle}</p>}
      </div>
      <dialog id={title} className="modal">
        <div className="modal-box">
          <a
            href={link}
            className={`card-title ${link ? "hover:underline" : ""}`}
            target="_blank"
          >
            <IconLink /> {title}
          </a>
          <p className="py-2">{subTitle}</p>
          <p className="py-4">{content}</p>
          <Tags list={tags} className="mt-2" tagClassName="btn-xs text-xs" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ProjectCard;
