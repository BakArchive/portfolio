import {
  IconBrandLinkedin,
  IconBrandLeetcode,
  IconArchive,
  IconBrandGithub,
} from "@tabler/icons-react";
import { ReactNode } from "react";

// Define a type for the social object
interface SocialLink {
  linkedin?: string;
  leetcode?: string;
  github?: string;
  blog?: string;
}

// Define a type for the icon map to ensure type safety
const iconMap: Record<keyof SocialLink, ReactNode> = {
  linkedin: <IconBrandLinkedin />,
  leetcode: <IconBrandLeetcode />,
  github: <IconBrandGithub />,
  blog: <IconArchive />,
};

/**
 * The common social link component, according to the social object to match icon
 * @param {SocialProps} props
 * @returns JSX.Element
 */
interface SocialProps {
  social: SocialLink;
  className?: string; // Make className optional
}

function Social({ social, className }: SocialProps) {
  return (
    <div className={`flex flex-wrap gap-5 ${className || ""}`}>
      {Object.entries(social).map(([key, value]) => (
        <a
          href={value}
          target="_blank"
          key={key} // Use the key from the object as the key
          className="p-1 rounded-full hover:bg-base-300"
          rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
        >
          {iconMap[key as keyof SocialLink]} {/* Type assertion here */}
        </a>
      ))}
    </div>
  );
}

export default Social;