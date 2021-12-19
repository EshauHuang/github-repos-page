require("dotenv").config();

const request = require("request");
const express = require("express");
const port = process.env.PORT;
const server = express();

server.get("/repos", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { page } = req.query;
  request(
    {
      method: "GET",
      url: `https://api.github.com/users/FelixHuang214/repos?page=${page}&per_page=6`,
      headers: {
        "user-agent": "node.js",
        Authorization: `token ${process.env.ACCESS_TOKEN}`,
      },
    },
    (error, response, body) => {
      res.send(body);
    }
  );
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
