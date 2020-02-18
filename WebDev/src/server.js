var express = require("express");
var app = express();

app.get("/", function(req, res) {
  var sql = require("mssql");

  // config for your database
  var config = {
    user: "tanat",
    password: "1997",
    server: "LENOVO/SQLEXPRESS",
    database: "MyProject"
  };

  // connect to your database
  sql.connect(config, function(err) {
    if (err) console.log("err1");

    // create Request object
    var request = new sql.Request();
    console.log(request);

    // query to the database and get the records
    request.query("select * from LG", function(err, recordset) {
      if (err) console.log("err2");

      // send records as a response
      res.send(recordset);
    });
  });
});

var server = app.listen(5000, function() {
  console.log("Server is running..");
});
