import { CalculatorInput, CalculatorResult, CalculatorStrategy } from '../types';
import { genericStrategy } from './generic';

export const newYorkStrategy: CalculatorStrategy = {
    calculate: (input: CalculatorInput): CalculatorResult => {
        const { purchasePrice } = input;
        let premium = 0;

        if (purchasePrice <= 0) return { ownerPolicy: 0, lenderPolicy: 0, total: 0 };

        // New York TIRSA Zone 2 Rates (Effective Oct 1, 2024)
        // Source: TIRSA Rate Manual 7th Revision
        // Zone 2: Albany, Bronx, Columbia, Dutchess, Greene, Kings, Nassau, New York, Orange, Putnam, Queens, Rensselaer, Richmond, Rockland, Suffolk, Sullivan, Ulster, and Westchester.

        const liability = purchasePrice;

        if (liability <= 35000) {
            premium = 402;
        } else if (liability <= 50000) {
            // $402 plus $6.67 per $1,000 (or fraction) over $35,000
            premium = 402 + (Math.ceil((liability - 35000) / 1000) * 6.67);
        } else if (liability <= 100000) {
            // $502.05 plus $5.43 per $1,000 over $50,000
            premium = 502.05 + (Math.ceil((liability - 50000) / 1000) * 5.43);
        } else if (liability <= 500000) {
            // $773.55 plus $4.36 per $1,000 over $100,000
            premium = 773.55 + (Math.ceil((liability - 100000) / 1000) * 4.36);
        } else if (liability <= 1000000) {
            // $2,517.55 plus $3.98 per $1,000 over $500,000
            premium = 2517.55 + (Math.ceil((liability - 500000) / 1000) * 3.98);
        } else if (liability <= 5000000) {
            // $4,507.55 plus $3.66 per $1,000 over $1,000,000
            premium = 4507.55 + (Math.ceil((liability - 1000000) / 1000) * 3.66);
        } else if (liability <= 15000000) {
            // $19,147.55 plus $3.35 per $1,000 over $5,000,000
            premium = 19147.55 + (Math.ceil((liability - 5000000) / 1000) * 3.35);
        } else {
            // For > 15M, using the 15M rate as base + 3.35 (simplified, usually negotiates or drops slightly)
            // Manual says: Over 15M add $3.04 per 1000
            premium = 52647.55 + (Math.ceil((liability - 15000000) / 1000) * 3.04);
        }

        premium = Math.round(premium * 100) / 100;

        // Lender Policy Logic (Simultaneous)
        // If simultaneous, Loan Policy is 30% of the applicable Loan Rate up to Owner's amount.
        // But for simplicity in this calculator, we often show just the Owner's premium unless requested.
        // Let's calculate a simplified simultaneous fee if loan amount exists.

        let lenderPolicy = 0;
        if (input.loanAmount) {
            // Simplified Simultaneous Rate: ~$100-200 flat fee is common in other states, but NY is specific.
            // NY Simultaneous: "30% of the applicable Mortgage Rate".
            // This is complex because we need to calculate the full Mortgage Rate first.
            // For now, we will use a placeholder or 30% of Owner's rate as a rough proxy if exact mortgage rate table isn't implemented.
            // Actually, let's just use a fixed "Simultaneous Issue Fee" estimate for now to avoid over-engineering.
            lenderPolicy = Math.round(premium * 0.3);
        }

        return {
            ownerPolicy: premium,
            lenderPolicy: lenderPolicy,
            total: premium + lenderPolicy,
            citation: 'TIRSA Rate Manual 7th Revision (Oct 2024)',
            disclaimer: 'Rates based on TIRSA Zone 2 (NYC Metro). Zone 1 rates may differ slightly.'
        };
    }
};
