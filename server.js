const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
require("dotenv").config();

var pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

let connectedUsers = {};

io.on("connection", socket => {
  console.log("connected to" + socket);

  socket.on("log", user => {
    console.log(socket.id, user);
    connectedUsers[user] = { socketId: socket.id, username: user };

    console.log(connectedUsers);

    socket.on("private", (target, message) => {
      console.log("hiii");
      if (connectedUsers[target]) {
        console.log("hi");
        const id = connectedUsers[target].socketId;
        io.to(`${id}`).emit("pm", message);
      }
    });

    // socket.on("disconnect", () => {
    //   delete connectedUsers[username];
    //   console.log("disconnected" + username);
    // });
  });
});

app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["nvalsdjflkasdjfiow"]
  })
);

app.route("/test").get((req, res) => {
  pool.query(`SELECT * FROM test`, function(error, results) {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
});

server.listen(port, () => console.log("port " + port + " is on"));
