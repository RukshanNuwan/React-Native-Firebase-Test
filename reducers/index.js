import { combineReducers } from 'redux';

import ItemReducer from './ItemReducer';

const rootReducer = combineReducers({
    itemList: ItemReducer,
});

export default rootReducer;