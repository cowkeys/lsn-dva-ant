import fetch from 'dva/fetch';
import { message } from 'antd';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText||"errparseError");
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options={},tip = false) {
  options = {
      ...options,
      credentials: 'include',
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {
        if (tip&&data.err) {
            message.error(" 错误！ ",10);
            console.log(url," 错误！ ",new Date() +' : ',data.err);
        }
        if (tip&&!data.err) {
            message.success("操作成功!",5);
        }
        return {data}
    })
    .catch(function(err) {
        message.error("出现错误！");
        console.log("错误！catch | ",new Date() +' : ',err);
        return {err}
    })
}
