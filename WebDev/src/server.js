var express = require("express");
var http = require("http");
var WebSocket = require("ws");
var app = express();

app.get("/", function(req, res) {
  var sql = require("mssql");

  // config for your database
  var config = {
    user: "sa",
    password: "1234",
    server: "LENOVO\\SQLEXPRESS",
    database: "MyProject"
  };

  // connect to your database
  sql.connect(config, function(err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Plc", function(err, recordset) {
      if (err) console.log(err);

      // send records as a response
      res.send(recordset);
    });
  });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  // สร้าง connection
  ws.on("message", function incoming(message) {
    // รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
    console.log("received: %s", message);
  });
  ws.on("close", function close() {
    // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
    console.log("disconnected");
  });
  ws.send("init message to client");
  // ส่ง data ไปที่ client เชื่อมกับ websocket server นี้
});

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
