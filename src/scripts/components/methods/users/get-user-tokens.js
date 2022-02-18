import { callApi } from '../call-api';

export const getUserTokens = async (integer) => {
  const token = localStorage.getItem('token');
  try {
    const method = 'GET';
    const url = `/users/${integer}/tokens`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = {};
    const response = await callApi(method, url, body, headers);
    // const dataUser = response.data;
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// getUserTokens('61fe572351aa2800163c35a3');
