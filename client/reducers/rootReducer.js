import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import paragraphs from './paragraphs';
import url from './url';
import loading from './loading';
import savedParagraphs from './savedParagraphs';


export default combineReducers({
  routing: routerReducer,
  paragraphs,
  url,
  loading,
  savedParagraphs
});


