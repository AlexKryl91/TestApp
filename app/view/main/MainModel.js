/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TestApp.view.main.MainModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.main',

  data: {
    name: 'Учет товаров',
    goods: 'Вкладка для отображения товаров',
  },

  //TODO - add data, formulas and/or methods to support your view
});
