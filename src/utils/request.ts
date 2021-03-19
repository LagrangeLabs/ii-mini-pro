import Taro from '@tarojs/taro';
import axios from 'axios';

export const ROOT_PATH = '/movecar/movecar';

interface IRequest {
  url: string;
  method:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';
  params?: any;
  data?: any;
  timeout?: number;
  headers?: any;
  needEncrypt?: boolean;
  isShowLoading?: boolean;
}

const { getStorageSync, showLoading } = Taro;

// h5 请求
const h5_request = (params: IRequest) => {
  const { isShowLoading } = params;

  return new Promise((resolve, reject) => {
    axios(params).then(
      (res) => {
        const result = res.data;
        if (isShowLoading) {
          Taro.hideLoading();
        }
        resolve(result);
      },
      (error) => reject(error),
    );
  });
};

// 微信小程序请求
const weapp_request = (params: IRequest) => {
  const { method, isShowLoading, ...rest } = params;
  return new Promise((resolve) => {
    return Taro.request({
      ...rest,
      method: method as any,
      success: (res) => {
        const result = res.data;
        if (isShowLoading) {
          Taro.hideLoading();
        }
        resolve(result);
      },
      fail: () => weapp_request(params),
    });
  });
};

export default async (params: IRequest) => {
  const {
    url,
    params: dataParams = {},
    data = {},
    headers = {},
    needEncrypt = false,
    isShowLoading = false,
    timeout = 10000,
    ...rest
  } = params;
  const request = {
    weapp: weapp_request,
    h5: h5_request,
  };
  const resetHeaders = {
    'Content-Type': 'application/json',
    Authorization: getStorageSync('Authorization') || '',
    ...headers,
  };

  // 添加公共请求体数据
  const resetData = data || {};
  const resetDataParams = dataParams || {};

  // 添加公共请求路径
  const resetUrl = process.env.HOST + ROOT_PATH + url;

  // 是否显示请求提示
  if (isShowLoading) {
    showLoading({
      title: '加载中',
    });
  }

  return request[process.env.TARO_ENV]({
    timeout,
    isShowLoading,
    ...rest,
    url: resetUrl,
    data: resetData,
    params: resetDataParams,
    header: resetHeaders,
  });
};
