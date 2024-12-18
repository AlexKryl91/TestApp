/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TestApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',


  // onConfirm: function (choice) {
  //   if (choice === 'yes') {
  //     //
  //   }
  // },

  onClickButton: function () {
    localStorage.removeItem('TestLoggedIn');

    this.getView().destroy();

    Ext.create({ xtype: 'login' });
  },
});
