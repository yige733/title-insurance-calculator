import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Title Insurance Calculator',
    description: 'Privacy Policy for Title Insurance Calculator.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-600">
                <p>Last updated: December 16, 2024</p>

                <p>
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Interpretation and Definitions</h2>
                <p>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Collecting and Using Your Personal Data</h2>
                <h3 className="text-lg font-medium text-gray-900">Types of Data Collected</h3>
                <p>
                    <strong>Personal Data:</strong> While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, Usage Data.
                </p>
                <p>
                    <strong>Usage Data:</strong> Usage Data is collected automatically when using the Service. It may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Cookies and Tracking Technologies</h2>
                <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul className="list-disc pl-6">
                    <li>By email: support@titlecalc.com</li>
                    <li>By visiting this page on our website: /contact</li>
                </ul>
            </div>
        </div>
    );
}
