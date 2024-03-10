function Title({ text, bold }) {
  return (
    <h1 className="mb-12 text-5xl md:text-7xl font-medium">
      {text + " "}
      <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        {bold}
      </span>
    </h1>
  );
}

export default Title;
