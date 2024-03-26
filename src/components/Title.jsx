import ColorFont from "@/components/ColorFont";

/**
 * the standard title component for the whole site
 * @param {*} param0 
 * @returns 
 */
function Title({ text, highlight, className }) {
  return (
    <h1
      className={`font-medium text-4xl md:text-6xl lg:text-7xl ${
        className || ""
      }`}
    >
      {text} <ColorFont text={highlight} />
    </h1>
  );
}

export default Title;
