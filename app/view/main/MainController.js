/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TestApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onClickButton: function () {
    localStorage.removeItem('TestLoggedIn');

    this.getView().destroy();

    Ext.create({ xtype: 'login' });
  },

  applyIdFilter: function (sender, record) {
    if (record.event.key === 'Enter') {
      sender
        .up('grid')
        .getStore()
        .addFilter(function (record) {
          const id = sender.value;
          if (id) {
            return record.get('id') === id;
          } else {
            return true;
          }
        });
    }
  },

  applyDescFilter: function (sender, record) {
    if (record.event.key === 'Enter') {
      sender
        .up('grid')
        .getStore()
        .addFilter(function (record) {
          const word = sender.value.toLowerCase().trim();
          return record.get('description').toLowerCase().includes(word);
        });
    }
  },

  openCard: function (sender, record, index) {
    const itemData = sender.up('grid').getStore().getAt(index).getData();

    Ext.create({
      xtype: 'formcard',
      viewModel: {
        data: itemData,
      },

      modal: true,

      renderTo: Ext.getBody(),
    }).show();
  },
});
