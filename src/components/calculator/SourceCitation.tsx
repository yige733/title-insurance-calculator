import React from 'react';
import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SourceCitationProps {
    citation?: string;
    disclaimer?: string;
    tier: 'tier1' | 'tier2';
}

export const SourceCitation: React.FC<SourceCitationProps> = ({ citation, disclaimer, tier }) => {
    if (!citation && !disclaimer) return null;

    return (
        <div className="mt-6 space-y-2">
            {citation && (
                <div className="flex items-center text-sm text-muted-foreground">
                    <Info className="w-4 h-4 mr-2" />
                    <span className="font-medium">Data Source:</span>
                    <span className="ml-1">{citation}</span>
                </div>
            )}

            {disclaimer && (
                <Alert variant={tier === 'tier1' ? 'default' : 'destructive'} className="bg-muted/50 border-none">
                    <AlertDescription className="text-xs text-muted-foreground">
                        {disclaimer}
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
};
