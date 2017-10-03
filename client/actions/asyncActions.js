import {
  setParagraphs,
  setSavedParagraphs,
  setURL,
  deleteSavedParagraph,
  setLoading
} from './actions'

import API from './api'


export const getParagraphs = (urlParam) => {
  let url = `/api/article/${urlParam}`;
  return dispatch => {
    API.get(url)
      .then(handleResponce)
      .then(res => {
        dispatch(setLoading(false));
        dispatch(setURL(res.articleUrl));
        dispatch(setParagraphs(res.paragraphs));
      })
  }
};

export const getSavedParagraphs = () => {
  let url = '/api/paragraphs/';
  return dispatch => {
    API.get(url)
      .then(handleResponce)
      .then(res => {
        dispatch(setSavedParagraphs(res.paragraphs));
      })
  }
};

export const sendChanges = (data) => {
  let url = '/api/paragraphs/';
  return dispatch => {
    API.post(url, data)
      .then(handleResponce)
  }
};


export const approveParagraph = (data) => {
  let url = '/api/paragraphs/';
  return dispatch => {
    API.put(url, data)
      .then(handleResponce)
      .then(function (res) {
        dispatch(deleteSavedParagraph(res._id))
      })
  }
};

export const removeParagraph = (data) => {
  let url = '/api/paragraphs/';
  return dispatch => {
    API.delete(url, data)
      .then(function (res) {
      dispatch(deleteSavedParagraph(data._id))
    })
  }
};


function handleResponce(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}