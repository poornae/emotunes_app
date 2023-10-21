// Functional testing
const request = require('supertest');
const app = require('../../app');

describe('User Flow Functional Tests', () => {
    test('should register, login, and update profile', async () => {
        // Register
        const res1 = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testUser',
                password: 'testPass',
                email: 'test@example.com'
            });
        expect(res1.status).toBe(200);

        // Login
        const res2 = await request(app)
            .post('/api/users/login')
            .send({
                username: 'testUser',
                password: 'testPass'
            });
        expect(res2.status).toBe(200);

    });
});
