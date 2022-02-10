import { callApi } from '../call-api';

const token = localStorage.getItem('token');

export const updateUserWord = async (obj) => {
  try {
    const method = 'PUT';
    const url = `/users/${obj.userId}/words/${obj.wordId}`;
    const body = JSON.stringify(obj.word);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const response = await callApi(method, url, body, headers);
    const dataUser = response.data;
    console.log(dataUser);
    return dataUser;
  } catch (error) {
    console.log(error);
  }
};

// updateUserWord({
//   userId: '62057f3148cc260016224ec1',
//   wordId: '5e9f5ee35eb9e72bc21af716',
//   word: { difficulty: 'strong', optional: { testFieldString: 'test', testFieldBoolean: true } },
// });
