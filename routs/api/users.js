const express = require("express");
const uuid = require("uuid");
const router = express.Router();

const users = [
  { id: 1, name: "sathish" },
  { id: 2, name: "ruban" },
  { id: 3, name: "saran" },
  { id: 4, name: "nithsh" },
];

// GET users
router.get("/", (req, res) => res.json(users));

// GET single user
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

// POST user
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

// update (PUT) new user
router.put("/:id", (req, res) => {
  let found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    const updatedUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updatedUser.name ? updatedUser.name : this.user.name;

        res.json({ message: `user updated:`, user });
      }
    });
  } else {
    res
      .status(404)
      .json({ message: `No member found with id: ${req.params.id}` });
  }
});

//Delete User
router.delete("/:id", (req, res) => {
  let found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json({
      message: "user deleted",
      users: users.filter((user) => user.id !== parseInt(req.params.id)),
    });
  } else {
    res
      .status(404)
      .json({ message: `No member found with id: ${req.params.id}` });
  }
});

module.exports = router;
