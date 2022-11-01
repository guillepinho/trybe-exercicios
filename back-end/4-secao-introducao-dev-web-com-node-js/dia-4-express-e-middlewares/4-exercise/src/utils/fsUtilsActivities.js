const fs = require('fs/promises');
const path = require('path');

const ACT_PATH = '../../data/activities.json';

const readActivities = async () => {
  const activitiesData = await fs.readFile(path.resolve(
    __dirname,
    ACT_PATH,
  ));
  const json = JSON.parse(activitiesData);
  return json;
};

const writeActivities = async (activity) => {
  const data = await readActivities();
  data.push(activity);
  await fs.writeFile(
    path.resolve(path.resolve(__dirname, ACT_PATH)),
    JSON.stringify(data),
  );
};

module.exports = {
  readActivities,
  writeActivities,
};