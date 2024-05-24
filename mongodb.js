const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "mongodb+srv://Sanket:P37hPbj9rZPF83fs@cluster0.hxfup1q.mongodb.net/userappnew1"
);

// password :xVwZz7QuPxHv0j8N

// const User = mongoose.model("Users", { name: String, password: String });

// const user = new User({
//   name: "sanket Meshiya",
//   password: "123",
// });
// user.save();

const User = mongoose.model("Users", { name: String, password: String });

const user = new User({
  name: "sanket meshiya",
  password: "123",
});

user.save();
