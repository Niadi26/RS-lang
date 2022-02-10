import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const getUser = async (integer) => {
  try {
    const method = 'GET';
    const url = `/users/${integer}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = {};
    console.log(headers);
    const response = await callApi(method, url, body, headers);
    const dataUser = response.data;
    console.log(response);
    return dataUser;
  } catch (error) {
    console.log(error);
  }
};

// getUser('61fe572351aa2800163c35a3');
