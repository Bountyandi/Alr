import * as types from '../constants/ActionsTypes'

export const setParagraphs = paragraphs => {
  return {
    type: types.SET_PARAGRAPHS,
    paragraphs
  }
};

export const setSavedParagraphs = savedParagraphs => {
  return {
    type: types.SET_SAVED_PARAGRAPHS,
    savedParagraphs
  }
};

export const setURL = articleUrl => {
  return {
    type: types.SET_URL,
    articleUrl
  }
};


export const deleteSavedParagraph = (_id) => {
  return {
    type: types.DELETE_SAVED_PARAGRAPH,
    _id
  }
};

export const approveParagraph = (data) => {
  return dispatch => {
    fetch('/api/paragraphs/setApproved/', {
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


/* Middleware  */

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

/**/

export const removeParagraph = (data) => {
  return dispatch => {
    fetch('/api/paragraphs/', {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then(function(res){
      dispatch(deleteSavedParagraph(data._id))
    })

    //.then(handleResponce)
  }

}

export function handleResponce(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

