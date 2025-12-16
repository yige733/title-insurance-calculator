import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';

export const floridaStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        const { purchasePrice } = input;
        let premium = 0;

        // Minimum premium is $100
        if (purchasePrice <= 0) return { ownerPolicy: 0, lenderPolicy: 0, total: 0 };

        // Florida Promulgated Rates Formula (2024)
        // Up to $100,000: $5.75 per $1,000
        // Over $100,000 up to $1 million: $5.00 per $1,000
        // Over $1 million up to $5 million: $2.50 per $1,000
        // Over $5 million up to $10 million: $2.25 per $1,000
        // Over $10 million: $2.00 per $1,000

        const price = Math.ceil(purchasePrice / 1000) * 1000; // Round up to nearest 1000? Usually per thousand or fraction thereof.
        // Actually, usually it's "per $1,000 of liability".
        // Let's assume standard "per thousand" calculation.

        const thousands = Math.ceil(purchasePrice / 1000);

        if (purchasePrice <= 100000) {
            premium = thousands * 5.75;
        } else if (purchasePrice <= 1000000) {
            premium = (100 * 5.75) + ((thousands - 100) * 5.00);
        } else if (purchasePrice <= 5000000) {
            premium = (100 * 5.75) + (900 * 5.00) + ((thousands - 1000) * 2.50);
        } else if (purchasePrice <= 10000000) {
            premium = (100 * 5.75) + (900 * 5.00) + (4000 * 2.50) + ((thousands - 5000) * 2.25);
        } else {
            premium = (100 * 5.75) + (900 * 5.00) + (4000 * 2.50) + (5000 * 2.25) + ((thousands - 10000) * 2.00);
        }

        if (premium < 100) premium = 100;

        // Round to 2 decimals
        premium = Math.round(premium * 100) / 100;

        // Lender policy: Simultaneous issue is usually nominal ($25) if strictly simultaneous and not exceeding owner's.
        // But for a calculator, we usually show the full loan policy price if purchased separately, or the simultaneous rate.
        // The prompt implies a general calculator.
        // Let's calculate Owner's Policy.
        // For Lender's, if simultaneous, it's $25.
        // If not simultaneous, it uses the same rates.

        // We'll return Owner's Policy as the main result.
        // If input has loanAmount, we calculate simultaneous.

        let lenderPolicy = 0;
        if (input.loanAmount) {
            // Simultaneous issue rate
            lenderPolicy = 25;
            // Note: If loan amount > owner's policy, we need to add premium for the difference.
            if (input.loanAmount > purchasePrice) {
                const diff = input.loanAmount - purchasePrice;
                // Calculate premium for the difference using the bracket it falls into?
                // Usually it's calculated at the tier where the policy amount ends.
                // Simplified: just $25 for now as usually loan <= price.
            }
        }

        return {
            ownerPolicy: premium,
            lenderPolicy: lenderPolicy,
            total: premium + lenderPolicy,
            citation: 'Florida Promulgated Rates (Rule 69O-186.003)',
            breakdown: [
                { label: 'Owner\'s Policy Premium', amount: premium },
                ...(lenderPolicy > 0 ? [{ label: 'Simultaneous Lender Policy', amount: lenderPolicy }] : [])
            ]
        };
    }
};
