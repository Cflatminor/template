const HeaderMenuModel = require('./HeaderMenuModel.js');

function HomePageModel () {
  this.title = 'Home Page';
  this.header_menu = getHeaderMenu();
  // this.lalala = arra;

  function getHeaderMenu () {
    let header_menu = [];
    let header_menu_object = new HeaderMenuModel();

    for (let key in header_menu_object) {
      header_menu.push(header_menu_object[key]);
    }

    return header_menu;
  }
}

module.exports = new HomePageModel();
