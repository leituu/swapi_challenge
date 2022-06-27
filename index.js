const express = require("express");
const fetchSwapi = require("./fetchSwapi");
const { sortByKey } = require("./utils");

// instantiate express
const app = express();

app.get("/api/people", async (req, res) => {
  let swapiData = await fetchSwapi();
  let sortKey = req.query.sortBy.toLocaleString();
  if (sortKey === "name" || sortKey === "mass" || sortKey === "height") {
    let sortedData = sortByKey(swapiData, sortKey);
    res.send(sortedData);
  } else {
    res.send(swapiData);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
