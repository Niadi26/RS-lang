import { callApi } from '../call-api';

export const getUser = async (integer) => {
  const token = localStorage.getItem('token');
  try {
    const method = 'GET';
    const url = `/users/${integer}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = {};
    const response = await callApi(method, url, body, headers);
    const dataUser = response.data;
    // console.log(response.data);
    return dataUser;
  } catch (error) {
    console.log(error);
  }
};

// getUser('61fe572351aa2800163c35a3');
