// constants:
const expiration = 24 * 60 * 60 * 1000; // the default cache expiration is 24 h


// check if the data in localstorage and validation
function lsFetch(key, expiration) {
  const data = localStorage.getItem(key);
  if (data) {
    const json = JSON.parse(data);
    const now = Date.now();
    if ("timestamp" in json && now - json.timestamp < expiration) return json;
  }
  return null;
}

// add timestamp to data and store in localstorage
function lsStore(key, data) {
  const now = Date.now();
  data.timestamp = now;
  localStorage.setItem(key, JSON.stringify(data));
  return data;
}

// the general method to fetch data for UI
// - url: the api url
// - options: fetch options
// - key: the key of localstorage
// - trimCallback: how to trim data from API
async function generalJsonFetch(url, options, key, trimCallback) {
    // load from localstorage first
    let data = lsFetch(key,expiration);
    if (data) return data;

    // fetch from API
    const resp = await fetch(url, options);
    if (!resp.ok) throw new Error(`API error: ${resp.status}`);
    data = await resp.json();
    return lsStore(key, trimCallback(data));
}

export default generalJsonFetch;