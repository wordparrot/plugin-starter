import { DynamicServiceBody } from 'wordparrot-types';

export const sampleGenerateAuthURI = async (body: DynamicServiceBody): Promise<string> => {
  return 'https://myurl.login.com?client_id=12345';
};
