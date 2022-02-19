import { callApi } from '../call-api';
import { getUserTokens } from './get-user-tokens';

export const getUser = async (integer) => {
  const token = localStorage.getItem('token');
  const method = 'GET';
  const url = `/users/${integer}`;
  const body = {};
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const response = await callApi(method, url, body, headers);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      const dataRes = await getUserTokens(integer);
      const newToken = JSON.stringify(dataRes.token);
      const newRefreshToken = JSON.stringify(dataRes.refreshToken);
      localStorage.setItem('token', newToken);
      localStorage.setItem('refreshToken', newRefreshToken);
    }
    token = localStorage.getItem('token');
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const response = await callApi(method, url, body, headers);
    return response.data;
  }
};

// getUser('621126d94806ad0016df10dc');
