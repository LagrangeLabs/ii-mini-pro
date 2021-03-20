import request from '@/utils/request';

import IApis from './interface';

/** 接口请求示例 */
export async function fetchList(params: any) {
  return request({
    url: `/list`,
    method: 'get',
    params,
  });
}

const Apis: IApis = {
  fetchList,
};

export default Apis;
