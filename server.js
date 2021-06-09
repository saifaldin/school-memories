const mongoose = require('mongoose');
const app = require('./app');

const { MONGODB_URI, DB_NAME, PORT } = process.env;
const db_uri = MONGODB_URI ? `${MONGODB_URI}/${DB_NAME}`: 'mongodb://localhost:27017/db';

mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const port = PORT || 3000;
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch(err => console.log(err));
