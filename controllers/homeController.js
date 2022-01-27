const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService');

const home = async (req, res) => {
  let cubes = await cubeService.getAll();
  res.render('index', {cubes});
};

const search = async (req, res) => {
  let {search: text, from, to} = req.query;
  let cubes = await cubeService.search(text, from, to);

  res.render('index', {cubes});
}

router.get('/', home);
router.get('/search', search)

module.exports = router;
