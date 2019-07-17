const express = require('express');
const router = express.Router();
const HomePageModel = require('../model/HomePageModel.js'); // TODO absolute path

router.get('/', function (request, response) {
  let lala = null;
  const collection = request.app.locals.collection;

  collection.find({}).toArray(function (error, data) {
    lala = data;
    // console.log (data);
    // console.log(lala);
    return response.render('template/desktop/HomePage/index.njk', Object.assign(
      {data: lala}, HomePageModel
    ));
  });
});

module.exports = router;
