const fs = require('fs')
const path = require('path');
const Cube = require('../models/Cube');

const dbPath = path.resolve(__dirname, 'database.json');

const getAll = async () => {
   const data = await fs.promises.readFile(dbPath, 'utf8');
   return JSON.parse(data);
};

const writeDbData = async (data) => {
  return fs.promises.writeFile(dbPath, data)
}

const create = async (name, description, imageUrl, difficulty) => {
  let newCube = new Cube(name, description, imageUrl, difficulty);
  const cubeDb = await getAll();
  cubeDb.push(newCube);
  await writeDbData(JSON.stringify(cubeDb,null,4));
};

const cubeService = {
    create,
    getAll
}
module.exports = cubeService;