function Title({text, bold}) {
    return (
      <>
        <h1 className="mb-12 text-5xl md:text-7xl font-medium">
          {text} <span className="font-bold">{bold}</span>
        </h1>
      </>
    );
  }
  
  export default Title;
  