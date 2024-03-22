import {lsFetch, lsStore} from "@/api/common";

const api = "https://leetcodestats.cyclic.app/";
const key = "leetcode";
const expiration = 60 * 60 * 1000; // 1h

const leetcode = async (username) => {
  // check if in localstorage
  let data = lsFetch(key,expiration);
  if (data) {
    return data;
  }

  // fetch data from API
  const resp = await fetch(`${api}${username}`);
  if (!resp.ok) throw new Error(`API error: ${resp.status}`);
  data = await resp.json();
  // store in localstorage
  return lsStore(key,data);
};

export default leetcode;
