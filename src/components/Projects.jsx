import Title from "/src/components/Title.jsx";
import ProjectCard from "/src/components/ProjectCard.jsx";
import Anchor from "/src/components/Anchor.jsx";

function Projects() {
  const projects = [
    {
      name: "QQBot",
      link: "https://github.com/MuenYu/QQBot",
      role: "As the project owner",
      description:
        "An open-source project providing a configurable bot for QQ (a famous social media in China), can send configured text/image message or the content fetched from the internet when the specified condition triggered.",
      techniques: ["Golang", "OPQ-Bot", "Viper"],
    },
    {
      name: "WOLGoWeb",
      link: "https://github.com/MuenYu/WolGoWeb",
      role: "As a branch maintainer",
      description:
        "An open-source project providing Wake-On-Lan services with simple UI, which is zero-configuration and easy to use. The UI is mobile-adapted, so you can get native-like experience. Docker image is provided.",
      techniques: ["Golang", "Gin", "JavaScript", "Docker"],
    },
    {
      name: "Sakura",
      link: "https://github.com/MuenYu/halo-theme-sakura",
      role: "As a collaborator",
      description:
        "An anime style blog theme for WordPress and Halo blog system with complex stylesheet and attractive animations. I involved both projects for WordPress & halo and committed some codes for bugfix.",
      techniques: ["JavaScript", "PHP", "Java", "FreeMarker"],
    },
    {
      name: "HomeLab",
      role: "As my personal interests",
      description:
        "A self-hosted tower server for personal use started from the beginning of 2022. With the connectivity of Cloudflare, I deployed services and tools on the server to improve my efficiency and protect my data security.",
      techniques: ["K3s", "ZFS", "OpenVPN", "CF-Tunnel", "Bash"],
    },
  ];
  return (
    <section>
      <Anchor id="Projects" />

      <Title text="My" bold="Projects" />
      <div className="grid grid-cols-12 px-6 lg:px-3 gap-4 md:gap-2 lg:gap-3">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            name={proj.name}
            link={proj.link}
            role={proj.role}
            description={proj.description}
            techniques={proj.techniques}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
