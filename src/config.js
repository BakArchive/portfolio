const config = {
  // the length of nav should be the same as the number of section, which is 4
  nav: ["Intro", "Skills", "Projects", "Experience"],
  // the intro section
  intro: {
    // the prefix of your title
    title: "Hi, I'm",
    // the bold part of your title
    boldTitle: "Muen",
    // personal introduction, a paragraph about yourself
    description:
      "I am a person with a strong curiosity, and it propels me towards the field of technology. I can feel my passion and eagerness for new knowledge and open source. I believe that learning by doing is the best strategy for me, and I have gained a lot of practical skills through this approach. In the future, I want to become a full-stack developer who knows every detail in software development process.",
    // links related to you
    links: [
      {
        name: "Blog",
        link: "https://mashiro.best",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/muen-yu-802b29228/",
      },
      {
        name: "GitHub",
        link: "https://github.com/MuenYu",
      },
      {
        name: "LeetCode",
        link: "https://leetcode.com/muenyu/",
      },
    ],
  },
  // your skill tags
  skills: {
    title: "My",
    boldTitle: "Skills",
    // your skill tags, they will be displayed in blocks
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "C#",
      "Figma",
      "Git",
      "Python",
      "Golang",
      "Flask",
      "Gin",
      "React",
      "Vue",
      "Vite",
      "Bootstrap",
      "Tailwind",
      "MySQL",
      "Redis",
      "AWS",
      "Linux",
      "Docker",
    ],
  },
  projects: {
    title: "My",
    boldTitle: "Projects",
    // your projects items, they will be shown in cards
    items: [
      {
        // project name
        name: "QQBot",
        // project link, hyperlink attached to the title
        link: "https://github.com/MuenYu/QQBot",
        // subtitle of your project
        role: "As the project owner",
        // description about your project
        description:
          "An open-source project providing a configurable bot for QQ (a famous social media in China), can send configured text/image message or the content fetched from the internet when the specified condition triggered.",
        // the technique you use
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
    ],
  },
  experience: {
    title: "My",
    boldTitle: "Experience",
    items: [
      {
        // time line
        time: "2015.09 ~ 2019.07",
        // experience title
        role: "BSc Student in Computer Science in Wuhan University of Science & Technology",
        // what's your achievement during that time, describe them in key-value format
        sections: [
          {
            section: "GPA",
            detail: "3.16/4",
          },
          {
            section: "Award",
            detail:
              "At year 3, I was a member of group that represents the university to take part in the 8th Lan Qiao Cup National Software Development Contest, and won the National Excellent Award in that match.",
          },
        ],
      },
      {
        time: "2018.05 ~ 2018.09",
        role: "Java Development Engineer at Wuhan Keguan Information Co., Ltd",
        sections: [
          {
            section: "Experience",
            detail:
              "As a member of the development team, I participated in demand meetings, discussed requirements with stakeholders from Hubei Hanxin Power Station, LTD, and organized requirement lists. Utilized IBM Maximo's workflow component and Java EE for secondary development. Tested new functions manually, addressed user feedback issues, and wrote the operation manual for the subsystem. Organized training/QA sessions for power plant staff. Deployed the service to a physical server, configured daily backups, and performed rollbacks when necessary.",
          },
          {
            section: "Skills Developed",
            detail:
              "Developed expertise in Java, Maximo, WebLogic, and Oracle Database. Enhanced skills in demand analysis, secondary development using Java EE, manual testing, technical writing for operation manuals, and deployment on physical servers.",
          },
          {
            section: "Achievements",
            detail:
              "Successfully implemented a high-risk operation approval workflow subsystem for Hubei Hanxin Power Station, LTD. Organized efficient training sessions for power plant staff, ensuring seamless adoption of the new system. Configured daily backups and rollback procedures to maintain system integrity.",
          },
        ],
      },
      {
        time: "2021.02 ~ 2022.07",
        role: "Game Server Development Engineer at SAGI GAMES Co., LTD",
        sections: [
          {
            section: "Experience",
            detail:
              "I have extensive experience as a backend developer, specializing in the development and maintenance of various game servers, control panels, internal systems, and websites. I have successfully implemented a wide range of features and functionalities, collaborated with stakeholders to gather requirements, and deployed projects on cloud servers.",
          },
          {
            section: "Skills Developed",
            detail:
              "Through my roles, I have honed my skills in backend development using languages such as Golang, Python, and frameworks like Flask and Gin. I have expertise in database management with MySQL and Redis, as well as containerization using Docker and Kubernetes. Additionally, I have experience in API development, system integration, and deployment on cloud platforms.",
          },
          {
            section: "Achievements",
            detail: `I have successfully developed and deployed game server APIs for popular games like "Back into Space" and mini game servers. I have implemented key features such as Google account login, in-app purchases, Vivo account login, and WeChat message push. Furthermore, I have containerized these projects, configured load balancing, and maintained multiple server instances. My achievements also include developing internal systems for personnel management and creating official websites for the company and landing pages for games.`,
          },
        ],
      },
      {
        time: "2023.02 ~ Present",
        role: "MSc Student in IT (Computer Science Major) at Queensland University of Technology",
        sections: [
          {
            section: "GPA",
            detail: "6.75/7",
          },
          {
            section: "Certificate",
            detail:
              "To prepare my future career in Australia, I leveraged the summer vacation to obtain AWS Solution Architect Associate and AWS Certified Developer Associate through self-taught with my existing experience.",
          },
        ],
      },
    ],
  },
};

export default config;
