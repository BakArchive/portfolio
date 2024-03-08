import Title from "/src/components/Title.jsx";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "C#",
    "Figma",
    "Git",
    "Python",
    "Golang",
    "Flask",
    "Gin",
    "React",
    "Vue",
    "Vite",
    "Bootstrap",
    "Tailwind",
    "MySQL",
    "Redis",
    "AWS",
    "Linux",
    "Docker",
    "Kubernetes",
  ];

  return (
    <>
      <Title text="My" bold="Skills" />
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill,index)=>(
            <p key={index} className="rounded-xl bg-white px-4 py-2 text-2xl border border-slate-300">{skill}</p>
        ))}
      </div>
    </>
  );
}

export default Skills;
