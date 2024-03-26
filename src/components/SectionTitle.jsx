/**
 * the standard section title for all pages
 * @param {*} param0 
 * @returns 
 */
function SectionTitle({ text, className }) {
  return (
    <h2
      className={`font-medium text-2xl md:text-2xl lg:text-4xl ${
        className || ""
      }`}
    >
      {text}
    </h2>
  );
}

export default SectionTitle;
