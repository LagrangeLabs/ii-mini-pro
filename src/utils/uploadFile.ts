import Taro from '@tarojs/taro';
import Compressor from 'compressorjs';
import { showToast } from '@/utils/tools';
import { ROOT_PATH } from './request';

const {
  uploadFile,
  hideLoading,
  showLoading,
  getStorageSync,
  compressImage,
} = Taro;

interface IRequest {
  url: string;
  file: any;
  formData?: any;
  isShowLoading?: boolean;
  timeout?: number;
}

// h5 图片压缩
const h5Compress = (file: any) => {
  return new Promise((resolve, reject) => {
    new Compressor(file || '', {
      quality: 0.4,
      success: (result) => resolve(result),
      error(err) {
        showToast('图片压缩失败失败');
        reject(err);
      },
    });
  });
};

// 小程序 图片压缩
const weappCompress = (file: any) => {
  return new Promise((resolve, reject) => {
    compressImage({
      src: file || '',
      quality: 40,
      success: (result) => resolve(result),
      fail() {
        showToast('图片压缩失败失败');
        reject();
      },
    });
  });
};

// 获取 filePath
const getFilePath = async (file: any) => {
  if (process.env.TARO_ENV === 'h5' && file.size > 1000000) {
    const result: any = await h5Compress(file['originalFileObj']);
    return URL.createObjectURL(result);
  }
  if (process.env.TARO_ENV === 'weapp' && file.size > 1000000) {
    const result: any = await weappCompress(file['path']);
    return result['tempFilePath'] || '';
  }
  return file['path'];
};

// 主函数
export default async (params: IRequest) => {
  const {
    url,
    file,
    formData = {},
    isShowLoading = false,
    timeout = 10000,
  } = params;

  const resetUrl = process.env.HOST + ROOT_PATH + url;

  if (isShowLoading) {
    showLoading({
      title: '上传中',
    });
  }

  return new Promise(async (resolve, reject) => {
    uploadFile({
      url: resetUrl,
      filePath: await getFilePath(file),
      name: 'file',
      formData,
      timeout,
      header: {
        Authorization: getStorageSync('Authorization') || '',
      },
      fail: (err) => {
        showToast('上传失败');
        reject(err);
      },
      success: (res) => {
        const result: any = res.data;
        hideLoading();
        if (result.code !== 0) {
          showToast(result.msg || '网络请求错误');
        }
        resolve(result);
      },
    });
  });
};
