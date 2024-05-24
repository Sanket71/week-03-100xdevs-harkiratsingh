// const express = require("express");

// const app = express();

// const users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];

// app.use(express.json());

// app.get("/", (req, res) => {
//   const johnKednyes = users[0].kidneys;
//   const numberOfKedynes = johnKednyes.length;
//   let numberOfHealthyKedynes = 0;
//   for (let i = 0; i < numberOfKedynes; i++) {
//     if (users[0].kidneys[i].healthy) numberOfHealthyKedynes += 1;
//   }
//   const numberOfUnhealthyKedynes = numberOfKedynes - numberOfHealthyKedynes;
//   res.json({
//     numberOfKedynes,
//     numberOfHealthyKedynes,
//     numberOfUnhealthyKedynes,
//   });
// });

// app.post("/", (req, res) => {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   console.log(users[0].kidneys);
//   res.json({ msg: "Done" });
// });

// app.put("/", (req, res) => {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true;
//   }
//   res.json({});
// });

// // Removing All Unhealthy Kidneys
// app.delete("/", (req, res) => {
//   if (isThereAtleastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (users[0].kidneys[i].healthy) {
//         newKidneys.push({
//           healthy: true,
//         });
//       }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({ msg: "done" });
//   } else {
//     res.status(411).json({
//       msg: "You have no bad kidneys",
//     });
//   }
// });

// function isThereAtleastOneUnhealthyKidney() {
//   let atleastOneUnhealthyKidneys = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atleastOneUnhealthyKidneys = true;
//     }
//   }
//   return atleastOneUnhealthyKidneys;
// }

// app.listen(3000);

const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;

  res.send("You have " + kidneysLength + " kidneys");
});
