import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const updateUser = async (id, email, password) => {
  try {
    const method = 'PUT';
    const url = `/users/${id}`;
    const body = { email, password };
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const response = await callApi(method, url, body, headers);
    const dataUser = response.data;
    console.log(response);
    return dataUser;
  } catch (error) {
    console.log(error);
  }
};

// updateUser('61fe572351aa2800163c35a3', 'la@users.com', 'dmitriel666999');
