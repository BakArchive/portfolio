function Skills({ data, className }) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-1 md:gap-2 ${
        className || ""
      }`}
    >
      {data.map((skill, index) => (
        <p key={index} className="btn bg-base-100">
          {skill}
        </p>
      ))}
    </div>
  );
}

export default Skills;
