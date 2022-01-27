const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const renderCreateCube = async (req, res) => {
  res.render('create');
};

const cubeDetails = async (req, res) => {
  const cubes = await cubeService.getAll();
  let cube = cubes.find(x => x.id == req.params.id);
  console.log(cube)
  if(!cube){
    return res.redirect('/error');
  }
  res.render('details', {
    ...cube
  })

}

const createCube = async (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;

  await cubeService.create(name, description, imageUrl, difficulty);
  res.redirect('/cube/create');
};

router.route('/create')
.get(renderCreateCube)
.post(createCube);
router.route('/details/:id')
.get(cubeDetails)

module.exports = router;
