import { TitleCalculator } from '@/components/calculator/TitleCalculator';
import { states } from '@/data/states';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Home() {
  const popularStates = states.filter(s => s.tier === 'tier1');

  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Title Insurance Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate accurate title insurance rates instantly.
            Featuring official promulgated rates for major states.
          </p>
        </div>

        {/* Quick State Selector - Removed in favor of Calculator Navigation */}
      </section>

      {/* Calculator Section */}
      <section>
        <TitleCalculator navigateOnSelect={true} />
      </section>

      {/* Popular States Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Popular Locations</h2>
          <p className="text-muted-foreground">Direct access to our most frequently used calculators.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {popularStates.map((state) => (
            <Link
              key={state.slug}
              href={`/${state.slug}/`}
              className="group relative overflow-hidden p-6 bg-white rounded-xl border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{state.name}</h3>
                  <p className="text-sm text-muted-foreground">Official Rates</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
