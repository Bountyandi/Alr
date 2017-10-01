import {
  setParagraphs,
  setSavedParagraphs,
  setURL,
  deleteSavedParagraph,
  setLoading
} from './actions'

export const fetchSavedParagraphs = (url) => {
  return dispatch => {
    fetch(`api/paragraphs/`)
      .then(handleResponce)
      .then(data => {
        dispatch(setSavedParagraphs(data.paragraphs));
      })
  }
};

export const fetchParagraphs = (url) => {
  return dispatch => {
    fetch(`api/article/${url}`)
      .then(handleResponce)
      .then(data => {
        dispatch(setLoading(false));
        dispatch(setURL(data.articleUrl));
        dispatch(setParagraphs(data.paragraphs));
      })
  }
};

export function sendChanges(data) {
  return dispatch => {
    fetch('/api/paragraphs/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(handleResponce)
  }
}

export const approveParagraph = (data) => {
  return dispatch => {
    fetch('/api/paragraphs/', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(handleResponce)
      .then(function (res) {
        dispatch(deleteSavedParagraph(res._id))
      })
  }
};

export const removeParagraph = (data) => {
    return dispatch => {
    fetch('/api/paragraphs/', {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json' //,
        //"Accept": "application/json",
      }
    }).then(function(res){
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