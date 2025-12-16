import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';
import { genericStrategy } from './generic';

export const pennsylvaniaStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        const { purchasePrice } = input;
        let premium = 0;

        if (purchasePrice <= 0) return { ownerPolicy: 0, lenderPolicy: 0, total: 0 };

        // Pennsylvania TIRBOP Rates (Effective Aug 1, 2024)
        // Source: TIRBOP Manual of Rates
        // Using "Approved Attorney Procedure" Schedule (Section 5.51) as a baseline for calculation.
        // Note: "All-Inclusive" rates might be higher if using Company Procedure, but this provides a solid regulated baseline.

        const liability = purchasePrice;

        if (liability <= 30000) {
            premium = 142;
        } else if (liability <= 100000) {
            // $142 plus $3.70 per $1,000 (or fraction) over $30,000
            premium = 142 + (Math.ceil((liability - 30000) / 1000) * 3.70);
        } else if (liability <= 500000) {
            // Rate for 100k is: 142 + (70 * 3.70) = 142 + 259 = 401
            // Plus $3.13 per $1,000 over $100,000
            premium = 401 + (Math.ceil((liability - 100000) / 1000) * 3.13);
        } else if (liability <= 1000000) {
            // Rate for 500k is: 401 + (400 * 3.13) = 401 + 1252 = 1653
            // Plus $2.85 per $1,000 over $500,000
            premium = 1653 + (Math.ceil((liability - 500000) / 1000) * 2.85);
        } else if (liability <= 2000000) {
            // Rate for 1M is: 1653 + (500 * 2.85) = 1653 + 1425 = 3078
            // Plus $2.56 per $1,000 over $1,000,000
            premium = 3078 + (Math.ceil((liability - 1000000) / 1000) * 2.56);
        } else if (liability <= 7000000) {
            // Rate for 2M is: 3078 + (1000 * 2.56) = 3078 + 2560 = 5638
            // Plus $2.28 per $1,000 over $2,000,000
            premium = 5638 + (Math.ceil((liability - 2000000) / 1000) * 2.28);
        } else {
            // Rate for 7M is: 5638 + (5000 * 2.28) = 5638 + 11400 = 17038
            // Plus $1.71 per $1,000 over $7,000,000
            premium = 17038 + (Math.ceil((liability - 7000000) / 1000) * 1.71);
        }

        premium = Math.round(premium * 100) / 100;

        // PA Simultaneous Issue
        // If Owner's and Loan policies are issued simultaneously, the Loan Policy is usually issued for a nominal fee or based on the "Sale Rate" for the higher amount.
        // TIRBOP Manual Section 5.50/5.51 implies simultaneous issue rules.
        // Commonly, if Loan Amount <= Sales Price, the loan policy is included or has a small fee (e.g. $100 for endorsement).
        // Let's use a flat $125 estimate for simultaneous issue endorsement/fee.

        let lenderPolicy = 0;
        if (input.loanAmount) {
            lenderPolicy = 125;
        }

        return {
            ownerPolicy: premium,
            lenderPolicy: lenderPolicy,
            total: premium + lenderPolicy,
            citation: 'TIRBOP Manual of Rates (Aug 2024)',
            disclaimer: 'Rates based on TIRBOP Approved Attorney Procedure (Section 5.51). All-inclusive rates may vary by agent.'
        };
    }
};
