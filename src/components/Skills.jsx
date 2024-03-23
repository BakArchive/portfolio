function Skills({ data }) {
  return (
    <div className="flex flex-wrap justify-center gap-1 md:gap-2">
      {data.map((skill, index) => (
        <p
          key={index}
          className="rounded-xl bg-white px-2 py-1 md:px-4 md:py-2 text-normal md:text-xl lg:text-2xl border border-slate-300"
        >
          {skill}
        </p>
      ))}
    </div>
  );
}

export default Skills;
