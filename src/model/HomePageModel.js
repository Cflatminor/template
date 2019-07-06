const HeaderMenuModel = require('./HeaderMenuModel.js');

function HomePageModel () {
  this.title = 'modelhomepage',
  this.test = process.env.DB_HOST,
  this.menu = getHeaderMenu();

  function getHeaderMenu () {
    return new HeaderMenuModel();
  }
  console.log (this);
}

module.exports =  new HomePageModel();
