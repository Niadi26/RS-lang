import { callApi } from './call-api';

export const getWord = async (integer) => {
  try {
    const method = 'GET';
    const url = `/words/${integer}`;
    const response = await callApi(method, url);
    const dataWord = response.data;
    // console.log(dataWord);
    return dataWord;
  } catch (error) {
    console.log(error);
  }
};

getWord('5e9f5ee35eb9e72bc21af4a0');
