import { states } from '@/data/states';
import { TitleCalculator } from '@/components/calculator/TitleCalculator';
import { StateContent } from '@/components/content/StateContent';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate static params for all 50 states at build time
export async function generateStaticParams() {
    return states.map((state) => ({
        state: state.slug,
    }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
    const stateConfig = states.find((s) => s.slug === params.state);

    if (!stateConfig) {
        return {
            title: 'State Not Found',
        };
    }

    const year = new Date().getFullYear();
    const title = `${stateConfig.name} Title Insurance Calculator ${year} | Accurate Rates`;
    const description = `Calculate ${stateConfig.name} title insurance premiums instantly. Updated for ${year}. ${stateConfig.tier === 'tier1' ? 'Official promulgated rates.' : 'Based on major underwriter schedules.'}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
        },
    };
}

export default function StatePage({ params }: { params: { state: string } }) {
    const stateConfig = states.find((s) => s.slug === params.state);

    if (!stateConfig) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                        {stateConfig.name} Title Insurance Calculator
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {stateConfig.tier === 'tier1'
                            ? `Official ${stateConfig.name} Promulgated Rates`
                            : `Estimated Title Premiums for ${stateConfig.name}`
                        }
                    </p>
                </div>

                {/* Calculator */}
                <TitleCalculator initialState={stateConfig.slug} />

                {/* SEO Content */}
                <StateContent stateConfig={stateConfig} />
            </div>
        </div>
    );
}
