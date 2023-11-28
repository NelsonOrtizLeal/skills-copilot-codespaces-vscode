// Create web server with nodejs

// Import module
const express = require('express');
const router = express.Router();

// Import model
const Comment = require('../models/Comment');

// Import middleware
const auth = require('../middleware/auth');

// Import controller
const commentsController = require('../controllers/commentsController');

// Route: /comments
router.get('/', auth, commentsController.getComments);

// Route: /comments/add
router.post('/add', auth, commentsController.addComment);

// Route: /comments/edit/:id
router.post('/edit/:id', auth, commentsController.editComment);

// Route: /comments/delete/:id
router.post('/delete/:id', auth, commentsController.deleteComment);

// Export module
module.exports = router;