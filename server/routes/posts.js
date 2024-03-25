const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Post.findAll();
  res.json(listOfPosts);
});
router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  try {
    const post = req.body;
    const newPost = await Post.create(post);
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to create post" });
  }
});

module.exports = router;
