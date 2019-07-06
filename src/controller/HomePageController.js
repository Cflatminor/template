const express = require('express');
const router = express.Router();
const HomePageModel = require('../model/HomePageModel.js');

router.get('/', function (request, response) {
  response.render('template/desktop/HomePage/index.njk', HomePageModel);
});

module.exports = router;
