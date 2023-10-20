function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // For this example, let's just check length. You might want to add more criteria.
    return password.length >= 8;
}

module.exports = {
    isValidEmail,
    isValidPassword
};
