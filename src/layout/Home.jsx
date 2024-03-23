import ColorFont from "@/components/ColorFont";
import {
  IconArchive,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
} from "@tabler/icons-react";

function Home() {
  const links = [
    {
      icon: <IconArchive />,
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
    <div className="flex flex-col md:flex-row gap-20 md:gap-0">
      <div className="md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
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
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="m-auto md:w-1/3 lg:w-1/2 flex items-center justify-center">
        <img className="w-2/3 min-w-52 md:min-w-72 md:w-full" src="/hero.png" />
      </div>
    </div>
  );
}

export default Home;
