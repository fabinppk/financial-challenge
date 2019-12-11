import {
    CHANGE_GROSS,
    CHANGE_TAX,
    CHANGE_MONTH,
    CHANGE_AMOUNT,
    PUSH_VIOLATION
} from '_redux/types';

const setGross = value => {
    return async dispatch => {
        await dispatch({ type: CHANGE_GROSS, payload: value });
    };
};

const setTax = value => {
    return async dispatch => {
        await dispatch({ type: CHANGE_TAX, payload: value });
    };
};

const setMonth = value => {
    if (value < 0 || value > 60) {
        return async dispatch => {
            await dispatch({
                type: PUSH_VIOLATION,
                payload: { value, type: 'invalid-period' }
            });
        };
    }
    return async dispatch => {
        await dispatch({ type: CHANGE_MONTH, payload: value });
    };
};

const setAmount = value => {
    if (value < 0) {
        return async dispatch => {
            await dispatch({
                type: PUSH_VIOLATION,
                payload: { value, type: 'invalid-initialAmount' }
            });
        };
    }
    return async dispatch => {
        await dispatch({ type: CHANGE_AMOUNT, payload: value });
    };
};

export default {
    setGross,
    setTax,
    setMonth,
    setAmount
};
