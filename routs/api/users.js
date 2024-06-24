const express = require("express");
const uuid = require("uuid");
const router = express.Router();

const users = [
  { id: 1, name: "sathish" },
  { id: 2, name: "ruban" },
  { id: 3, name: "saran" },
  { id: 4, name: "nithsh" },
];

// get users
router.get("/", (req, res) => res.json(users));

// get single user
router.get("/:id", (req, res) => {
  let found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res
      .status(404)
      .json({ message: `No member found with id: ${req.params.id}` });
  }
});

// post user
router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
  };

  if (!newUser.name) {
    return res.status(400).json({ message: "please include name" });
  }

  users.push(newUser);
  res.json(users);
});

module.exports = router;
