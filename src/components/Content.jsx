/**
 * the standard content body font
 * @param {*} param0 
 * @returns 
 */
function Content({ text, className }) {
  return (
    <p className={`text-lg md:text-xl lg:text-2xl ${className || ""}`}>
      {text}
    </p>
  );
}

export default Content;
