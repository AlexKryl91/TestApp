Ext.define('TestApp.view.main.Card', {
  extend: 'Ext.form.Panel',
  xtype: 'formcard',

  requires: ['TestApp.store.Goods', 'TestApp.view.main.CardController'],

  controller: 'card',

  viewModel: {
    data: {
      id: 'n/a',
      name: 'n/a',
      description: 'n/a',
      price: 0,
      quantity: 0,
      btnDiasbled: true,
    },
  },

  fixed: true,
  // // floated: true,
  // modal: true,
  closable: false,
  // centered: true,
  width: 500,
  height: 350,
  layout: 'fit',
  // plain: true,
  frame: true,
  title: 'Карточка товара',

  items: [
    {
      xtype: 'form',

      fieldDefaults: {
        labelWidth: 120,
      },

      layout: {
        type: 'vbox',
        align: 'stretch',
      },

      bodyPadding: 5,

      items: [
        {
          xtype: 'displayfield',
          name: 'id',
          fieldLabel: 'ID:',
          hideEmptyLabel: false,
          bind: '{id}',
        },
        {
          xtype: 'displayfield',
          name: 'name',
          fieldLabel: 'Наименование:',
          hideEmptyLabel: false,
          bind: '{name}',
        },
        {
          xtype: 'displayfield',
          name: 'description',
          fieldLabel: 'Описание:',
          hideEmptyLabel: false,
          bind: '{description}',
        },
        {
          xtype: 'numberfield',
          name: 'price',
          type: 'float',
          fieldLabel: 'Цена:',
          allowBlank: false,
          bind: '{price}',
          minValue: 0,
          allowDecimals: true,
        },
        {
          xtype: 'numberfield',
          name: 'quantity',
          fieldLabel: 'Количество:',
          allowBlank: false,
          bind: '{quantity}',
          minValue: 0,
          allowDecimals: false,
        },
      ],
    },
  ],

  buttons: [
    {
      text: 'Сохранить',
      listeners: {
        click: 'saveChanges',
      },
      disabled: '{btnDisabled}',
    },
    {
      text: 'Отмена',
      listeners: {
        click: 'closeCard',
      },
    },
  ],
});
