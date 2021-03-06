import {
    CHANGE_GROSS,
    CHANGE_TAX,
    CHANGE_MONTH,
    CHANGE_AMOUNT,
    PUSH_VIOLATION,
} from '_redux/types';

const initialState = {
    initialAmount: 1000.0,
    interest: 0.5,
    period: 12,
    gross: 1061.67,
    tax: 0,
    violations: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_GROSS:
            return { ...state, gross: action.payload };
        case CHANGE_TAX:
            return { ...state, tax: action.payload };
        case CHANGE_MONTH:
            return { ...state, period: action.payload };
        case CHANGE_AMOUNT:
            return { ...state, initialAmount: action.payload };
        case PUSH_VIOLATION:
            return { ...state, violations: [action.payload.type] };
        default:
            return state;
    }
};
