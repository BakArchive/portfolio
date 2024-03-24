import { IconLink } from "@tabler/icons-react";

function ProjectCard({ name, link, role, description, techniques, style }) {
  return (
    <div className={`relative rounded-xl bg-white border border-slate-300 flex flex-col justify-between p-5 ${style}`}>
        <div>
          <h2 className="text-2xl font-medium">{name}</h2>
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
        <a href={link} target="_blank" className="absolute top-5 right-5"><IconLink /></a>
    </div>
  );
}

export default ProjectCard;
