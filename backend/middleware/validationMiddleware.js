function validateImageUpload(req, res, next) {
    if (req.files && req.files.image) { // Assuming you're using something like 'express-fileupload' middleware
        next();
    } else {
        res.status(400).json({ message: 'Image file is required' });
    }
}

module.exports = {
    validateImageUpload
};
