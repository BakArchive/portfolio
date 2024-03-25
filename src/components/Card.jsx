function Card({ title, subTitle, content, img, link, tags, className }) {
  return (
    <div className={`card bg-base-100 hover:bg-base-200 shadow-xl ${className}`}>
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
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs btn btn-xs bg-base-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
