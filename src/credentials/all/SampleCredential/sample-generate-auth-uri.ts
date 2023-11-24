import { DynamicServiceBodyWithLib } from 'wordparrot-types';

export const sampleGenerateAuthURI = async (body: DynamicServiceBodyWithLib): Promise<string> => {
  return 'https://myurl.login.com?client_id=12345';
};
