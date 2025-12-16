import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata: Metadata = {
    title: 'Contact Us | Title Insurance Calculator',
    description: 'Get in touch with the Title Insurance Calculator team. We value your feedback and questions.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <p className="text-gray-600 mb-8">
                Have a question about a calculation? Found a bug? Or just want to say hello?
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6 border p-8 rounded-lg bg-white shadow-sm">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="How can we help you?"
                    />
                </div>

                <Button type="submit" className="w-full">Send Message</Button>
            </form>

            <div className="mt-12 text-center text-sm text-muted-foreground">
                <p>You can also reach us directly at: <a href="mailto:support@titlecalc.com" className="text-primary hover:underline">support@titlecalc.com</a></p>
            </div>
        </div>
    );
}
