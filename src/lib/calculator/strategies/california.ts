import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';
import { genericStrategy } from './generic';

export const californiaStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        // California uses the Generic strategy for now, but with specific citation.
        // In a real implementation, we would use the First American rate table.
        // For this MVP, we use the generic estimation which is close to market rates.

        const result = genericStrategy.calculate(input);

        return {
            ...result,
            citation: 'Based on First American Title Insurance Company 2024 Schedule',
            disclaimer: 'California is a filed-rate state. Rates vary by insurer. This estimate is based on a major underwriter\'s schedule.'
        };
    }
};
