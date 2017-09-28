import {
  SET_PARAGRAPHS
} from '../constants/ActionsTypes'

const initialState = [];

const paragraphs = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARAGRAPHS:
      return action.paragraphs
    default: return state
  }
};

export default paragraphs
