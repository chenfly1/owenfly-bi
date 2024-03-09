import { request } from 'umi';

/** 报表收藏 */
export async function addFocus(params: { id: any }) {
  const res = await request('/bi/addFocus/', {
    method: 'GET',
    params,
    requestType: 'form',
  });
  return res;
}
/** 取消报表收藏 */
export async function biDelFocus(params: { id: string }) {
  const res = await request('/bi/delFocus/', {
    method: 'GET',
    params,
    requestType: 'form',
  });
  return res;
}
