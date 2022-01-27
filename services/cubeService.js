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

const search = async (text, from, to) => {
  let result = await getAll();
  
  if(text) {
    result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
  }
  if(from) {
    result = result.filter(x => x.difficulty >= from);
  }
  if(to){
    result = result.filter(x => x.difficulty <= to);
  }

  return result;
}

const cubeService = {
    create,
    getAll,
    search
}
module.exports = cubeService;