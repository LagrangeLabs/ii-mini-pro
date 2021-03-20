const isH5 = process.env.TARO_ENV === 'h5';
const HOST = 'http://yapi.devdemo.trs.net.cn/mock/1556';

module.exports = {
  // 全局变量
  env: {
    NODE_ENV: JSON.stringify('development'),
    HOST: JSON.stringify(isH5 ? '/api' : HOST),
  },
  defineConstants: {
    NOCONSOLE: false,
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: HOST,
          pathRewrite: {
            '^/api/': '/',
          },
          changeOrigin: true,
        },
      },
    },
  },
};
