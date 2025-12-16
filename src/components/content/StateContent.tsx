import React from 'react';
import { StateConfig } from '@/data/states';

interface StateContentProps {
    stateConfig: StateConfig;
}

export const StateContent: React.FC<StateContentProps> = ({ stateConfig }) => {
    const { name, tier, citation } = stateConfig;

    return (
        <article className="prose prose-gray max-w-none mt-12">
            <h2>How Title Insurance Rates are Calculated in {name}</h2>
            <p>
                Title insurance premiums in {name} are {tier === 'tier1' ? 'strictly regulated by the state government' : 'determined by market competition and filed rates'}.
                {tier === 'tier1'
                    ? ` This means that all title insurance companies in ${name} are required to charge the exact same premium for the same policy amount. The rates are set by the Department of Insurance and are known as "promulgated rates".`
                    : ` In ${name}, title insurance companies file their rates with the state insurance department. While rates can vary between insurers, they are generally competitive. Our calculator uses rates based on major underwriters to provide a highly accurate estimate.`
                }
            </p>

            {citation && (
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg border">
                    <strong>Note:</strong> The calculations on this page are based on: <em>{citation}</em>.
                </p>
            )}

            <h3>Frequently Asked Questions</h3>

            <div className="space-y-4">
                <details className="group border rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-gray-900">
                        <span>Who pays for title insurance in {name}?</span>
                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700">
                        It varies by county and contract negotiation. In many parts of {name}, it is customary for the seller to pay for the owner's policy, while the buyer pays for the lender's policy. However, this is negotiable.
                    </p>
                </details>

                <details className="group border rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-gray-900">
                        <span>Is title insurance mandatory in {name}?</span>
                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700">
                        Owner's title insurance is optional but highly recommended to protect your property rights. However, if you are getting a mortgage, your lender will almost certainly require you to purchase a Lender's Title Insurance Policy to protect their investment.
                    </p>
                </details>
            </div>
        </article>
    );
};
