const db = require('../config/connection');
const { User, Task, Category, SubCategory, Frequency, Child } = require('../models');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');
const catSeeds = require('./categorySeeds.json');


db.once('open', async () => {
  try {
    await Task.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});
    await User.create(userSeeds);
    await Category.create(catSeeds);
    for (let i = 0; i < taskSeeds.length; i++) {
      const { _id, taskUser } = await Task.create(taskSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: taskUser },
        {
          $addToSet: {
            tasks: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
