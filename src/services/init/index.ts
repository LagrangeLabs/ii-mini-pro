import request from '@/utils/request';
import uploadFile from '@/utils/uploadFile';

import IApis from './interface';

/** 图片上传示例 */
export async function uploadImage(params: any) {
  return uploadFile({
    url: `/file`,
    file: params.file,
  });
}

/** 接口请求示例 */
export async function fetchApi(params: any) {
  return request({
    url: `/url`,
    method: 'post',
    data: params,
  });
}

const Apis: IApis = {
  uploadImage,
  fetchApi,
};

export default Apis;
