import {
  IconArchive,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

const year: number = new Date().getFullYear();

export default function FootNote() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-evenly">
      <p>Designed & Crafted by Muen Yu</p>
      <p>CopyRight ©{year} All rights reserved</p>
      <div className="flex gap-5">
        <a href="" target="_blank">
          <IconArchive stroke={1} />
        </a>
        <a href="" target="_blank">
          <IconBrandLinkedin stroke={1} />
        </a>
        <a href="" target="_blank">
          <IconBrandGithub stroke={1} />
        </a>
        <a href="" target="_blank">
          <IconBrandLeetcode stroke={1} />
        </a>
      </div>
    </div>
  );
}
