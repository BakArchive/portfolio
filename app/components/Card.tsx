import Tags from "./Tags";

export default function Card({
  title,
  content,
  img,
  link,
  className,
}: {
  title?: string;
  content?: string;
  img?: string;
  link?: string;
  className?: string;
}) {
  return (
    <div
      className={`card bg-base-100 hover:bg-base-200 shadow-xl p-2 ${className}`}
    >
      {img && (
        <figure>
          <img className="object-contain w-52 h-52" src={img} alt="poster" />
        </figure>
      )}
      <div className="card-body flex flex-col justify-between">
        <a
          href={link}
          className={`card-title ${link ? "hover:underline" : ""}`}
          target="_blank"
        >
          {title}
        </a>
        {content && <p>{content}</p>}
      </div>
    </div>
  );
}
