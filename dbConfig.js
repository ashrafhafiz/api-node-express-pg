const Pool = require("pg").Pool;

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "api1_node_express_pg",
  password: "example",
  port: 5432,
});

module.exports = pool;
