const express = require("express");
const router = express.Router();
const Post = require("../model/post");

router.get("/", async (req, res) => {
  try {
    const post= await Post.find();
    res.json(post)
    
  } catch (error) {
    res.json({message:error})
    
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost= await post.save();
    res.json(savePost)
    
  } catch (error) {
    res.json({messahe:error})
    
  }
  
})


module.exports = router;