import generalJsonFetch from "./common.js";

const api = "https://api.github.com";

const profile = async (username) => {
  const url = `${api}/users/${username}`;
  const key = "github-profile";

  function trim(origin) {
    return {
      name: origin.name,
      avatar: origin.avatar_url,
      link: origin.html_url,
      repos: origin.public_repos,
      followers: origin.followers,
      following: origin.following,
      created: origin.created_at,
    };
  }

  return generalJsonFetch(url, {}, key, trim);
};

const projects = async (username) => {
  const url = `${api}/users/${username}/repos`;
  const key = "github-repos";

  function trim(origin) {
    const data = {
      repos: [],
    };
    for (const item of origin) {
      data.repos.push({
        name: item.name,
        description: item.description,
        role: item.fork ? "Branch Maintainer" : "Project Owner",
        techniques: item.topics,
        link: item.html_url,
      });
    }
    return data;
  }

  return generalJsonFetch(url, {}, key, trim);
};

export { profile, projects };
