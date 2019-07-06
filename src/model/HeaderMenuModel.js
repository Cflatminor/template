// module.exports = {
//   item1: 'https://gitlab.com/roman.bogdanov/learnjstopro'
// }

class HeaderMenuModel {
  constructor () {
    this.homePage = this.homePage();
    this.developerPage = this.developerPage();
    this.contactsPage = this.contactsPage();
  }

  headerMenuItemConstructor (model) {

  }

  homePage () {
    return {
      url: `${process.env.BROWSER_BASE}`,
      title: 'home'
    }
  }

  developerPage () {
    return {
      url: `${process.env.BROWSER_BASE}/developer`,
      title: 'developer'
    }
  }

  contactsPage () {
    return {
      url: `${process.env.BROWSER_BASE}/contacts`,
      title: 'contacts'
    }
  }
}

module.exports = HeaderMenuModel;
