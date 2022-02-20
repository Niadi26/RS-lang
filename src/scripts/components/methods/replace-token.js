import { getUserTokens } from './users/get-user-tokens';

export const replaceToken = async () => {
  const dataRes = await getUserTokens(integer);
  const newToken = JSON.stringify(dataRes.token);
  const newRefreshToken = JSON.stringify(dataRes.refreshToken);
  localStorage.setItem('token', newToken);
  localStorage.setItem('refreshToken', newRefreshToken);
};
