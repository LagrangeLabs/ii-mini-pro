import Taro from '@tarojs/taro';

/**
 * 判断是否为空数据项
 * @param {*} value
 */
export const isNull = (value: any) => {
  switch (Object.prototype.toString.call(value)) {
    case '[object Object]':
      return JSON.stringify(value) === '{}';
    case '[object Array]':
      return JSON.stringify(value) === '[]';
  }
  return !Boolean(value);
};

/**
 * 轻提示
 * @param {*} text
 */
export const showToast = (text: string = '') => {
  Taro.showToast({
    title: text,
    icon: 'none',
    mask: true,
  });
};