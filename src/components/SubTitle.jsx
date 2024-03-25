function SubTitle({ text, className }) {
  return (
    <h2 className={`font-medium text-3xl md:text-5xl ${className || ""}`}>
      {text}
    </h2>
  );
}

export default SubTitle;
