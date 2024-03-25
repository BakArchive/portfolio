import {
  IconBrandLinkedin,
  IconBrandLeetcode,
  IconArchive,
  IconBrandGithub,
} from "@tabler/icons-react";

function Social({ social, className }) {
  const iconMap = {
    linkedin: <IconBrandLinkedin />,
    leetcode: <IconBrandLeetcode />,
    github: <IconBrandGithub />,
    blog: <IconArchive />,
  };

  return (
    <div className={`flex flex-wrap gap-5 ${className}`}>
      {Object.keys(social).map((key, index) => (
        <a href={social[key]} target="_blank" key={index} className="p-1 rounded-full hover:bg-base-300">
          {iconMap[key]}
        </a>
      ))}
    </div>
  );
}

export default Social;
