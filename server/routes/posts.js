const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Post.findAll();
  res.json(listOfPosts);
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
