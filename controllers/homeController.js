const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService');

const home = async (req, res) => {
  let cubes = await cubeService.getAll();

  res.render('index', {
      cubes
  });
};

router.get('/', home);

module.exports = router;
