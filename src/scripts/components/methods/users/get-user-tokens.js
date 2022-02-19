import { callApi } from '../call-api';

export const getUserTokens = async (integer) => {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const method = 'GET';
    const url = `/users/${integer}/tokens`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(refreshToken)}`,
    };
    const body = {};
    const response = await callApi(method, url, body, headers);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      alert('You have been out of the system for too long! Log in again!');
    }
  }
};

// getUserTokens('61fe572351aa2800163c35a3');
