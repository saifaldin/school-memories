const Task = require('../models/task.model');
const TaskImage = require('../models/task-image.model');

// Main task: utility function
exports.imageGenerator = async group => {
  try {
    const foundTask = await TaskImage.findOne({ group });
    if (foundTask) return false;
    else {
      await TaskImage.create({ group });
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

// Main task: Request handler for generating image
exports.createImage = async (req, res) => {
  try {
    const { group } = req.body;
    const notFoundImage = await this.imageGenerator(group);
    if (notFoundImage)
      return res.status(200).json({ message: 'image successfully create' });
    else
      return res
        .status(400)
        .json({ message: 'an image of these students already exists' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'internal server error' });
  }
};

/////////////
///////////// Alternative solution: Generate image during task creation
// without the need of another endpoint to check in the past generated images
exports.createTask = async (req, res) => {
  try {
    const { number, group, class: schoolClass } = req.body;

    // Generate image in a separate function that either
    // creates the image and return the path if successfully generated (true)
    // or respond with already generated, and the path of the past generated image (false)
    const hasGeneratedNewImage = await this.imageGenerator(group);

    const result = await Task.create({ number, class: schoolClass, group });
    return res.status(201).json({
      student: result,
      'has-generated-new-image': hasGeneratedNewImage
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'internal server error' });
  }
};
