const fetch = require("node-fetch");

async function fetchSwapi() {
  let loops;
  let page = 1;
  let results = [];
  const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
  if (response.status === 200) {
    const data = await response.json();
    loops = Math.ceil(data.count / data.results.length);
    results = [...data.results];
    page++;
  }

  for (let i = page; i <= loops; i++) {
    const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
    if (response.status === 200) {
      const data = await response.json();
      results = [...results, ...data.results];
      page++;
    }
  }
  console.log(results.length);
  return results;
}

fetchSwapi();

module.exports = fetchSwapi;
