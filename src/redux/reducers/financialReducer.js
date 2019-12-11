import { CHANGE_GROSS, CHANGE_TAX, CHANGE_MONTH } from '_redux/types';

const initialState = {
    initialAmount: 1000.0,
    interest: 0.5,
    period: 12,
    gross: 0,
    tax: 0,
    violations: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_GROSS:
            return { ...state, gross: action.payload };
        case CHANGE_TAX:
            return { ...state, tax: action.payload };
        case CHANGE_MONTH:
            return { ...state, period: action.payload };

        default:
            return state;
    }
};
