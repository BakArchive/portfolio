function ProjectCard({ name, link, role, description, techniques }) {
  return (
    <div className="rounded-xl bg-white border border-slate-300 col-span-12 md:col-span-6 lg:col-span-4">
      <div className="flex flex-col justify-between p-5 w-full h-full">
        <div>
          {link !== undefined ? (
            <a
              href={link}
              target="_blank"
              className="text-2xl font-medium"
            >
              {name}
            </a>
          ) : (
            <h2 className="text-2xl font-medium">{name}</h2>
          )}
          <p className="text-sm mb-2">{role}</p>
          <p className="text-sm mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techniques.map((technique, index) => (
            <p key={index} className="text-xs border border-solid rounded p-1">
              {technique}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
