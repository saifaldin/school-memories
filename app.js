const express = require('express');
const tasksRouter = require('./routers/task.routes');
const dotenv = require('dotenv');
dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });

const app = express();

app.use(express.json());

app.use('/tasks', tasksRouter);

module.exports = app;
