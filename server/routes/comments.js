const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleWare");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({
    where: {
      postId: postId,
    },
  });
  res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  try {
    const comment = req.body;
    const newComment = await Comments.create(comment);
    res.json(newComment);
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to create Comment" });
  }
});

module.exports = router;
