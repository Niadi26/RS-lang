import { callApi } from './call-api';

const getWordss = async (page, group) => {
  try {
    const method = 'GET';
    const url = `/words?page=${page}&group=${group}`;
    const response = await callApi(method, url);
    const dataWords = response.data;
    console.log(response);
    console.log(dataWords[0].id);
    return dataWords;
  } catch (error) {
    console.log(error);
    return;
  }
};

getWordss(0, 0);
