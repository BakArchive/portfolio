import Title from "/src/components/Title.jsx";
import Anchor from "/src/components/Anchor.jsx";

function Skills({data}) {
  return (
    <section>
      <Anchor id="Skills" />

      <Title text={data.title} bold={data.boldTitle} />
      <div className="flex flex-wrap justify-center gap-2">
        {data.tags.map((skill, index) => (
          <p
            key={index}
            className="rounded-xl bg-white px-4 py-2 text-2xl border border-slate-300"
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;
