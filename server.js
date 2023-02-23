var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
const port = 3000;

app.post("/", jsonParser, (req, res) => {
  console.log(req.body);
  const body = req.body;
  const data = `'${body.key}':{'en':'${body.en}','ar':'${body.ar}'},`;
  // const data = { key: { en: en, ar: ar } };
  fs.appendFile("localization.json", JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
    res.status = 200;
    res.send("Done");
  });
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
