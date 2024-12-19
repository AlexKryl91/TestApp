/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TestApp.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

    'TestApp.view.main.MainController',
    'TestApp.view.main.MainModel',
    'TestApp.view.main.List',
  ],

  controller: 'main',
  viewModel: 'main',
  plugin: 'viewport',

  ui: 'navigation',

  tabBarHeaderPosition: 1,
  // tabPosition: 'bottom',
  titleRotation: 0,
  tabRotation: 0,

  // style: {
  // width: '100%',
  // flexDirection: 'column',
  // flexWrap: 'wrap',
  // background: 'red',
  // },

  header: {
    layout: {
      align: 'stretchmax',
    },
    title: {
      bind: {
        text: '{name}',
      },
      flex: 0,
    },
    items: [
      {
        xtype: 'button',
        text: 'Товары',
        iconCls: 'fas fa-dolly',
        scale: 'large',
        padding: 20,
      },
      {
        xtype: 'button',
        text: 'Выход',
        iconCls: 'fas fa-door-open',
        scale: 'large',
        padding: 20,
        listeners: {
          click: 'onClickButton',
        },
      },
      // {
      //   flex: 3,
      //   xtype: 'displayfield',
      //   hideEmptyLabel: false,
      //   value: '',
      // },
    ],
  },

  tabBar: {
    flex: 1,
    // style: {
    //   width: '100%',
    //   flexBasis: '600',
    //   background: 'red',
    // },
    layout: {
      align: 'stretch',
      overflowHandler: 'none',
    },
  },

  // responsiveConfig: {
  //   tall: {
  //     headerPosition: 'top',
  //   },
  //   wide: {
  //     headerPosition: 'top',
  //   },
  // },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      // responsiveConfig: {
      //   wide: {
      //     iconAlign: 'left',
      //     textAlign: 'center',
      //   },
      //   tall: {
      //     iconAlign: 'left',
      //     textAlign: 'center',
      //     width: 120,
      //   },
      // },
    },
  },

  items: [
    {
      title: 'Товары',
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: 'mainlist',
        },
      ],
    },
    {
      title: 'Товары',
      bind: {
        html: '{goods}',
      },
    },
    {
      title: 'Товары',
      bind: {
        html: '{goods}',
      },
    },
  ],
});
