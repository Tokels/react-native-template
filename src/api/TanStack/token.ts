import { secureStoreDelete, secureStoreGetValueFor, secureStoreSave } from '../SecureStore';
import { Token, tokenInit } from './interface';

export const initialize = async (): Promise<Token> => {
  const token = await secureStoreGetValueFor('token');
  const parsedToken = JSON.parse(token) as Token;
  const now = Date.now();
  const tokenHasExpired = parsedToken.expires < now;
  return tokenHasExpired ? tokenInit : parsedToken;
};

export const login = async (): Promise<Token> => {
  const token = await Promise.resolve({
    accessToken: 'valid-token',
    expires: Date.now() + 86400000,
  }); // Will be replaced with API call
  await secureStoreSave('token', JSON.stringify(token));
  return token;
};

export const refresh = async (): Promise<Token> => {
  const token = await Promise.resolve({
    accessToken: 'valid-token',
    expires: Date.now() + 86400000,
  }); // Will be replaced with API call
  await secureStoreSave('token', JSON.stringify(token));
  return token;
};

export const register = async (): Promise<Token> => {
  const token = await Promise.resolve({
    accessToken: 'valid-token',
    expires: Date.now() + 86400000,
  }); // Will be replaced with API call
  await secureStoreSave('token', JSON.stringify(token));
};

export const logout = async () => {
  await secureStoreDelete('token');
};
