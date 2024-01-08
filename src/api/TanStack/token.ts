import { secureStoreDelete, secureStoreGetValueFor, secureStoreSave } from '../SecureStore';

export const initialize = async () => {
  const token = await secureStoreGetValueFor('token');
  console.log(token);
  return token;
};

export const login = async (): Promise<string> => {
  const token = await Promise.resolve('valid-token'); // Will be replaced with API call
  await secureStoreSave('token', token);
  return token;
};

export const refresh = async () => {
  const token = await Promise.resolve('valid-token'); // Will be replaced with API call
  await secureStoreSave('token', token);
  return token;
};

export const register = async () => {
  const token = await Promise.resolve('valid-token'); // Will be replaced with API call
  await secureStoreSave('token', token);
  return token;
};

export const logout = async () => {
  await secureStoreDelete('token');
};
