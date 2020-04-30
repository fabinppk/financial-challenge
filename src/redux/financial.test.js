import testStore from '_utils/testStore';
import financialActions from '_redux/actions';

describe('financialActions', () => {
    const expectedState = {
        financial: {
            gross: 0,
            initialAmount: 1000,
            interest: 0.5,
            period: 12,
            tax: 0,
            violations: [],
        },
    };

    test('Store invalidAmount', () => {
        const store = testStore();
        store.dispatch(financialActions.setAmount(-30));
        const newState = store.getState();
        expect(newState.financial.violations).toStrictEqual(['invalid-initialAmount']);
    });

    test('Store invalidPeriod', () => {
        const store = testStore();
        store.dispatch(financialActions.setMonth(-6));
        const newState = store.getState();
        expect(newState.financial.violations).toStrictEqual(['invalid-period']);
    });

    test('Store with initialState', () => {
        const store = testStore(expectedState);
        expect(store.getState().financial).toBe(expectedState.financial);
    });

    test('Store setGross', () => {
        const store = testStore();
        store.dispatch(financialActions.setGross(1550));
        const newState = store.getState();
        expect(newState.financial.gross).toStrictEqual(1550);
    });

    test('Store setTax', () => {
        const store = testStore();
        store.dispatch(financialActions.setTax(1450));
        const newState = store.getState();
        expect(newState.financial.tax).toStrictEqual(1450);
    });

    test('Store setMonth', () => {
        const store = testStore();
        const newState = store.getState();
        expect(newState.financial.period).toStrictEqual(12);
        store.dispatch(financialActions.setMonth(12));
        expect(newState.financial.period).toStrictEqual(12);
    });

    test('Store setAmount', () => {
        const store = testStore();
        store.dispatch(financialActions.setAmount(1230));
        const newState = store.getState();
        expect(newState.financial.initialAmount).toStrictEqual(1230);
    });
});
