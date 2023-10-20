const request = require('supertest');
const app = require('../app');
const { User } = require('../models/User');

describe('User Registration', () => {

  afterEach(async () => {
    // Cleanup: Delete the user after the test
    await User.destroy({ where: { email: 'testuser@example.com' } });
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.username).toEqual('testuser');
  });

  it('should not register a user with an existing email', async () => {
    // First, create a user
    await User.create({
      username: 'existinguser',
      email: 'testuser@example.com',
      password: 'password123'
    });

    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'newuser',
        email: 'testuser@example.com',
        password: 'newpassword123'
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('Email already exists');
  });
});


describe('User Login', () => {

    beforeEach(async () => {
      // Setup: Create a user before the test
      await User.create({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123' // Make sure to hash in actual implementation
      });
    });
  
    afterEach(async () => {
      // Cleanup: Delete the user after the test
      await User.destroy({ where: { email: 'testuser@example.com' } });
    });
  
    it('should login with correct credentials', async () => {
      const res = await request(app)
        .post('/api/users/login')
        .send({
          email: 'testuser@example.com',
          password: 'password123'
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.username).toEqual('testuser');
    });
  
    it('should not login with incorrect password', async () => {
      const res = await request(app)
        .post('/api/users/login')
        .send({
          email: 'testuser@example.com',
          password: 'wrongpassword'
        });
      expect(res.statusCode).toEqual(401);
      expect(res.body.error).toEqual('Invalid credentials');
    });
  });
  