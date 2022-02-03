import { callApi } from './call-api';

const createUser = async (user) => {
  try {
    const method = 'POST';
    const url = `/users/`;
    // const body = { username, email, password };
    // const body = JSON.stringify(user);
    const body = user;
    console.log(body);
    const response = await callApi(method, url, body);
    const dataUser = response.data;
    console.log(dataUser);
    return dataUser;
  } catch (error) {
    console.log(error);
    return;
  }
};

createUser({
  name: 'Mowgle',
  email: 'hello@user.com',
  password: 'Gfhjkm_123',
});
