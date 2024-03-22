import { lsFetch, lsStore } from "./common.js";

const key = "TMDB";
const api = "https://api.themoviedb.org";
const version = 3;
const lang = "en-US";
const page = 1;
const secret = "76fa1b7c84b910b5a84ef561429dd0dc";
const expiration = 60 * 60 * 1000; // 1h

const tmdb = async (list) => {
  // check if in localstorage
  let data = lsFetch(key, expiration);
  if (data) {
    return data;
  }

  // fetch data from API
  const resp = await fetch(
    `${api}/${version}/list/${list}?language=${lang}&page=${page}&api_key=${secret}`
  );
  if (!resp.ok) throw new Error(`API error: ${resp.status}`);
  data = await resp.json();
  // store in localstorage
  return lsStore(key, dataSlim(data));
};

function dataSlim(origin) {
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
