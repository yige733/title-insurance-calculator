import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Title Insurance Calculator',
    description: 'Terms of Service for Title Insurance Calculator.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-600">
                <p>Last updated: December 16, 2024</p>

                <p>
                    Please read these terms and conditions carefully before using Our Service.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Acknowledgment</h2>
                <p>
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Disclaimer</h2>
                <p>
                    The information provided by Title Insurance Calculator is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
                </p>
                <p>
                    <strong>Professional Disclaimer:</strong> The Site cannot and does not contain legal or financial advice. The legal and financial information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Limitation of Liability</h2>
                <p>
                    In no event shall the Company be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                <ul className="list-disc pl-6">
                    <li>By email: support@titlecalc.com</li>
                    <li>By visiting this page on our website: /contact</li>
                </ul>
            </div>
        </div>
    );
}
