import {
  SET_URL
} from '../constants/ActionsTypes'

const initialState = '';

const url = (state = initialState, action) => {
  switch (action.type) {
    case SET_URL:
      return action.articleUrl;

    default: return state
  }
};

export default url
