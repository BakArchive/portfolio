import ColorFont from "@/components/ColorFont";
import { IconPencil, IconBrandLinkedin, IconBrandGithub, IconBrandLeetcode } from "@tabler/icons-react";

function Home() {
  const links = [
    {
      icon: <IconPencil />,
      link: "https://mashiro.best",
    },
    {
      icon: <IconBrandLinkedin />,
      link: "https://www.linkedin.com/in/muen-yu-802b29228/",
    },
    {
      icon: <IconBrandGithub />,
      link: "https://github.com/MuenYu",
    },
    {
      icon: <IconBrandLeetcode />,
      link: "https://leetcode.com/muenyu/",
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-center gap-5">
      <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl">
        Hi, I'm <ColorFont text="Muen Yu" />
      </h1>
      <h2 className="font-medium text-3xl md:text-5xl lg:text-5xl">
        Nice to meet you!
      </h2>
      <div className="mt-5 flex flex-wrap gap-5">
        {links.map((item, index) => (
          <a
            className="text-xl text-slate-500 hover:bg-neutral-200 rounded-full p-1"
            key={index}
            href={item.link}
            target="_blank"
          >{item.icon}</a>
        ))}
      </div>
    </div>
  );
}

export default Home;
