import { callApi } from '../call-api';

export const updateUserWord = async (userId, wordId, word) => {
  const token = localStorage.getItem('token');
  try {
    const method = 'PUT';
    const url = `/users/${userId}/words/${wordId}`;
    const body = JSON.stringify(word);
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

// updateUserWord(
//   '62057f3148cc260016224ec1',
//   '5e9f5ee35eb9e72bc21af716',
//   { difficulty: 'strong', optional: { testFieldString: 'test', testFieldBoolean: true } },
// );
