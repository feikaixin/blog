import fetch from 'isomorphic-unfetch';
import config from '../config';

const request = async (url, option) => {
  const defaultOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const newUrl = `${config.domain}:${config.port}${url}`;
  const newOption = { ...defaultOption, ...option };
  const result = await fetch(newUrl,newOption);
  const data = await result.json();
  return data;
}

export default request;