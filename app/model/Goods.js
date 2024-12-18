Ext.define('TestApp.model.Goods', {
  extend: 'TestApp.model.Base',

  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string', defaultValue: 'n/a' },
    { name: 'description', type: 'string', defaultValue: 'n/a' },
    { name: 'price', type: 'float' },
    { name: 'quantity', type: 'int' },
  ],
});
