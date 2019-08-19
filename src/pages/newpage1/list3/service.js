import request from '@/utils/request';

export async function queryArticel(params) {
  return request('/api/article', {
    params,
  });
}
export async function removeArticel(params) {
  return request('/api/article', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addArticel(params) {
  return request('/api/article', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateArticel(params) {
  return request('/api/article', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
