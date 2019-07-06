const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const port = process.env.PORT || 8000;

if (process.env.MODE === 'dev') {
  process.env.BROWSER_BASE = `${process.env.PROTOCOL}://localhost:${port}`;
}

app.use(express.static(__dirname + ''));
app.set('view engine', '.njk');
nunjucks.configure('./', {
    autoescape: true,
    express: app
});

app.use('/', require('./src/controller/HomePageController.js'));
app.use('/contacts', require('./src/controller/ContactsPageController.js'));
app.use('/developer', require('./src/controller/DeveloperPageController.js'));

app.listen(port, function() {
  console.log(`We are on ${port}`);
});
