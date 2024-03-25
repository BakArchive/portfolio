function ProjectCard({ name, link, role, description, techniques, className }) {
  return (
    <div
      className={`rounded-xl bg-base-100 hover:bg-base-200 border border-slate-300 flex flex-col justify-between p-5 ${className || ""}`}
    >
      <div>
        <a href={link} target="_blank" className="text-2xl font-medium">
          <i className="ti ti-link"></i> {name}
        </a>
        <p className="mb-2">{role}</p>
        <p className="mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {techniques.map((technique, index) => (
          <p key={index} className="text-sm border border-solid rounded p-1">
            {technique}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
