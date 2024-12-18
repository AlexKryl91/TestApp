/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: 'TestApp.Application',

  name: 'TestApp',

  requires: [
    // This will automatically load all classes in the TestApp namespace
    // so that application classes do not need to require each other.
    'TestApp.*',
  ],

  // The name of the initial view to create.
  mainView: 'TestApp.view.main.Main',
});
