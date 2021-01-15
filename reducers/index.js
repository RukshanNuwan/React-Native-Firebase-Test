import { combineReducers } from 'redux';

import ItemReducer from './ItemReducer';

// Only this reducer can access the store
const rootReducer = combineReducers({
    itemList: ItemReducer,
});

export default rootReducer;