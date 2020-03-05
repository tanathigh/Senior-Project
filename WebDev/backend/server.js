const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const sql = require("mssql");
const config = {
  user: "sa",
  password: "1234",
  server: "LENOVO\\SQLEXPRESS",
  database: "MyProject"
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
    extended: true
  })
);

app.get("/getData", function(req, res) {
  sql.connect(config, function(err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from work", function(err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

app.get("/getHistory", function(req, res) {
  sql.connect(config, function(err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = "SELECT Signal_Index,";
    queryString += "Sample_TDate_1, Sample_Value_1";
    var i;
    for (i = 2; i < 30; i++) {
      queryString += ", Sample_TDate_" + i;
      queryString += ", Sample_Value_" + i;
    }
    queryString += " FROM LG";
    console.dir(queryString);
    request.query(queryString, function(err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

app.post("/signIn", function(req, res) {
  sql.connect(config, function(err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = new String(
      "SELECT * FROM emp WHERE email = '" +
        req.body.email +
        "' AND password = '" +
        req.body.password +
        "'"
    );
    request.query(queryString, function(err, recordset) {
      if (err || recordset.recordset.length < 1) {
        res.sendStatus(404);
      } else {
        res.send(Object.values(recordset.recordset[0]));
      }
    });
  });
});

app.post("/signUp", function(req, res) {
  sql.connect(config, function(err) {
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
    request.query(queryString, function(err, recordset) {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

app.post("/updateSV", function(req, res) {
  sql.connect(config, function(err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = new String(
      "UPDATE work SET sv1 = '" +
        req.body.sv1 +
        "', sv2 = '" +
        req.body.sv2 +
        "', sv3 = '" +
        req.body.sv3 +
        "'WHERE id = 1"
    );
    request.query(queryString, function(err, recordset) {
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
