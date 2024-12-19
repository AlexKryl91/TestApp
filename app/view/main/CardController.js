Ext.define('TestApp.view.main.CardController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.card',

  saveChanges: function (sender, record) {
    const preData = sender.up('form').getValues();
    // console.log(JSON.stringify(preData));
  },

  closeCard: function (sender) {
    // console.log(sender.up('form').getValues());
    this.getView().destroy();
    // Ext.create({ xtype: 'app-main', renderTo: Ext.getBody() });
  },
});
