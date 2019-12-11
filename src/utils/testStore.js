import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '_redux/reducers';

const testStore = (initialState = {}) => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
};

export default testStore;
