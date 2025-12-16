import Link from 'next/link';
import { Calculator } from 'lucide-react';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl tracking-tight">TitleCalc</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Home
                    </Link>
                    <Link href="/texas" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Texas
                    </Link>
                    <Link href="/florida" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Florida
                    </Link>
                    <Link href="/new-york" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        New York
                    </Link>
                    <Link href="/pennsylvania" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Pennsylvania
                    </Link>
                </nav>
            </div>
        </header>
    );
};
