import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const getUserWord = async (obj) => {
  try {
    const method = 'GET';
    const url = `/users/${obj.userId}/words/${obj.wordId}`;
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

// getUserWord({
//   userId: '62057f3148cc260016224ec1',
//   wordId: '5e9f5ee35eb9e72bc21af716',
// });
