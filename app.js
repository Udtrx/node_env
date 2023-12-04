const express = require("express");
const app = express();
require("dotenv").config();

console.log(`The name is ${process.env.MY_NAME}`);
console.log(`The city is ${process.env.MY_CITY}`);
console.log(`The language is ${process.env.MY_LANGUAGE}`);

const welcome = (req, res) => {
  res.send(
    `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}.`
  );
};

app.get("/", welcome);

const port = 8080;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
