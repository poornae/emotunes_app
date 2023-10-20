const Feedback = require('../models/Feedback');
const User = require('../models/User');

// Submit feedback
exports.submitFeedback = async (req, res) => {
    try {
        const userId = req.session.userId;  // Assuming user's ID is saved in the session
        const { feedbackText } = req.body;

        // Check if user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Save the feedback
        const newFeedback = await Feedback.create({ userId, feedback: feedbackText });

        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
};

// Get feedbacks by a specific user (optional, if you want this feature)
exports.getFeedbacksByUser = async (req, res) => {
    try {
        const userId = req.session.userId;

        const feedbacks = await Feedback.findAll({ where: { userId } });
        
        if (!feedbacks) {
            return res.status(404).json({ error: 'No feedbacks found for this user' });
        }

        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch feedbacks' });
    }
};

