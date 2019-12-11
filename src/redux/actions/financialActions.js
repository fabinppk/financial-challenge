import { CHANGE_GROSS, CHANGE_TAX, CHANGE_MONTH, CHANGE_AMOUNT } from '_redux/types';

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
    return async dispatch => {
        await dispatch({ type: CHANGE_MONTH, payload: value });
    };
};

const setAmount = value => {
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
