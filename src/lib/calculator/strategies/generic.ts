import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';

export const genericStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        const { purchasePrice } = input;

        // Generic estimation model based on national averages / major underwriter curves
        // Roughly $4-$6 per thousand for first 100k, then declining.
        // This is a "Tier 2" estimation.

        let premium = 0;
        if (purchasePrice <= 100000) {
            premium = Math.ceil(purchasePrice / 1000) * 5.75; // Similar to FL base
        } else if (purchasePrice <= 1000000) {
            premium = (100 * 5.75) + (Math.ceil((purchasePrice - 100000) / 1000) * 4.50);
        } else {
            premium = (100 * 5.75) + (900 * 4.50) + (Math.ceil((purchasePrice - 1000000) / 1000) * 3.00);
        }

        premium = Math.round(premium);

        let lenderPolicy = 0;
        if (input.loanAmount) {
            lenderPolicy = 50; // Generic simultaneous issue fee
        }

        return {
            ownerPolicy: premium,
            lenderPolicy: lenderPolicy,
            total: premium + lenderPolicy,
            citation: 'Estimated based on national averages. Actual rates may vary by underwriter.',
            disclaimer: 'This is an estimate. Please contact a local title company for an exact quote.'
        };
    }
};
