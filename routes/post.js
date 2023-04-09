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
    res.json({message:error})
    
  }
  
})

//specific post
router.get('/:postID', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postID);
      res.send(post);
    } catch (error) {
      res.send({ message: error });
    }
  });

  //delete post
  router.delete('/:postId', async (req, res) => {
    try {
      const removePost = await Post.deleteOne({ _id: req.params.postId });
      res.json(removePost);
    } catch (error) {
      res.send({ message: error });
    }
  });
    

module.exports = router;
