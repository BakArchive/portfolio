import {
  IconArchive,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

const year: number = new Date().getFullYear();

export default function FootNote() {
  return (
    <div className="flex justify-evenly gap-6">
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
