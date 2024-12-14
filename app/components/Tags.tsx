export default function Tags({
  list,
  className,
  tagClassName,
}: {
  list?: string[];
  className?: string;
  tagClassName?: string;
}) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-1 md:gap-2 ${className}`}
    >
      {list?.map((skill, index) => (
        <span key={index} className={`btn bg-base-100 ${tagClassName}`}>
          {skill}
        </span>
      ))}
    </div>
  );
}
