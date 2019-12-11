import { grossCalculator, taxCalculator } from '_utils/coreCalculator';

describe('Calculator', () => {
    test('grossCalculator', async () => {
        const gross = await grossCalculator(1000, 0.5, 12);
        expect(gross.toFixed(2)).toBe('1061.68');
    });

    test('taxCalculator <=6', async () => {
        const tax = await taxCalculator(61.68, 6);
        expect(tax.toFixed(2)).toBe('13.88');
    });

    test('taxCalculator >6 && <=12', async () => {
        const tax = await taxCalculator(61.68, 12);
        expect(tax.toFixed(2)).toBe('12.34');
    });

    test('taxCalculator >12 && <=18', async () => {
        const tax = await taxCalculator(61.68, 18);
        expect(tax.toFixed(2)).toBe('10.79');
    });

    test('taxCalculator >18', async () => {
        const tax = await taxCalculator(61.68, 60);
        expect(tax.toFixed(2)).toBe('9.25');
    });
});
