const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const sql = require("mssql");
const config = {
  user: "sa",
  password: "1234",
  server: "LENOVO\\SQLEXPRESS",
  database: "MyProject",
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/getData", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = "SELECT * FROM LG WHERE ID = (SELECT MAX(ID)  FROM LG)";
    request.query(queryString, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

app.get("/getHistory", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString =
      "SELECT TOP 100 TIMESTAMP,pv1,pv2,pv3 FROM LG ORDER BY Id DESC";
    request.query(queryString, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

app.post("/signIn", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = new String(
      "SELECT * FROM emp WHERE email = '" +
        req.body.email +
        "' AND password = '" +
        req.body.password +
        "'"
    );
    request.query(queryString, function (err, recordset) {
      if (err || recordset.recordset.length < 1) {
        res.sendStatus(404);
      } else {
        res.send(Object.values(recordset.recordset[0]));
      }
    });
  });
});

app.post("/signUp", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = new String(
      "INSERT INTO emp (firstname, lastname, tel, email, password) VALUES ('" +
        req.body.fname +
        "','" +
        req.body.lname +
        "','" +
        req.body.tel +
        "','" +
        req.body.email +
        "','" +
        req.body.password +
        "')"
    );
    request.query(queryString, function (err, recordset) {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
