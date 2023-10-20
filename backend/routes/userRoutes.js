const express = require('express');
const userController = require('../controllers/userController');
const { checkUserSession } = require('../middleware');  // Assuming you have a middleware to check if a user is logged in

const router = express.Router();

// Register new user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

// Logout user
router.get('/logout', checkUserSession, userController.logoutUser);

// Update user profile (assuming you want this functionality)
router.put('/profile', checkUserSession, userController.updateUserProfile);

// Fetch user profile (optional, if you want this feature)
router.get('/profile', checkUserSession, userController.getUserProfile);

module.exports = router;
