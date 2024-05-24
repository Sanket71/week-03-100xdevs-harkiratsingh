const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " Kidneys");
});

app.use(function (err, req, res, next) {
  res.send("Sorry something up with our server");
});

app.listen(3000);
