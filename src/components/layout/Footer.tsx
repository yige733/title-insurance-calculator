import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="border-t bg-muted/50 mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">TitleCalc</h3>
                        <p className="text-sm text-muted-foreground">
                            Premium title insurance calculator for real estate professionals and homebuyers.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Popular States</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/texas/" className="hover:text-primary">Texas Calculator</Link></li>
                            <li><Link href="/florida/" className="hover:text-primary">Florida Calculator</Link></li>
                            <li><Link href="/california/" className="hover:text-primary">California Calculator</Link></li>
                            <li><Link href="/new-york/" className="hover:text-primary">New York Calculator</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Disclaimer</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            This tool provides estimates only. Title insurance rates are subject to change and may vary by underwriter, location, and policy type.
                            Always consult with a licensed title insurance agent or attorney for an exact quote.
                            We are not a title insurance agency.
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} TitleCalc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
