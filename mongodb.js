const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "url"
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
