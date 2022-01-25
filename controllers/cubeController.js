const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const renderCreateCube = (req, res) => {
  let cubes = cubeService.getAll();
  console.log(cubes);
  res.render('create');
};


const createCube = (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;

  cubeService.create(name, description, imageUrl, difficulty);
  res.redirect('/cube/create');
};

router.route('/create').get(renderCreateCube).post(createCube);

module.exports = router;
