import { resolve } from 'path';

const config = {
  projectName: 'myApp',
  date: '2021-2-7',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  plugins: ['@tarojs/plugin-sass', '@tarojs/plugin-terser'],
  alias: {
    '@/utils': resolve(__dirname, '..', 'src/utils'),
    '@/hooks': resolve(__dirname, '..', 'src/hooks'),
    '@/asset': resolve(__dirname, '..', 'src/asset'),
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/': resolve(__dirname, '..', 'src'),
  },
  sass: {
    resource: [resolve(__dirname, '..', 'src/asset/styles/mixin.scss')],
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {},
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
