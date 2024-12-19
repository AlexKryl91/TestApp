Ext.define('TestApp.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',

  requires: ['TestApp.store.Goods'],

  title: 'Список товаров',

  store: {
    type: 'goods',
  },

  filterable: true,

  columns: [
    { text: 'ID', dataIndex: 'id', flex: 1 },
    {
      text: 'Имя',
      dataIndex: 'name',
      flex: 1,
      listeners: {
        click: 'openCard',
      },
    },
    { text: 'Описание', dataIndex: 'description', flex: 1 },
    { text: 'Цена', dataIndex: 'price', flex: 1 },
    {
      text: 'Количество',
      dataIndex: 'quantity',
      flex: 1,
      renderer: function (value, meta) {
        if (parseInt(value) === 0) {
          meta.style = 'background-color: red;';
        }
        return value;
      },
    },
  ],

  dockedItems: [
    {
      margin: '10 20 20 10',
      xtype: 'numberfield',
      dock: 'top',
      name: 'idFilter',
      fieldLabel: 'ID',
      allowBlank: true,
      enableKeyEvents: true,
      hideTrigger: true,
      minValue: 0,
      allowDecimals: false,
      listeners: {
        keyup: 'applyIdFilter',
      },
    },
    {
      margin: '0 20 20 10',
      xtype: 'textfield',
      dock: 'top',
      name: 'descFilter',
      fieldLabel: 'Описание',
      allowBlank: true,
      enableKeyEvents: true,
      listeners: {
        keyup: 'applyDescFilter',
      },
    },
    {
      xtype: 'pagingtoolbar',
      dock: 'bottom',
      displayInfo: false,
    },
  ],
});
