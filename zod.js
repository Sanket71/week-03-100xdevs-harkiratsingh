const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.query.kidneys;

  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000);
