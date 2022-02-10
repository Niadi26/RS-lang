import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const deleteUserWord = async (obj) => {
  try {
    const method = 'DELETE';
    const url = `/users/${obj.userId}/words/${obj.wordId}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = {};
    const response = await callApi(method, url, body, headers);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// deleteUserWord({
//   userId: '62057f3148cc260016224ec1',
//   wordId: '5e9f5ee35eb9e72bc21af716',
// });
