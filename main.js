const dotenv = require('dotenv');
dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });
const app = require('express')();
const tasksRouter = require('./routers/task.routes');

app.use('/tasks', tasksRouter);

module.exports = app;
