import axios from 'axios';

export const callApi = async (method, url, body, headers) => {
  // const baseUrl = 'http://localhost:3000';
  const baseUrl = 'https://react-rslang-by.herokuapp.com';
  const head = headers ? headers : { 'Content-Type': 'application/json; charset=utf-8' };
  const res = await axios({
    method,
    url: `${baseUrl}${url}`,
    data: body,
    headers: head,
  });
  return res;
};
