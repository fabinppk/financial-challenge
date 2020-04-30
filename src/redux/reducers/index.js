import { combineReducers } from 'redux';
import financialReducer from '_redux/reducers/financialReducer';

const rootReducer = combineReducers({
    financial: financialReducer,
});

export default rootReducer;
