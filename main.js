const dotenv = require('dotenv');
dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });
const app = require('express')();
const imageGeneratorRouter = require('./routers/image-generator.routes');

app.use('/classes');
app.use('/students');
app.use('/tasks');
app.use('/task-image-generator', imageGeneratorRouter);

module.exports = app;
