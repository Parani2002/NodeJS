const express = require('express');
const {
  getAllPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
} = require('../controller/postController');
const router = express.Router();


router.route('/').get(getAllPosts).post(createPost);


router.route('/:id').get(getPost).put(updatePost).delete(deletePost);

module.exports = router;