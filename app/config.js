const config = {
  sitename: "My Portfolio",
  home: {
    title: "I'm",
    highlight: "Muen Yu",
    subTitle: "Nice to meet you!",
    social: {
      blog: "https://mashiro.best",
      linkedin: "https://www.linkedin.com/in/muen-yu-802b29228/",
      github: "https://github.com/MuenYu",
      leetcode: "https://leetcode.com/muenyu/",
    },
  },
  about: {
    title: "I'm",
    highlight: "Experienced",
    intro:
      "I am a person with a strong curiosity, and it propels me towards the field of technology. I can feel my passion and eagerness for new knowledge and open source. I believe that learning by doing is the best strategy for me, and I have gained a lot of practical skills through this approach. In the future, I want to become a full-stack developer who knows every detail in software development process.",
    experience: [
      {
        time: "2023.02 ~ 2024.12",
        role: "MSc Student in IT (Computer Science Major) at Queensland University of Technology",
        sections: [
          {
            section: "GPA",
            detail: "6.75/7",
          },
          {
            section: "Key Units",
            detail: "Data Structure and Advanced Algorithms, Web and Mobile Application Development, Network System, Object Oriented Design, Cloud Computing, Data Mining, Artificial Intelligence and Machine Learning, Principles of Software Security"
          },
          {
            section: "Achievements",
            detail: "2023 & 2024 Academic Excellence, QUT Executive Deans’ Commendation",
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
        time: "2015.09 ~ 2019.07",
        role: "BSc Student in Computer Science in Wuhan University of Science & Technology",
        sections: [
          {
            section: "GPA",
            detail: "3.16/4",
          },
          {
            section: "Award",
            detail:
              "National Excellent Award in the 8th Lan Qiao Cup National Software Development Contest (JAVA)",
          },
        ],
      },

    ],
  },
  skills: {
    title: "I'm",
    highlight: "Professional",
    skills: [
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
    qualifications: [
      {
        name: "AWS Certified Solutions Architect – Associate",
        img: "/saa.png",
        link: "https://www.credly.com/badges/8d20efe6-9220-42b6-beaa-79fc33e8f526",
        detail: "Expires on February 23, 2027",
      },
      {
        name: "AWS Certified Developer – Associate",
        img: "/dva.png",
        link: "https://www.credly.com/badges/a6a64eed-74fe-412b-b691-0c9683f1ca97",
        detail: "Expires on February 12, 2027",
      },
      {
        name: "PTE Academic English Test",
        img: "/pte.png",
        detail: "Overall: 83; Speaking: 90, Reading: 76, Writing: 86, Listening: 90",
      },
    ],
  },
  portfolio: {
    title: "I'm",
    highlight: "Productive",
    subTitle: "All Open Source Project I Involved",
    github: "muenyu",
  },
};

export default config;
