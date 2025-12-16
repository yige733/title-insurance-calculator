import { TitleCalculator } from '@/components/calculator/TitleCalculator';
import { states } from '@/data/states';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Title Insurance Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Calculate accurate title insurance rates for any state.
          Updated for 2024 with official promulgated rates for TX, FL, NY, PA, and NM.
        </p>
      </section>

      {/* Calculator Section */}
      <section>
        <TitleCalculator />
      </section>

      {/* States Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Select Your State</h2>
          <p className="text-muted-foreground mt-2">Find specific rates and regulations for your location.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {states.map((state) => (
            <Link
              key={state.slug}
              href={`/${state.slug}`}
              className="group p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all flex items-center justify-between"
            >
              <span className="font-medium text-gray-700 group-hover:text-primary">{state.name}</span>
              <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-1 rounded group-hover:bg-primary/10 group-hover:text-primary">
                {state.abbr}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
