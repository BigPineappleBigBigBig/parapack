import axios from 'axios';
import type { AxiosResponse } from 'axios';
import cookie from 'js-cookie';
import { TOKEN_NAME, LOCALES_NAME } from '@/config/common/cookie.config';
import { HeaderKey } from '@/contracts/common/rest';
import BASE_URL from './baseUrl';
import {Message} from 'element-ui';

const catchError = (e: { response: AxiosResponse }) => {
  const { response } = e;
  console.error(e);
  if (!response || response.status >= 500) {
    Message.error({ message: 'An internal error occurred. Please try again' });
    throw new Error('An internal error occurred. Please try again');
  } else {
    if (response.data?.message?.includes('missing or invalid')) {
      Message.error({ message: 'Request failed: incomplete data.' });
      throw new Error('Request failed: incomplete data.');
    }

    Message.error({ message: response.data?.message || e });
    throw new Error(response.data?.message || e);
  }
};

const apiHost = '';
export const service = axios.create({
  baseURL: `${apiHost}/wallet-app-api`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  withCredentials: true,
  timeout: 10000,
});

// 在实例已创建后修改默认值
service.defaults.timeout = 15000;

service.interceptors.request.use((request) => {
  // @open/nft-mall-api/nft/v1/open
  const siteName = request.url?.split('/')[0];
  if (siteName && siteName?.indexOf('@') !== -1) { // 有则siteNmae = @open 否 = ''
    const path = request.url?.split(siteName)[1]; // [1] = /nft-mall-api/nft/v1/open
    request.url = path;
    const { url, baseUrl } = BASE_URL[siteName]; // BASE_URL['@open']
    request.baseURL = `${url}${baseUrl}`;
  }
  // request.headers[HeaderKey.UserToken] = cookie.get(TOKEN_NAME);
  request.headers['wallet-language'] = process.browser && window.$nuxt.$i18n.locale;
  return request;
});
service.interceptors.response.use(
  (wrappedResp) => {
    if (!wrappedResp || !wrappedResp.data) {
      return Promise.reject(wrappedResp.data);
    }
    const {
      data,
      headers,
      // config: { url }
    } = wrappedResp;
    const { code, message: errMsg } = data;
    const token = 'token';
    if (token && typeof token !== 'undefined') {
      // setToken(token);
    }
    if (parseInt(code, 10) === 0) {
      Message.error({ message: decodeURIComponent(errMsg) });
      return Promise.reject(data);
    }
    if ([115, 116].includes(code)) {
      // token过期
    }
    return Promise.resolve(wrappedResp);
  },
  (error) => {
    const resp = error.response;
    const data = resp?.data;
    console.log(`${resp?.status} ${resp?.statusText}`, data?.message, 'error');
    return Promise.reject(error);
  }
);

export const get = (path: string, params?: any) => service.get(path, { params }).then(res => res.data);

export const post = (path: string, data = {}) => service.post(path, data).then(res => res.data).catch(catchError);

export const patch = (path: string, data = {}) => service.patch(path, data).then(res => res.data).catch(catchError);

export const put = (path: string, data = {}) => service.put(path, data).then(res => res.data).catch(catchError);

export const deleteReq = (path: string) => service.delete(path).then(res => res.data).catch(catchError);
