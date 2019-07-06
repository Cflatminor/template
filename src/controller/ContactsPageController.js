const express = require('express');
const router = express.Router();
const ContactsPageModel = require('../model/ContactsPageModel.js'); // TODO absolute path

router.get('/', function (request, response) {
  return response.render('template/desktop/ContactsPage/index.njk', ContactsPageModel);
})

module.exports = router;
