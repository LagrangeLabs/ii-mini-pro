export default {
  pages: [
    'pages/home/index',
  ],
  subPackages: [
    {
      root: 'componentsExample/',
      pages: [
        'Icon/index',
        'scroll-list/index',
        'tab-bar/index',
        'title-bar/index',
      ],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '标题',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序车辆位置定位',
    },
  },
};
