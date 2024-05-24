const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  let exist = false;

  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      exist = true;
    }
  }
  return exist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    res.status(403).json({ msg: "User doesn't Exist In Our Database" });
    return;
  }

  const token = jwt.sign({ username }, jwtPassword);
  res.status(200).json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  console.log(token);
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded);
    res.status(200).json({
      Users: ALL_USERS.filter((user) => {
        if (user.name === decoded.username) return false;
        return true;
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid Token",
    });
  }
});

app.listen(3000);
