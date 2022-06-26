const express = require("express");
const fetchSwapi = require("./fetchSwapi");

// instantiate express
const app = express();

app.get("/api/people", async (req, res) => {
  const swapiData = await fetchSwapi();
  res.send(swapiData);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
