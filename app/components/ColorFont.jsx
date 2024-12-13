/**
 * the gradient font
 * @param {*} param0 
 * @returns 
 */
function ColorFont({ text, className }) {
  return (
    <span
      className={`font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ${
        className || ""
      }`}
    >
      {text}
    </span>
  );
}

export default ColorFont;
