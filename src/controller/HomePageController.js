const express = require('express');
const router = express.Router();
const HomePageModel = require('../model/HomePageModel.js'); // TODO absolute path

router.get('/', function (request, response) {
  const collection = request.app.locals.collection;

  collection.find({}).toArray(function (error, data) {
    return response.render('template/desktop/HomePage/index.njk', Object.assign(
      {data: data}, HomePageModel
    ));
  });

});

module.exports = router;
