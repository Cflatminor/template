const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
  response.render('template/desktop/DeveloperPage/index.njk');
});

module.exports = router;
