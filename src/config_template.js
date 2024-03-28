const config = {
  // the title of your site, it will show on browser tab
  sitename: "Portfolio",
  // the configuration of home page
  home: {
    // title of the page
    title: "Title",
    // title of the page, but gradient highlight
    highlight: "Highlight Title",
    // the sub title of home page
    subTitle: "Subtitle",
    // your social media, currently, only support: blog, linkedin, github and leetcode
    // if you only want some of them, you can delete unused items
    social: {
      blog: "https://example.com",
      linkedin: "https://example.com",
      github: "https://example.com",
      leetcode: "https://example.com",
    },
  },
  // the configuration of about page
  about: {
    // title of the page
    title: "Title",
    // title of the page, but gradient highlight
    highlight: "Highlight Title",
    // you can introduce different aspects about yourself here
    // one aspect in one section
    sections: [
      {
        title: "section title",
        type: 0, // 0 normal, 1 leetcode, 2 tmdb
        content: "section content",
      },
      {
        title: "LeetCoder",
        type: 1, // 0 normal, 1 leetcode, 2 tmdb
        content: "section content",
        username: "someone", // replace it to your leetcode name
      },
      {
        title: "TMDB",
        type: 2, // 0 normal, 1 leetcode, 2 tmdb
        content: "section content",
        list: "", // TMDB list that you want to show here
        // It will expose your TMDB secret, so it's better to avoid to use this feature
      },
    ],
  },
  // the configuration of resume page
  resume: {
    // title of the page
    title: "Title",
    // title of the page, but gradient highlight
    highlight: "Highlight Title",
    // a paragraph for self introduction
    intro: "self introduction content",
    // your skill tags
    skills: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
    // your working/education experience
    experience: [
      {
        // time period
        time: "2020.01 ~ 2024.03",
        // experience title
        role: "As a undergraduate student",
        // what's your achievement during that time, describe them in key-value format
        sections: [
          // things you want to emphasize in this experience
          // using key-value format
          {
            section: "GPA",
            detail: "3/4",
          },
        ],
      },
    ],
    // all your qualifications
    qualifications: [
      {
        // the name of the qualification
        name: "Demo Certificate",
        // the link of the qualification as proof, optional
        link: "https://www.google.com",
        // the description/detail of the qualification
        detail: "It's a demo certificate",
      },
    ],
  },
  // the configuration for portfolio page
  portfolio: {
    // title of the page
    title: "Title",
    // title of the page, but gradient highlight
    highlight: "Highlight Title",
    // the section title for your repos
    subTitle: "subtitle for your portfolio",
    github: "someone",
  },
};

export default config;
