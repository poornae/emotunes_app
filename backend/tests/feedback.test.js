const { Feedback } = require('../models/Feedback');

describe('Feedback Submission', () => {

  it('should submit feedback', async () => {
    const res = await request(app)
      .post('/api/feedback')
      .send({
        feedback: 'This app is great!'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.feedback).toEqual('This app is great!');
  });

  it('should not submit empty feedback', async () => {
    const res = await request(app)
      .post('/api/feedback')
      .send({
        feedback: ''
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('Feedback cannot be empty');
  });
});
