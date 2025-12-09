import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsConditions = () => {
    const sections = [
        {
            title: 'Workshop Details',
            content: 'The Workshop is conducted online via the platform indicated at registration. Sessions are typically held daily for five consecutive days, with specific timings communicated post‑registration. Recordings of live sessions may be provided for personal use only and must not be redistributed.'
        },
        {
            title: 'Eligibility',
            content: 'Participants must be at least 13 years old. If you are a minor, a parent/guardian must accept these Terms on your behalf.'
        },
        {
            title: 'Payment & Refunds',
            content: 'Full payment is required at registration. We accept credit/debit cards, UPI, and PayPal. All amounts are inclusive of applicable taxes (GST), which are non‑refundable. Refunds, if applicable, follow our Cancellation & Refund Policy: Cancel ≥ 48 hours before start → full refund (minus taxes). Miss > 1 day without notice → no refund. Unsatisfied after the Workshop → one free follow‑up session; if still unsatisfied, refund of the workshop fee minus taxes.'
        },
        {
            title: 'Intellectual Property',
            content: 'All Workshop materials are the exclusive property of Memory MASTERS. You may not copy, share, or sell any content without prior written consent.'
        },
        {
            title: 'Liability & Disclaimer',
            content: 'Memory MASTERS is not liable for any indirect damages arising from participation. Results may vary; we cannot guarantee specific outcomes such as exam scores or memory improvements.'
        },
        {
            title: 'Governing Law',
            content: 'These Terms are governed by the laws of India.'
        },
        {
            title: 'Changes to Terms',
            content: 'We reserve the right to modify these Terms. Updated terms will be posted on our website; continued participation constitutes acceptance.'
        }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-20 bg-gray-50">
                {/* Header */}
                <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 py-16">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                                Terms & Conditions
                            </h1>
                            <p className="text-white/80 text-lg">
                                Last Updated: December 8, 2025
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <p className="text-gray-700 mb-8 text-lg">
                                    These Terms & Conditions ("Terms") govern your participation in the Memory MASTERS workshop ("Workshop"), a 5‑day program designed to boost memory, focus, and learning skills. By registering, you agree to these Terms, our Privacy Policy, and the Cancellation & Refund Policy.
                                </p>

                                <div className="space-y-8">
                                    {sections.map((section, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                                    {index + 1}
                                                </span>
                                                {section.title}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed pl-10">
                                                {section.content}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Acceptance Statement */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-purple-600"
                                >
                                    <p className="text-gray-700 font-medium">
                                        By registering, you confirm that you have read, understood, and agree to these Terms & Conditions.
                                    </p>
                                </motion.div>

                                {/* Contact */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        Questions or Concerns?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        For questions, email <a href="mailto:support@memoryMASTERS.in" className="text-purple-600 hover:text-purple-700 font-semibold">support@memoryMASTERS.in</a>
                                    </p>
                                    <div className="space-y-2 text-gray-700">
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">Phone:</span>
                                            <a href="tel:+918019623477" className="text-purple-600 hover:text-purple-700">
                                                +91 80196 23477
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default TermsConditions;
