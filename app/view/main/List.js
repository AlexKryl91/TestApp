/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',

  requires: ['TestApp.store.Goods'],

  title: 'Список товаров',

  store: {
    type: 'goods',
  },

  columns: [
    { text: 'ID', dataIndex: 'id', flex: 1 },
    { text: 'Имя', dataIndex: 'name', flex: 1 },
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
      xtype: 'pagingtoolbar',
      dock: 'bottom',
      displayInfo: false,
    },
  ],
});
