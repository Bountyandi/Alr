import {
  SET_SAVED_PARAGRAPHS,
  DELETE_SAVED_PARAGRAPH,
  APPROVE_PARAGRAPH
} from '../constants/ActionsTypes'

const initialState = [];

const savedParagraphs = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_PARAGRAPHS:
      return action.savedParagraphs;
    case DELETE_SAVED_PARAGRAPH:
      return state.filter(p =>
        p._id !== action._id
      );

    default: return state
  }
};

export default savedParagraphs
