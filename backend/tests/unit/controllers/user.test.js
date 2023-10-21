// Unit Testing
const { User } = require('../../models/User');

describe('User Model Unit Tests', () => {
    test('should validate a correct user', () => {
        const user = new User({
            username: 'sampleUser',
            password: 'samplePass',
            email: 'sample@example.com'
        });
        const validation = user.validateUser(); 
        expect(validation.isValid).toBe(true);
    }); 
});

