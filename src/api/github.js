import generalJsonFetch from "./common.js";

const api = "https://api.github.com";

const profile = async (username) => {
    const url = `${api}/users/${username}`;
    const key = "github-profile";

    function trim (origin) {
        return {
            name: origin.name,
            avatar: origin.avatar_url,
            url: origin.html_url,
            repos: origin.public_repos,
            followers: origin.followers,
            following: origin.following,
            created: origin.created_at,
        };
    }

    return generalJsonFetch(url,{},key,trim);
}

const projects = async (username) => {

}

export {profile};