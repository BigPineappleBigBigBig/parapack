import { post, get } from '~/utils/requests';

const getBrandList = async (data:any): Promise<any> => {
  const result = await post('/group',data);
  return result;
};

const getTags = async (): Promise<any> => {
  const result = await post('/tags');
  return result;
};

export {
  getBrandList,
  getTags
};