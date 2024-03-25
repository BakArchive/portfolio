const config = {
  home: {
    name: "Muen Yu",
    subTitle: "Nice to meet you!",
    social: [
      {
        icon: "ti-archive",
        link: "https://mashiro.best",
      },
      {
        icon: "ti-brand-linkedin",
        link: "https://www.linkedin.com/in/muen-yu-802b29228/",
      },
      {
        icon: "ti-brand-github",
        link: "https://github.com/MuenYu",
      },
      {
        icon: "ti-brand-leetcode",
        link: "https://leetcode.com/muenyu/",
      },
    ],
  },
  about: {
    name: "multifaceted",
    sections: [
      {
        title: "Blogger",
        type: 0, // 0 normal, 1 leetcode, 2 tmdb
        content:
          "Over the years since 2017, my blog has been a canvas for sharing my evolving experiences and thoughts, capturing a journey of personal growth and exploration. Each post reflects a chapter of my life, offering insights, reflections, and moments that have shaped me along the way.",
      },
      {
        title: "HomeLab Player",
        type: 0, // 0 normal, 1 leetcode, 2 tmdb
        content:
          "In early 2022, I built my own personal server at my home. It serves storage based on ZFS and self-hosted services managed by K3s, so I can deploy various docker images upon it. With the connectivity of Cloudflare, I can access them everywhere to improve my efficiency and protect my data security. Now, it plays an important role in my daily life and I am satisfied with how it works.",
      },
      {
        title: "LeetCoder",
        type: 1, // 0 normal, 1 leetcode, 2 tmdb
        content:
          "The most attractive thing to me on LeetCode is when someone's algorithm effectively solving a question which made me headache, which always blows my mind. Now I try to post my own solutions on LeetCode to reinforce my understanding to them.",
        username: "muenyu",
      },
      {
        title: "Anime Fan",
        type: 2, // 0 normal, 1 leetcode, 2 tmdb
        content:
          "I appreciate the artistry and storytelling found in Japanese anime.",
        list: "8294767",
        secret: "76fa1b7c84b910b5a84ef561429dd0dc",
      },
    ],
  },
  resume: {
    name: "professional",
    intro:
      "I am a person with a strong curiosity, and it propels me towards the field of technology. I can feel my passion and eagerness for new knowledge and open source. I believe that learning by doing is the best strategy for me, and I have gained a lot of practical skills through this approach. In the future, I want to become a full-stack developer who knows every detail in software development process.",
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
    experience: [
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
    qualifications: [
      {
        name: "AWS Certified Solutions Architect – Associate",
        link: "https://www.credly.com/badges/8d20efe6-9220-42b6-beaa-79fc33e8f526",
        detail: "Pass, Expires on February 23, 2027",
      },
      {
        name: "AWS Certified Developer – Associate",
        link: "https://www.credly.com/badges/a6a64eed-74fe-412b-b691-0c9683f1ca97",
        detail: "Pass, Expires on February 12, 2027",
      },
      {
        name: "PTE Academic English Test",
        detail: "Overall: 66 Listening:62 Speaking:81 Reading:68 Writing:64",
      },
    ],
  },
  portfolio: {
    name: "productive",
    subTitle: "Here are all Open Source Project I Involved",
    github: "muenyu",
  },
};

export default config;
