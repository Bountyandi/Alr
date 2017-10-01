import {
  SET_LOADING
} from '../constants/ActionsTypes';

const initialState = false;

const url = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;

    default: return state
  }
};

export default url
