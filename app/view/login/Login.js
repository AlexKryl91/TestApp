Ext.define('TestApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: ['TestApp.view.login.LoginController', 'Ext.form.Panel'],

  controller: 'login',
  bodyPadding: 10,
  title: 'Окно входа',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'username',
        fieldLabel: 'Пользователь',
        allowBlank: false,
      },
      {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль',
        allowBlank: false,
      },
      {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Введите Ваш пароль',
      },
    ],
    buttons: [
      {
        text: 'Войти',
        formBind: true,
        listeners: {
          click: 'onLoginClick',
        },
      },
    ],
  },
});
