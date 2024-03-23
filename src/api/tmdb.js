import generalJsonFetch from "./common.js";

const key = "tmdb";
const api = "https://api.themoviedb.org";
const version = 3;
const lang = "en-US";
const page = 1;
const secret = "76fa1b7c84b910b5a84ef561429dd0dc";

const tmdb = async (list) => {
  const url = `${api}/${version}/list/${list}?language=${lang}&page=${page}&api_key=${secret}`;
  return generalJsonFetch(url, {}, key, trim);
};

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

export default tmdb;
