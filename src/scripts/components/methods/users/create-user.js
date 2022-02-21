import { callApi } from '../call-api';

export const createUser = async (user) => {
  try {
    const method = 'POST';
    const url = `/users`;
    const body = JSON.stringify(user);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const response = await callApi(method, url, body, headers);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

// createUser({ email: 'mowgle@gmail.com', password: 'dmitriel6905784' });
