Ext.define('TestApp.store.Goods', {
  extend: 'Ext.data.Store',

  alias: 'store.goods',

  model: 'TestApp.model.Goods',

  data: {
    items: [
      {
        id: '1',
        name: 'Notebook Lenovo',
        description: 'Ноутбук ThinkPad T460 14"FHD...',
        price: '100',
        quantity: '2',
      },
      {
        id: '2',
        name: 'Keyboard OKLICK',
        description: 'Клавиатура OKLICK 140M, USB, черный',
        price: '50',
        quantity: '8',
      },
      {
        id: '3',
        name: 'Network adapter',
        description: 'Сетевой адаптер WiFi D-Link...',
        price: '7',
        quantity: '0',
      },
    ],
  },

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items',
    },
  },
});
