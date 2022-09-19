// tools
const fetchSwapi = require('../tools/fetchSwapi');
const { sortByKey } = require('../tools/utils');

const controller = {
  fetchPeople: async (req, res) => {
    let swapiData = await fetchSwapi('people');
    if (Object.keys(req.query).length > 0) {
      let sortKey = req.query.sortBy.toLocaleString();
      if (sortKey === 'name' || sortKey === 'mass' || sortKey === 'height') {
        let sortedData = sortByKey(swapiData, sortKey);
        res.send(sortedData);
      }
    } else {
      res.send(swapiData);
    }
  },
  fetchPlanets: async (req, res) => {
    // fetch people data
    let peopleData = await fetchSwapi('people');
    // fetch planets data
    let planetsData = await fetchSwapi('planets');
    // iterate over planets data
    for (let i = 0; i < planetsData.length; i++) {
      let planet = planetsData[i];
      // replace residents url with resident name
      planet.residents = planet.residents.map((resident) => {
        let residentName = peopleData.find((person) => person.url === resident);
        return residentName.name;
      });
    }

    res.send(planetsData);
  },
};

module.exports = controller;
