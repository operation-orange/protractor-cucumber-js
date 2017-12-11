this.HomePage = function (driver) {
  GalenPages.extendPage(this, driver, 'Home page', {
    mainHeader: '.MainHeader__header',
    logo: '.MainHeader__logo',

    load: function () {
      this.open(domain + '/?brand=topshop');
      return this.waitForIt();
    }
  });
};
