const request = require('supertest');
const taskController = require('../controllers/task.controller');
const app = require('../app');
const Task = require('../models/task.model');
const TaskImage = require('../models/task-image.model');

jest.mock('../models/task.model', () => {
  const mockImageDocument = { group: 'group' };
  return {
    findOne: jest.fn(({ group }) => {
      if (mockImageDocument.group === group) return mockImageDocument;
      else return null;
    }),
    create: jest.fn()
  };
});

jest.mock('../models/task-image.model', () => {
  const mockImageDocument = { group: 'group' };
  return {
    findOne: jest.fn(({ group }) => {
      if (mockImageDocument.group === group) return mockImageDocument;
      else return null;
    }),
    create: jest.fn()
  };
});

describe('task.controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('imageGenerator function', () => {
    it('should return false if previous image was found', () => {
      const result = taskController.imageGenerator('group');
      expect(result).resolves.toBe(false);
    });
    it('should return true if previous image was not found', () => {
      const result = taskController.imageGenerator('nonexistent-group');
      expect(result).resolves.toBe(true);
    });
    it('should call TaskImage.create with the correct parameters', async () => {
      await taskController.imageGenerator('new-group');
      expect(TaskImage.create).toBeCalledWith({ group: 'new-group' });
    });
  });

  describe('createImage function', () => {
    it('should respond with 200 if image was not found and created', async () => {
      const res = await request(app)
        .post('/tasks/images')
        .send({ group: 'new-group' });

      expect(res.status).toBe(200);
      expect(res.body.message).toEqual('image successfully create');
    });
    it('shoulde respond with 400 if image was already created (found)', async () => {
      const res = await request(app)
        .post('/tasks/images')
        .send({ group: 'group' });

      expect(res.status).toBe(400);
      expect(res.body.message).toEqual(
        'an image of these students already exists'
      );
    });
  });

  describe('createTask function', () => {
    it('should call Task.create with the correct parameters', async () => {
      const payload = { number: 0, group: 'new-group', class: 'objectid' };
      await request(app).post('/tasks').send(payload);

      expect(Task.create).toBeCalledWith(payload);
    });
  });
});
