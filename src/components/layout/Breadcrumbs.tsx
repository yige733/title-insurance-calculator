import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
    items: {
        label: string;
        href: string;
    }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary flex items-center">
                <Home className="h-4 w-4" />
            </Link>

            {items.map((item, index) => (
                <div key={item.href} className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4" />
                    <Link
                        href={item.href}
                        className={`hover:text-primary ${index === items.length - 1 ? 'font-medium text-foreground pointer-events-none' : ''}`}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </nav>
    );
};
