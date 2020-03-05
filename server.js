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

const getUserIds = (username, target, cb) => {
  pool.query(
    `SELECT user_id FROM user WHERE username='${username}' OR username='${target}'`,
    function(error, results) {
      if (error) {
        console.log(error);
      } else {
        cb(results[0].user_id, results[1].user_id);
      }
    }
  );
};

const insertMessage = (message, bool, username, target) => {
  getUserIds(username, target, (userA, userB) => {
    pool.query(
      `INSERT INTO message (message_text, visited, from_username, to_username) VALUES ('${message}', '${bool}', '${userA}', '${userB}')`,
      function(error, results) {
        if (error) {
          console.log(error);
        } else {
          console.log("inserted into message", results);
        }
      }
    );
  });
};

io.on("connection", socket => {
  console.log("connected to" + socket);

  socket.on("login", (user, target) => {
    console.log(target);
    socket.username = user;
    connectedUsers[user] = {
      socketId: socket.id,
      username: user,
      chatroom: target
    };

    socket.on("mount", target => {
      const username = socket.username;
      connectedUsers[username].chatroom = target;
      console.log("mount", connectedUsers);
    });

    socket.on("unmount", () => {
      const username = socket.username;
      connectedUsers[username].chatroom = null;
      console.log("unmount", connectedUsers);
    });

    console.log(connectedUsers);

    socket.on("private", (target, message) => {
      const username = socket.username;
      console.log(username, "username", target, "target");
      if (connectedUsers[target]) {
        const { chatroom, socketId } = connectedUsers[target];
        if (chatroom !== username) {
          // insertMessage(message, false, username, target);
          console.log("1: wrong chatroom");
        } else {
          io.to(`${socketId}`).emit("pm", message);
          // insertMessage(message, true, username, target);
          console.log("2: connected to the same chatroom");
        }
      } else {
        // insertMessage(message, false, username, target);
        console.log("3: target user is not connected");
      }
    });

    // message_text TEXT,
    // visited BOOLEAN,
    // from_username INT NOT NULL,
    // to_username INT NOT NULL,

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
    console.log(results);
    if (results[0] !== undefined) {
      if (await bcrypt.compare(password, results[0].password)) {
        console.log("it's a match");
        const id = results[0].user_id;
        req.session.id = uuidv4();
        req.session.username = username;

        res.status(200).send({ username, id });
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

const setVisited = (userA, userB) => {
  pool.query(
    `UPDATE message SET visited=true WHERE from_username='${userA}' AND to_username='${userB}' OR from_username='${userB}' AND to_username='${userA}' ORDER BY message_date ASC`,
    function(error, results) {
      if (error) {
        res.status(500).send();
      }
    }
  );
};

app.post("/chat/history", (req, res) => {
  const { username, target } = req.body;
  getUserIds(username, target, (userA, userB) => {
    pool.query(
      `SELECT * FROM message WHERE from_username='${userA}' AND to_username='${userB}' OR from_username='${userB}' AND to_username='${userA}' ORDER BY message_date ASC`,
      function(error, results) {
        if (results) {
          setVisited(userA, userB);
          res.status(200).send(results);
        } else {
          console.log(error);
          res.status(500).send();
        }
      }
    );
  });
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
