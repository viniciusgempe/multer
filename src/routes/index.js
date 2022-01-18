const router = require("express").Router();
const multer = require("multer");
const configMulter = require("../config/index");
const Post = require("../model/Post");

router.post("/posts", multer(configMulter).single("file"), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url: "",
  });
  return res.json(post);
});

module.exports = router;
