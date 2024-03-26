import Tags from "@/components/Tags"

/**
 * The common Card component, according parameter to change style
 * @param {*} param0 
 * @returns 
 */
function Card({ title, subTitle, content, img, link, tags, className }) {
  return (
    <div className={`card bg-base-100 hover:bg-base-200 shadow-xl ${className || ""}`}>
      {img && (
        <figure>
          <img className="object-cover" src={img} alt="poster" />
        </figure>
      )}
      <div className="card-body flex flex-col justify-between">
        <a href={link} className={`card-title ${link ? "hover:underline" : ""}`} target="_blank">
          {title}
        </a>
        {subTitle && <p>{subTitle}</p>}
        {content && <p>{content}</p>}
        {tags && (
          <Tags list={tags} className="mt-2" tagClassName="btn-xs text-xs" />
        )}
      </div>
    </div>
  );
}

export default Card;
