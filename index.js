const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const port = process.env.PORT || 5000;
const app = express();

const users = [
  { id: 1, name: "sathish" },
  { id: 2, name: "ruban" },
  { id: 3, name: "saran" },
  { id: 4, name: "nithsh" },
];

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// init logger
// app.use(logger);

// get single user
app.get("/api/users/:id", (req, res) => {
  res.json(users.filter((user) => user.id === parseInt(req.params.id)));
});

// get users
app.get("/api/users", (req, res) => res.json(users));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`server started on port ${port}`));
