const express = require("express");
const routers = require("./routes");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.use(routers);

app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}.`);
});
