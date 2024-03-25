function Content({ text, className }) {
  return (
    <p className={`text-lg md:text-xl lg:text-2xl ${className || ""}`}>
      {text}
    </p>
  );
}

export default Content;
