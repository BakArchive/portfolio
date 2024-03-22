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

export {lsFetch, lsStore};