const express = require('express');
const router = express.Router();
const DeveloperPageModel = require('../model/DeveloperPageModel.js'); // TODO absolute path

router.get('/', function (request, response) {
  return response.render('template/desktop/DeveloperPage/index.njk', DeveloperPageModel);
});

module.exports = router;
