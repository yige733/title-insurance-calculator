'use client';

import React, { useState, useEffect } from 'react';
import { CalculatorInput, CalculatorResult } from '@/lib/calculator/types';
import { calculateTitleInsurance } from '@/lib/calculator/engine';
import { states } from '@/data/states';
import { SourceCitation } from './SourceCitation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DollarSign, Building2, ShieldCheck, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TitleCalculatorProps {
    initialState?: string;
}

export const TitleCalculator: React.FC<TitleCalculatorProps> = ({ initialState }) => {
    const [input, setInput] = useState<CalculatorInput>({
        state: initialState || 'texas',
        purchasePrice: 300000,
        policyType: 'owner',
        loanAmount: 240000,
    });

    const [result, setResult] = useState<CalculatorResult | null>(null);
    const [loading, setLoading] = useState(false);

    const currentState = states.find(s => s.slug === input.state);

    const handleCalculate = () => {
        setLoading(true);
        // Simulate a tiny delay for "premium" feel
        setTimeout(() => {
            const res = calculateTitleInsurance(input);
            setResult(res);
            setLoading(false);
        }, 400);
    };

    useEffect(() => {
        handleCalculate();
    }, [input.state]); // Auto-recalculate on state change

    return (
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <Card className="lg:col-span-2 border-none shadow-xl bg-white/50 backdrop-blur-sm ring-1 ring-gray-900/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                        <Calculator className="w-6 h-6 text-primary" />
                        Title Insurance Calculator
                    </CardTitle>
                    <CardDescription>
                        Calculate accurate title insurance premiums for your property.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Select
                                value={input.state}
                                onValueChange={(val) => setInput({ ...input, state: val })}
                            >
                                <SelectTrigger id="state" className="h-12 text-lg">
                                    <SelectValue placeholder="Select State" />
                                </SelectTrigger>
                                <SelectContent>
                                    {states.map((state) => (
                                        <SelectItem key={state.slug} value={state.slug}>
                                            {state.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="price">Purchase Price</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="price"
                                    type="number"
                                    className="pl-10 h-12 text-lg font-medium"
                                    value={input.purchasePrice}
                                    onChange={(e) => setInput({ ...input, purchasePrice: Number(e.target.value) })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="loan">Loan Amount (Optional)</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="loan"
                                    type="number"
                                    className="pl-10 h-12 text-lg"
                                    value={input.loanAmount || ''}
                                    onChange={(e) => setInput({ ...input, loanAmount: Number(e.target.value) })}
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        onClick={handleCalculate}
                        disabled={loading}
                    >
                        {loading ? 'Calculating...' : 'Calculate Premium'}
                    </Button>
                </CardContent>
            </Card>

            {/* Result Section */}
            <div className="lg:col-span-1">
                <Card className={cn(
                    "h-full border-none shadow-2xl transition-all duration-500",
                    "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
                )}>
                    <CardHeader>
                        <CardTitle className="text-xl font-medium text-gray-200">Estimated Premium</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {result ? (
                            <>
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-400">Total Premium</p>
                                    <div className="text-5xl font-bold tracking-tight text-white">
                                        ${result.total.toLocaleString()}
                                    </div>
                                </div>

                                <Separator className="bg-gray-700" />

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <ShieldCheck className="w-4 h-4" />
                                            <span>Owner's Policy</span>
                                        </div>
                                        <span className="font-semibold">${result.ownerPolicy.toLocaleString()}</span>
                                    </div>

                                    {result.lenderPolicy > 0 && (
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 text-gray-300">
                                                <Building2 className="w-4 h-4" />
                                                <span>Lender's Policy</span>
                                            </div>
                                            <span className="font-semibold">${result.lenderPolicy.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4">
                                    <SourceCitation
                                        citation={result.citation}
                                        disclaimer={result.disclaimer}
                                        tier={currentState?.tier || 'tier2'}
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="h-40 flex items-center justify-center text-gray-500">
                                Enter details to calculate
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
