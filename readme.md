### Getting the application started

- Prerequisites: Nodejs, MongoDB.
- Steps:
  - `npm install`.
  - `npm run start:dev` to run.
  - `npm run test` to test.
- Defaults:
  - mongodb uri: `mongodb://localhost:27017/db` (local db).
  - port: `3000`
  - To chage defaults create `.development.env` file in root directory, and set:
    - `MONGODB_URI` for uri without database.
    - `DB_NAME` for database name.
    - `PORT` for app port.

### Solution

- Added `TaskImage` model to persist data about previously generated images in the database.
- Implemented `POST /tasks/images` endpoint for creating/generating new images.
  The controller reponsible for the endpoint does the following:
  - Checks the database to see if any images have been created with the given students.
  - If yes, it responds with `{ message: 'an image of these students already exists' }`, with status code of `400`.
  - If not, it creates a new document/record in the database of an image with the given group of students, and responds with `{ message: 'image successfully create' }`. That, in a real world scenario, wouldn't be enough, and you would have to actually generate a new image.

#### Alternative solution

- Instead of having to request a separate endpoint for image creation, image creation happens during creating a new `Task`. <b>This would save traffic to the application, and would be simpler for the client using our API.</b>
- Implemented `POST /tasks` endpoint for creating new tasks.
  The controller does the following:
  - Checks the database to see if any images have been created with the given students.
    - If a new image was created `has-generated-new-image` in the response is set to `true`.
    - If not, `has-generated-new-image` is set to `false`.
  - Creates a new task with the given parameters.

#### Tests

- Implemented tests for `controller` and `app.js` file using `JestJs` and `supertest`.
