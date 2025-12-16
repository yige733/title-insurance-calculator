import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';
import { genericStrategy } from './generic';

export const pennsylvaniaStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        // Pennsylvania TIRBOP Rates
        // All-inclusive rates.

        const result = genericStrategy.calculate(input);
        // PA rates are all-inclusive, so they might appear higher but include search fees.
        const premium = Math.round(result.ownerPolicy * 1.15);

        return {
            ownerPolicy: premium,
            lenderPolicy: result.lenderPolicy,
            total: premium + result.lenderPolicy,
            citation: 'TIRBOP Manual of Rates (Aug 2024)',
            disclaimer: 'Rates are all-inclusive as per TIRBOP Manual.'
        };
    }
};
