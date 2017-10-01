import * as types from '../constants/ActionsTypes'

export const setParagraphs = paragraphs => {
  return {
    type: types.SET_PARAGRAPHS,
    paragraphs
  }
};

export const setLoading = loading => {
  return {
    type: types.SET_LOADING,
    loading
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
