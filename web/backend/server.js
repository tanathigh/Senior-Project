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

app.get("/getEmp", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = "SELECT * FROM EMP WHERE Id = " + req.query.id;
    request.query(queryString, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

app.get("/getEmps", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = "select [firstname],[lastname],[tel],[email] from emp where res=1"
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

app.get("/getAlarm", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString =
      "SELECT TOP 100 [EventTime],[Message],[Severity],[ConditionActive] FROM [MyProject].[dbo].[ALM] ORDER BY [EventTime] DESC";
    request.query(queryString, function (err, recordset) {
      if (err) console.log(err);
      res.send(recordset);
    });
  });
});

app.post("/editProfile", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    let queryString = new String(
      "UPDATE emp SET firstname = '" +
        req.body.fname +
        "', lastname= '" +
        req.body.lname +
        "', tel='" +
        req.body.tel +
        "', res='" +
        req.body.res +
        "' WHERE email = '" +
        req.body.email +
        "';"
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
      "BEGIN IF NOT EXISTS (SELECT * FROM EMP WHERE email = '" +
        req.body.email +
        "') BEGIN " +
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
        "') END END"
    );
    request.query(queryString, function (err, recordset) {
      if (recordset.rowsAffected[0] == 1) {
        res.sendStatus(200);
      } else if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(300);
      }
    });
  });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
