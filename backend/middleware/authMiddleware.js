function checkUserSession(req, res, next) {
    if (req.session && req.session.user) { // Assuming you're storing user information in a session
        next();
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
}

module.exports = {
    checkUserSession
};
