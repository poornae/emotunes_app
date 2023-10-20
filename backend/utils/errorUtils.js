function createErrorResponse(code, message) {
    return {
        status: code,
        message: message
    };
}

module.exports = {
    createErrorResponse
};
