import generalJsonFetch from "./common.js";

const api = "https://api.github.com";

/**
 * get github profile from github rest api
 * @param {string} username github username
 * @returns promise of github user profile
 */
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

/**
 * get public repo list of github user
 * @param {string} username github username
 * @returns promise of public repo list
 */
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
        link: item.html_url,
      });
    }
    return data;
  }

  return generalJsonFetch(url, {}, key, trim);
};

const projectDetail = async (username, projectName) => {
  const url = `${api}/repos/${username}/${projectName}`
  const key = projectName

  function trim(origin) {
    return {
      name: origin.name,
      role: origin.fork ? "Branch Maintainer" : "Project Owner",
      link: origin.html_url,
      description: origin.description,
      license: origin.license? origin.license.name:null,
      topics: origin.topics,
      star: origin.stargazers_count,
    }
  }

  return generalJsonFetch(url, {}, key, trim)
};

export { profile, projects, projectDetail };
