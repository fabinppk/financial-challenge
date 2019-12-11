export const grossCalculator = async (initialAmount, interest, period) => {
    const gross = await (initialAmount * Math.pow(1 + interest / 100, period));
    return gross;
};

export const taxCalculator = (gross, period) => {
    let tax = 0;

    if (period <= 6) tax = -gross * 0.225;
    if (period > 6 && period <= 12) tax = -gross * 0.2;
    if (period > 12 && period <= 18) tax = -gross * 0.175;
    if (period > 18) tax = -gross * 0.15;

    return Math.abs(tax);
};

export default { grossCalculator, taxCalculator };
