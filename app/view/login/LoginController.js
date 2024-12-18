Ext.define('TestApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function (sender) {
    const formValues = sender.up('window').down('form').getValues();
    const { username, password } = formValues;

    if (username === 'admin' && password === 'padmin') {
      localStorage.setItem('TestLoggedIn', true);

      // Remove Login Window
      this.getView().destroy();

      // Add the main view to the viewport
      Ext.create({
        xtype: 'app-main',
        renderTo: Ext.getBody(),
      });
    } else {
      Ext.Msg.alert('Ошибка доступа', 'Неверный логин или пароль');
    }
  },
});
