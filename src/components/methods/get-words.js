import { callApi } from './call-api';

const getWordss = async (page, group) => {
  try {
    const method = 'GET';
    const url = `/words?_page=${page}&group=${group}`;
    const response = await callApi(method, url);
    const dataWords = response.data;
    console.log(response);
    console.log(dataWords);
    return dataWords;
  } catch (error) {
    console.log(error);
    return;
  }
};

getWordss(0, 0);
