import { combineReducers } from 'redux';

import tasks from './tasks';
import popup from './popup';

const rootReducer = combineReducers({
  tasks,
  popup,
});

export default rootReducer;