import { post, get } from 'utils/requests';

const getChainInfo = async (): Promise<any> => {
  const result = await get('/common/chain/info');
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
  getChainInfo,
  getGlobalConfig,
  getCurrentDecimals,
  getUsdtRate
};
