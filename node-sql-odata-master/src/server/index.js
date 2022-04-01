const express = require("express");
const cors = require("cors");
const sql = require("mssql");

import MyODataServer from "./server";
import dbConfig from "./dbConfig";
import "@babel/polyfill";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api", MyODataServer.create());

app.listen(5000, async () => {
  console.log(`Server running at port 5000`);

  global.connection = await sql.connect(dbConfig);
});
