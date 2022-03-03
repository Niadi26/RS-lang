import { callApi } from './call-api';

export const signIn = async (user) => {
  try {
    const method = 'POST';
    const url = `/signin`;
    const body = JSON.stringify(user);
    const response = await callApi(method, url, body);
    const dataRes = response.data;
    const token = JSON.stringify(dataRes.token);
    const refreshToken = JSON.stringify(dataRes.refreshToken);
    const userId = JSON.stringify(dataRes.userId);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userId', userId);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 404) {
      alert('User does not exist');
    }
    return;
  }
};

// signIn({ email: 'mowgle@gmail.com', password: 'dmitriel6905784' });
