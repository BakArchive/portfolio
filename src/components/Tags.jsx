/**
 * common component for tags
 * @param {*} param0 
 * @returns 
 */
function Tags({ list, className, tagClassName }) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-1 md:gap-2 ${
        className || ""
      }`}
    >
      {list.map((skill, index) => (
        <span key={index} className={`btn bg-base-100 ${tagClassName || ""}`}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default Tags;
