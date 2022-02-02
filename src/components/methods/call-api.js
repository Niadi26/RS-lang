import axios from 'axios';

export const callApi = async (method, url, body) => {
  const baseUrl = 'http://localhost:3000';
  const res = await axios({
    method,
    url: `${baseUrl}${url}`,
    data: body,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
  return res;
};
