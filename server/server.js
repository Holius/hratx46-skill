const {
  app,
  server,
  express,
  socketInit,
  connectedUsers
} = require("./socket");
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();

const { chatHistory } = require("./routes/chatHistory");
const { signInLogInRoutes } = require("./routes/signInLogIn");

const { getUserIds, insertMessage, setVisited } = require("./messageHelpers");
pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

socketInit(insertMessage);

app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["nvalsdjflkasdjfiow"]
  })
);

signInLogInRoutes(app);
chatHistory(app, getUserIds, setVisited);

server.listen(port, () => console.log("port " + port + " is on"));
