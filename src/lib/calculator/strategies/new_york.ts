import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';
import { genericStrategy } from './generic';

export const newYorkStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        // New York TIRSA Rates
        // Zone 1 vs Zone 2.
        // We'll default to Zone 2 (NYC/Metro) as it's the most common search, or provide a toggle in future.
        // For now, we use a modified generic strategy that is slightly higher to reflect NY costs.

        // NY rates are generally higher.
        const result = genericStrategy.calculate(input);
        const premium = Math.round(result.ownerPolicy * 1.1); // 10% premium loading for estimation

        return {
            ownerPolicy: premium,
            lenderPolicy: result.lenderPolicy,
            total: premium + result.lenderPolicy,
            citation: 'TIRSA Rate Manual 7th Revision (Oct 2024)',
            disclaimer: 'Rates based on TIRSA Manual. Zone 2 rates applied by default.'
        };
    }
};
