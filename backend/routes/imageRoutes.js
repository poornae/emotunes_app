const express = require('express');
const imageController = require('../controllers/imageController');
const { checkUserSession } = require('../middleware');  // Assuming you have a middleware to check if a user is logged in

const router = express.Router();

// Capture and save image
router.post('/capture', checkUserSession, imageController.captureImage);

// Get image based on emotion (assuming you want this functionality)
router.get('/emotion/:emotion', checkUserSession, imageController.getImagesByEmotion);

// Allow user to give permission to save the image
router.put('/permission', checkUserSession, imageController.givePermissionToSaveImage);

module.exports = router;
