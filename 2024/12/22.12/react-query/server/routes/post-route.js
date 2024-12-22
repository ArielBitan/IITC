const express = require("express");
const router = express.Router();
const postsController = require("../controllers/post-controller");

// Routes
router.post("/", postsController.createPost); // Create a new post
router.get("/", postsController.getAllPosts); // Get all posts
router.get("/:id", postsController.getPostById); // Get a single post by ID
router.put("/:id", postsController.updatePost); // Update a post by ID
router.delete("/:id", postsController.deletePost); // Delete a post by ID

module.exports = router;
