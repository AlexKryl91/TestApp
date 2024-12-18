/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TestApp.Application', {
  extend: 'Ext.app.Application',

  name: 'TestApp',

  views: ['TestApp.view.login.Login', 'TestApp.view.main.Main'],

  launch: function () {
    var loggedIn;
    loggedIn = localStorage.getItem('TestLoggedIn');

    Ext.create({
      xtype: loggedIn ? 'app-main' : 'login',
      renderTo: Ext.getBody(),
    });
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      'Application Update',
      'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  },
});
