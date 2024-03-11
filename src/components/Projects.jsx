import Title from "/src/components/Title.jsx";
import ProjectCard from "/src/components/ProjectCard.jsx";
import Anchor from "/src/components/Anchor.jsx";

function Projects({data}) {
  return (
    <section>
      <Anchor id="Projects" />

      <Title text={data.title} bold={data.boldTitle} />
      <div className="grid grid-cols-12 px-6 lg:px-3 gap-4 md:gap-2 lg:gap-3">
        {data.items.map((proj, index) => (
          <ProjectCard
            key={index}
            name={proj.name}
            link={proj.link}
            role={proj.role}
            description={proj.description}
            techniques={proj.techniques}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
