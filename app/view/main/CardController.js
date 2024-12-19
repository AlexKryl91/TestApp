Ext.define('TestApp.view.main.CardController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.card',

  priceChange: function (sender, newVal, oldVal) {
    if (oldVal) {
      sender.up('formcard').down('button').setDisabled(false);
    }
  },

  quantityChange: function (sender, newVal, oldVal) {
    if (oldVal) {
      sender.up('formcard').down('button').setDisabled(false);
    }
  },

  saveChanges: function (sender) {
    Ext.Msg.confirm(
      'Подтверждение',
      'Вы действительно хотите сохранить изменения?',
      function (btn) {
        if (btn === 'yes') {
          const formData = sender.up('form').getValues();
          const itemIndex = Number(formData.index);
          sender.up('formcard').destroy();

          const store = Ext.ComponentQuery.query('grid')[0].getStore();

          const newProd = Ext.create('TestApp.model.Goods', formData);
          store.removeAt(itemIndex);
          store.insert(itemIndex, newProd);
        }
      }
    );
  },

  closeCard: function () {
    this.getView().destroy();
  },
});
