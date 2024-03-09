import { notification, message } from 'antd';
import type { ResponseError } from 'umi-request';
import { storageSy } from '@/utils/Setting';
import { HttpMessage, CodeMessage } from './constant';
import { history } from 'umi';
import { stringify } from 'querystring';
/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  const { query = {}, search, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }
};

/**请求拦截 */
export const requestInterceptors: any = (url: string, options: RequestInit) => {
  const token = JSON.parse(localStorage.getItem(storageSy.token) as string);

  options.headers = {
    access_token: token ? token : '',
    xtoken: token ? token : '',
    ...options.headers,
  };
  return { url, options };
};

// 响应拦截
export const responseInterceptors: any = async (response: Response) => {
  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
    return;
  }
  const data = await response.clone().json();
  // if ([CodeMessage.TKN0003, CodeMessage.TKN0001].includes(data.code)) {
  //   message.error(data.message);
  //   sessionStorage.clear();
  //   loginOut();
  //   return false;
  // }
  // if (data.code !== CodeMessage.SUCCESS) {
  //   message.error(data.message);
  //   return false;
  // }
  return data;
};

const codeMessage = HttpMessage;

/**
 * 异常处理程序
 */
export const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};
