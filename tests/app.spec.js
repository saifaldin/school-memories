const request = require('supertest');
const app = require('../app');

jest.mock('../controllers/task.controller', () => ({
  createImage: (_, res) => res.status(200).send('Hello World!'),
  createTask: (_, res) => res.status(200).send('Hello World!')
}));

describe('app.js', () => {
  it('POST /tasks', () => {
    return request(app).post('/tasks').expect(200);
  });
  it('POST /tasks/images', () => {
    return request(app).post('/tasks/images').expect(200);
  });
});
