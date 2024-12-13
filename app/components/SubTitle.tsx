/**
 * standard subtitle component
 * @param {*} param0
 * @returns
 */
function SubTitle({ text, className }: { text?: string; className?: string }) {
  return (
    <h2 className={`font-medium text-3xl md:text-5xl ${className || ""}`}>
      {text}
    </h2>
  );
}

export default SubTitle;
