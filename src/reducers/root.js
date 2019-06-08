import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import data from './data';
import local from './local';
import fetching from './fetching';
import search from './search';
import pagination from './pagination';

const RootReducer = (history) => combineReducers({
  fetching,
  search,
  pagination,
  router: connectRouter(history),
  data,
  local,
});

export default RootReducer;
