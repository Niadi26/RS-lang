import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const deleteUser = async (id) => {
  try {
    const method = 'DELETE';
    const url = `/users/${id}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = {};
    const response = await callApi(method, url, body, headers);
    const dataUser = response.data;
    console.log(response);
    return dataUser;
  } catch (error) {
    console.log(error);
  }
};

// deleteUser('61fe572351aa2800163c35a3');
