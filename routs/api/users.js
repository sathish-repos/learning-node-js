const express = require("express");
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

module.exports = router;
