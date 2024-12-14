export async function fetchRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return trim(await res.json());
}

function trim(data: any) {
  const repos = [];
  for (const item of data) {
    repos.push({
      name: item.name,
      description: item.description,
      role: item.fork ? "Branch Maintainer" : "Project Owner",
      link: item.html_url,
      tags: item.topics,
    });
  }
  return repos;
}
