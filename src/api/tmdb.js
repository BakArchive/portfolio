import generalJsonFetch from "./common.js";

const key = "tmdb";
const api = "https://api.themoviedb.org";
const version = 3;
const lang = "en-US";
const page = 1;

/**
 * fetch list of anime/tv drama/movie from tmdb
 * @param {string} list the list you want to fetch from tmdb
 * @param {string} secret API secret
 * @returns 
 */
const tmdb = async (list, secret) => {
  const url = `${api}/${version}/list/${list}?language=${lang}&page=${page}&api_key=${secret}`;
  return generalJsonFetch(url, {}, key, trim);
  
  function trim(origin) {
    const data = { items: [] };
    for (const item of origin.items) {
      data.items.push({
        name: item.name,
        link: `https://www.themoviedb.org/tv/${item.id}`,
        poster: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
      });
    }
    return data;
  }
};


export default tmdb;
