const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const renderCreateCube = async (req, res) => {
  let cubes = await cubeService.getAll();
  console.log(cubes);
  res.render('create');
};


const createCube = async (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;

  await cubeService.create(name, description, imageUrl, difficulty);
  res.redirect('/cube/create');
};

router.route('/create').get(renderCreateCube).post(createCube);

module.exports = router;
