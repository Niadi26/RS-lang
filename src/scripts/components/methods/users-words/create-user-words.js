import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const createUserWord = async (obj) => {
  try {
    const method = 'POST';
    const url = `/users/${obj.userId}/words/${obj.wordId}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = JSON.stringify(obj.word);
    const response = await callApi(method, url, body, headers);
    const dataRes = response.data;
    console.log(dataRes);
    return dataRes;
  } catch (error) {
    console.log(error);
    return;
  }
};

// createUserWord({
//   userId: '62057f3148cc260016224ec1',
//   wordId: '5e9f5ee35eb9e72bc21af4a4',
//   word: { difficulty: 'weak', optional: { testFieldString: 'test', testFieldBoolean: true } },
// });
