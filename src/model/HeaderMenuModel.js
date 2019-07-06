// module.exports = {
//   item1: 'https://gitlab.com/roman.bogdanov/learnjstopro'
// }

class HeaderMenuModel {
  constructor () {
    this.contactsPage = this.contactsPage();
  }

  contactsPage () {
    return {
      url: `${process.env.BROWSER_BASE}/contacts`
    }
  }
}

module.exports = HeaderMenuModel;
