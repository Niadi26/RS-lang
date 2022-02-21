import { callApi } from '../call-api';

export const createUserWord = async (userId, wordId, word) => {
  const token = localStorage.getItem('token');
  try {
    const method = 'POST';
    const url = `/users/${userId}/words/${wordId}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
    const body = JSON.stringify(word);
    const response = await callApi(method, url, body, headers);
    const dataRes = response.data;
    // console.log(dataRes);
    return dataRes;
  } catch (error) {
    console.log(error);
    return;
  }
};

// createUserWord(
//   '62057f3148cc260016224ec1',
//   '5e9f5ee35eb9e72bc21af4a4',
//   { difficulty: 'weak', optional: { testFieldString: 'test', testFieldBoolean: true } },
// );
