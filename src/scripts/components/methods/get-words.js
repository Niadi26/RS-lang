import { callApi } from './call-api';

export const getWords = async (group, page) => {
  try {
    const method = 'GET';
    const url = `/words?group=${group}&page=${page}`;
    // const headers = {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // };
    // const response = await callApi(method, url, headers);
    const response = await callApi(method, url);
    const dataWords = response.data;
    // console.log(dataWords);
    return dataWords;
  } catch (error) {
    console.log(error);
    return;
  }
};
