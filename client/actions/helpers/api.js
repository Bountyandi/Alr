import { handleResponse } from './handleResponse';
import { makeFetch } from './makeFetch';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export default class API {

  static get(url){
    return fetch(url)
      .then(handleResponse);
  }

  static post(url, data) {
    return makeFetch(url, METHODS.POST, data)
      .then(handleResponse);
  }

  static put(url, data){
    return makeFetch(url, METHODS.PUT, data)
      .then(handleResponse);
  }

  static delete(url, data){
    return makeFetch(url, METHODS.DELETE, data)
      .then(handleResponse);
  }

}
