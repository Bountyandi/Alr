const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export default class API {

  static get(url){
    return fetch(url);
  }

  static post(url, data) {
    return makeFetch(url, METHODS.POST, data);
  }

  static put(url, data){
    return makeFetch(url, METHODS.PUT, data);
  }

  static delete(url, data){
    return makeFetch(url, METHODS.DELETE, data);
  }

}


function makeFetch(url, method, data){
  let body = JSON.stringify(data);

  return fetch(url, {
    method: method,
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
