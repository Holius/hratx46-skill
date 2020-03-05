const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

var pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

const connectedUsers = {};

io.on("connection", socket => {
  console.log("connected to" + socket);

  socket.on("login", user => {
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

app.post("/user/signup", async (req, res) => {
  const { email, password, username, location, bio, user_photo } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  pool.query(
    `INSERT INTO user (email, password, username, location, bio, user_photo) VALUES ('${email}', '${hashedPassword}', '${username}', '${location}','${bio}', '${user_photo}')`,
    function(error, results) {
      if (error) {
        res.status(500).send();
      } else {
        console.log("user signed up");
        req.session.id = uuidv4();
        req.session.username = username;
        res.status(201).send();
      }
    }
  );
});

app.post("/user/login", (req, res) => {
  const { password, username } = req.body;
  pool.query(`SELECT * FROM user WHERE username='${username}'`, async function(
    error,
    results
  ) {
    if (results[0] !== undefined) {
      if (await bcrypt.compare(password, results[0].password)) {
        console.log("it's a match");
        req.session.id = uuidv4();
        req.session.username = username;
        res.status(201).send();
      }
    } else {
      res.status(500).send();
    }
  });
});

app.get("/user/logout", (req, res) => {
  req.session = null;
  res.status(201).send();
});

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
