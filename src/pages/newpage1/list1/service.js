import request from '@/utils/request';

export async function queryList1(params) {
  return request('/api/getmock',
    {
    params,
  });
}
