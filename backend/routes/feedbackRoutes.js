const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const { checkUserSession } = require('../middleware');  // Assuming you have a middleware to check if a user is logged in

const router = express.Router();

// Route to submit feedback
router.post('/submit', checkUserSession, feedbackController.submitFeedback);

// Optional route to get feedback for a user (if you want this feature)
router.get('/userFeedback', checkUserSession, feedbackController.getUserFeedback);

module.exports = router;
