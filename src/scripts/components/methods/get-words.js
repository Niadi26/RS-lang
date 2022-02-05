import { callApi } from './call-api';

const getWordss = async (page, group) => {
  try {
    const method = 'GET';
    const url = `/words?page=${page}&group=${group}`;
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

getWordss(0, 0);
