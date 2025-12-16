import { CalculatorInput, CalculatorResult, CalculatorStrategy } from './types';
import { texasStrategy } from './strategies/texas';
import { floridaStrategy } from './strategies/florida';
import { californiaStrategy } from './strategies/california';
import { newYorkStrategy } from './strategies/new_york';
import { pennsylvaniaStrategy } from './strategies/pennsylvania';
import { genericStrategy } from './strategies/generic';

const strategies: Record<string, CalculatorStrategy> = {
    'texas': texasStrategy,
    'florida': floridaStrategy,
    'california': californiaStrategy,
    'new-york': newYorkStrategy,
    'pennsylvania': pennsylvaniaStrategy,
    // Add other specific strategies here
};

export const calculateTitleInsurance = (input: CalculatorInput): CalculatorResult => {
    const strategy = strategies[input.state] || genericStrategy;
    return strategy.calculate(input);
};
