const express = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const aboutController = require('./controllers/aboutController');

const router = express.Router();

router.use(homeController);
router.use('/cube',cubeController);
router.use('/about', aboutController);
router.use('*', (req, res) => res.render('404'));


module.exports = router;
