import Title from "/src/components/Title.jsx";
import Anchor from "/src/components/Anchor.jsx";

function Projects() {
  const projects = [];
  return (
    <>
      <Anchor id="Projects" />
      <Title text="My" bold="Projects" />
      <div className="grid grid-cols-12 px-6 lg:px-3 gap-4 lg:gap-2">
        <div className="rounded-xl bg-white border border-slate-300 min-h-80 col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="rounded-xl bg-white border border-slate-300 min-h-80 col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="rounded-xl bg-white border border-slate-300 min-h-80 col-span-12 md:col-span-6 lg:col-span-4"></div>
      </div>
    </>
  );
}

export default Projects;
