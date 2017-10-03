export const makeFetch = (url, method, data) => {
  let body = JSON.stringify(data);

  return fetch(url, {
    method: method,
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
