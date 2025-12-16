export interface CalculatorInput {
    state: string; // slug
    purchasePrice: number;
    loanAmount?: number; // For lender's policy
    policyType: 'owner' | 'lender' | 'both';
}

export interface CalculatorResult {
    ownerPolicy: number;
    lenderPolicy: number;
    total: number;
    breakdown?: {
        label: string;
        amount: number;
    }[];
    citation?: string;
    disclaimer?: string;
}

export interface CalculatorStrategy {
    calculate: (input: CalculatorInput) => CalculatorResult;
}
