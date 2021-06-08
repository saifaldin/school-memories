const Task = require('../models/task.model');

// Main task: utility function
const imageGenerator = async Group => {
  const foundImage = await Task.findOne({ Group });

  if (foundImage) return false;
  else return true;
};

// Main task: Request handler for generating image
exports.generateImage = async (req, res) => {
  const { Group } = req.body;
  const foundImage = await imageGenerator(Group);
  if (foundImage)
    return res
      .status(400)
      .json({ message: 'an image of these students already exists' });
  else res.status(200).json({ message: 'image successfully generated' });
};

// Alternative solution: Generate image during task creation
// without the need of another endpoint to check in the past generated images
exports.createTask = async (req, res) => {
  const { Number, Group, Class } = req.body;

  // Generate image in a separate function that either
  // creates the image and return the path if successfully generated (true)
  // or respond with already generated, and the path of the past generated image (false)
  const hasGeneratedNewImage = await imageGenerator(Group);

  const result = await Task.create({ Number, Class, Group });
  return res
    .status(201)
    .json({ student: result, 'has-generated-new-image': hasGeneratedNewImage });
};
