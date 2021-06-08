const dotenv = require('dotenv');
dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });
const express = require('express');
const app = express();
const tasksRouter = require('./routers/task.routes');

app.use(express.json());

app.use('/tasks', tasksRouter);

module.exports = app;
