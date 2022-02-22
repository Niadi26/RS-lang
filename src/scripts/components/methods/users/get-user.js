import { callApi } from '../call-api';
import { replaceToken } from '../replace-token';

export const getUser = async (integer) => {
  let tokenLocal = localStorage.getItem('token');
  const method = 'GET';
  const url = `/users/${integer}`;
  const body = {};
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(tokenLocal)}`,
    };
    const response = await callApi(method, url, body, headers);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      replaceToken();
    }
    if (localStorage.getItem('token') !== 'null') {
      tokenLocal = localStorage.getItem('token');
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(tokenLocal)}`,
      };
      const response = await callApi(method, url, body, headers);
      return response.data;
    }
  }
};

// getUser('621126d94806ad0016df10dc');
