const express = require('express');
const router = express.Router();
const HomePageModel = require('../model/HomePageModel.js'); // TODO absolute path

router.get('/', function (request, response) {
  return response.render('template/desktop/HomePage/index.njk', HomePageModel);
});

module.exports = router;
