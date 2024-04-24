import { createStore, combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth:authReducer
});

const Store = createStore(
    rootReducer,
);

export default Store;