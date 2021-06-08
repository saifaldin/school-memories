const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });

const app = require('./main');

const { MONGODB_URI, DB_NAME, PORT } = process.env;

mongoose
  .connect(`${MONGODB_URI}/${DB_NAME}`, {
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
