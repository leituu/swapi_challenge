const fetch = require("node-fetch");

async function fetchSwapi(endpoint) {
  // used in the for loop for recursive fetching
  let loops;
  let page = 1;
  // used to store the data from the api
  let results = [];
  const response = await fetch(
    `https://swapi.dev/api/${endpoint}?page=${page}`
  );
  if (response.status === 200) {
    const data = await response.json();
    loops = Math.ceil(data.count / data.results.length);
    results = [...data.results];
    page++;
  }

  for (let i = page; i <= loops; i++) {
    const response = await fetch(
      `https://swapi.dev/api/${endpoint}?page=${page}`
    );
    if (response.status === 200) {
      const data = await response.json();
      results = [...results, ...data.results];
      page++;
    }
  }
  return results;
}

module.exports = fetchSwapi;
