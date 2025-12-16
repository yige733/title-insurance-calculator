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
    const [isCalculating, setIsCalculating] = useState(false);

    const currentState = states.find(s => s.slug === input.state);

    // Real-time calculation with debounce
    useEffect(() => {
        setIsCalculating(true);
        const timer = setTimeout(() => {
            const res = calculateTitleInsurance(input);
            setResult(res);
            setIsCalculating(false);
        }, 500); // 500ms debounce

        return () => clearTimeout(timer);
    }, [input]);

    return (
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Section */}
            <Card className="lg:col-span-7 border shadow-sm bg-white">
                <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">
                        Property Details
                    </CardTitle>
                    <CardDescription>
                        Enter the purchase price and loan details to get an instant quote.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="state" className="text-sm font-medium text-gray-700">State</Label>
                            <Select
                                value={input.state}
                                onValueChange={(val) => setInput({ ...input, state: val })}
                            >
                                <SelectTrigger id="state" className="h-11 bg-gray-50/50 border-gray-200 focus:ring-2 focus:ring-primary/20 transition-all">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price" className="text-sm font-medium text-gray-700">Purchase Price</Label>
                                <div className="relative group">
                                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <Input
                                        id="price"
                                        type="number"
                                        className="pl-10 h-11 bg-gray-50/50 border-gray-200 focus:ring-2 focus:ring-primary/20 transition-all font-medium text-lg"
                                        value={input.purchasePrice || ''}
                                        onChange={(e) => setInput({ ...input, purchasePrice: Number(e.target.value) })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="loan" className="text-sm font-medium text-gray-700">Loan Amount</Label>
                                <div className="relative group">
                                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <Input
                                        id="loan"
                                        type="number"
                                        className="pl-10 h-11 bg-gray-50/50 border-gray-200 focus:ring-2 focus:ring-primary/20 transition-all font-medium text-lg"
                                        value={input.loanAmount || ''}
                                        onChange={(e) => setInput({ ...input, loanAmount: Number(e.target.value) })}
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Result Section - Sticky on Desktop */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
                <Card className={cn(
                    "border-none shadow-xl overflow-hidden transition-all duration-300",
                    "bg-slate-900 text-white ring-1 ring-white/10"
                )}>
                    <CardHeader className="bg-white/5 pb-6 border-b border-white/10">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-lg font-medium text-gray-100">Estimated Quote</CardTitle>
                            {isCalculating && (
                                <span className="text-xs text-primary-foreground/70 animate-pulse flex items-center gap-1">
                                    <Calculator className="w-3 h-3" /> Updating...
                                </span>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-8">
                        {result ? (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-2 text-center">
                                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Total Premium</p>
                                    <div className="text-5xl font-bold tracking-tight text-white tabular-nums">
                                        ${result.total.toLocaleString()}
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4 bg-white/5 rounded-lg p-4 border border-white/5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                            <span className="text-sm">Owner's Policy</span>
                                        </div>
                                        <span className="font-semibold tabular-nums">${result.ownerPolicy.toLocaleString()}</span>
                                    </div>

                                    {result.lenderPolicy > 0 && (
                                        <>
                                            <Separator className="bg-white/10" />
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2 text-gray-300">
                                                    <Building2 className="w-4 h-4 text-blue-400" />
                                                    <span className="text-sm">Lender's Policy</span>
                                                </div>
                                                <span className="font-semibold tabular-nums">${result.lenderPolicy.toLocaleString()}</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="pt-6">
                                    <SourceCitation
                                        citation={result.citation}
                                        disclaimer={result.disclaimer}
                                        tier={currentState?.tier || 'tier2'}
                                    />
                                </div>
                            </div>
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
