import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Title Insurance Calculator',
    description: 'Learn about our mission to provide accurate, transparent title insurance rate calculations for real estate professionals and homebuyers.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
                <p>
                    Welcome to <strong>Title Insurance Calculator</strong>, your trusted resource for accurate and transparent title insurance premium estimates across the United States.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
                <p>
                    The real estate closing process is often opaque and confusing, especially when it comes to closing costs. Our mission is to demystify title insurance rates by providing a free, easy-to-use tool that delivers precise calculations based on official state regulations and major underwriter schedules.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900">Why Trust Us?</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Official Data Sources:</strong> For states with promulgated rates (like Texas, Florida, and New York), our algorithms are directly derived from the official Department of Insurance manuals.</li>
                    <li><strong>Transparent Citations:</strong> We don't just give you a number; we tell you where it comes from. Every calculation includes a citation to the specific rate manual or underwriter schedule used.</li>
                    <li><strong>Unbiased Information:</strong> We are an independent tool and are not affiliated with any specific title insurance agency. Our goal is to empower you with information.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900">Who We Serve</h2>
                <p>
                    Whether you are a first-time homebuyer trying to budget for closing costs, a real estate agent preparing a net sheet for a client, or a loan officer estimating cash-to-close, our calculator is designed to meet your needs with speed and accuracy.
                </p>
            </div>
        </div>
    );
}
