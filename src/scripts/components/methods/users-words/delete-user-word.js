import { callApi } from '../call-api';

export const deleteUserWord = async (userId, wordId) => {
  const token = localStorage.getItem('token');
  try {
    const method = 'DELETE';
    const url = `/users/${userId}/words/${wordId}`;
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

// deleteUserWord(
//   '62057f3148cc260016224ec1',
//   '5e9f5ee35eb9e72bc21af716',
// );
