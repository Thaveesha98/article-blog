const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ username: username, password: hash });
    res.json("success");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ where: { username: username } });
    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res
        .status(401)
        .json({ error: "Wrong username and password combination" });
    }
    const accessToken = sign(
      { username: user.user, id: user.id },
      "importantSecrete"
    );
    res.json(accessToken);
  } catch (error) {
    // If any error occurs during the process, handle it here
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
