import { combineReducers , legacy_createStore as createStore } from 'redux';
import categoryReducer from './components/reducers/categoryReducer';
import merchantReducer from './components/reducers/merchantReducer';

// Define your reducers here

const rootReducer = combineReducers({
    category : categoryReducer,
    merchant : merchantReducer,
});

const store = createStore(rootReducer);

export default store;