Ext.define('TestApp.view.main.Card', {
  extend: 'Ext.form.Panel',
  xtype: 'formcard',

  requires: ['TestApp.store.Goods', 'TestApp.view.main.CardController'],

  controller: 'card',

  viewModel: {
    data: {
      id: null,
      name: null,
      description: null,
      price: null,
      quantity: null,
      index: null,
      btnDiasbled: true,
    },
  },

  fixed: true,
  floating: true,
  modal: true,
  closable: false,
  centered: true,
  width: 500,
  height: 350,
  layout: 'fit',
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

      bodyPadding: 6,

      items: [
        // Unvisible data
        {
          xtype: 'numberfield',
          name: 'index',
          bind: '{index}',
          readOnly: true,
          hidden: true,
        },
        {
          xtype: 'numberfield',
          name: 'id',
          bind: '{id}',
          readOnly: true,
          hidden: true,
        },
        {
          xtype: 'textfield',
          name: 'name',
          bind: '{name}',
          readOnly: true,
          hidden: true,
        },
        {
          xtype: 'textfield',
          name: 'description',
          bind: '{description}',
          readOnly: true,
          hidden: true,
        },

        // Rendered data

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
          fieldLabel: 'Цена:',
          allowBlank: false,
          bind: '{price}',
          minValue: 0,
          allowDecimals: true,
          listeners: {
            change: 'priceChange',
          },
        },
        {
          xtype: 'numberfield',
          name: 'quantity',
          fieldLabel: 'Количество:',
          allowBlank: false,
          bind: '{quantity}',
          minValue: 0,
          allowDecimals: false,
          listeners: {
            change: 'quantityChange',
          },
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
