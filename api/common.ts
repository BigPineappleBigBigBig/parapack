import { post, get } from '~/utils/requests';

const getNews = async (params): Promise<any> => {
  const result = await post('/news', params);
  return result;
};

const getGlobalConfig = async (): Promise<any> => {
  const result = await get('/common/global-config');
  return result;
};

const getCurrentDecimals = async (): Promise<any> => {
  const result = await get('/common/currency/info');
  return result;
};

const getUsdtRate = async (): Promise<any> => {
  const result = await get('/common/usdt-rate');
  return result;
};

export {
  getNews,
  getGlobalConfig,
  getCurrentDecimals,
  getUsdtRate
};
