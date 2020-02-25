const express = require("express");
const http = require("http");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", function(req, res) {
  var sql = require("mssql");
  var config = {
    user: "sa",
    password: "1234",
    server: "LENOVO\\SQLEXPRESS",
    database: "MyProject"
  };
  sql.connect(config, function(err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from plc", function(err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
