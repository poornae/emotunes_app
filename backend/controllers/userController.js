const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Registration logic
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with the given email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'A user with this email already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

// Login logic
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Check if password matches
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // TODO: Set up user session or generate JWT token

        res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

// Profile update logic
exports.updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user details
        user.name = name;
        user.email = email;
        await user.save();

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Profile update failed' });
    }
};

