export default {
  pages: [
    'pages/init/index',
  ],
  subPackages: [
    // {
    //   root: 'subPages/',
    //   pages: [],
    // },
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
