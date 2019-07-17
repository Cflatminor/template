const HeaderMenuModel = require('./HeaderMenuModel.js');
// const dbclient = require('../repository/DatabaseClient.js');

function HomePageModel () {
  this.title = 'Home Page';
  this.header_menu = getHeaderMenu();
  // this.array = getArray();

  function getHeaderMenu () {
    let header_menu = [];
    let header_menu_object = new HeaderMenuModel();

    for (let key in header_menu_object) {
      header_menu.push(header_menu_object[key]);
    }

    return header_menu;
  }

  // function getArray () {
  //   dbclient.db("Cluster0").collection("notes").find({}).toArray(function (error, data) {
  //     console.log (data);
  //     response.send(data);
  //   });
  // }
}

module.exports = new HomePageModel();
