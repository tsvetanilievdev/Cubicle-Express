const Cube = require('../models/Cube');

const cubeDb = [];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
  let newCube = new Cube(name, description, imageUrl, difficulty);
  cubeDb.push(newCube);
};

const cubeService = {
    create,
    getAll
}
module.exports = cubeService;