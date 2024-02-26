const ENV = process.env.BUILD_ENV || 'test';
// export const REQUEST_HOST = `https://api-h5-${ENV}.ibox.art`;

export const BASE_URL = `https://api-h5-${ENV}.ibox.art`;

export const MARKET_URL = `http://api-market-${ENV}.ibox.com`;
export const TOKEN_NAME = 'IB-USER-TOKEN';
export const TOKEN_EXPIRES = 365;
export const SUB_USER_ID = '__sub_user_id';

export const REQUEST_ERROR_CODE = [ 20002 ];
console.log('ENV:', ENV);