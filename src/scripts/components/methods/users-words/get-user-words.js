import { callApi } from '../call-api';

export const getUserWords = async (integer) => {
  const token = localStorage.getItem('token');
  try {
    const method = 'GET';
    const url = `/users/${integer}/words`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = {};
    const response = await callApi(method, url, body, headers);
    const dataRes = response.data;
    console.log(dataRes);
    return dataRes;
  } catch (error) {
    console.log(error);
    return;
  }
};

// getUserWords('62057f3148cc260016224ec1');
