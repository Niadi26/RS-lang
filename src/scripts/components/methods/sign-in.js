import { callApi } from './call-api';

const signIn = async (user) => {
  try {
    const method = 'POST';
    const url = `/signin`;
    const body = JSON.stringify(user);
    const response = await callApi(method, url, body);
    const dataRes = response.data;
    // const string = JSON.stringify(dataRes);
    // localStorage.setItem('userData', string);
    const token = JSON.stringify(dataRes.token);
    localStorage.setItem('token', token);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

signIn({ email: 'mowgle1988@gmail.com', password: 'dmitriel6905784' });
