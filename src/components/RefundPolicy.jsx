import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const RefundPolicy = () => {
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
                                Cancellation & Refunds
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
                                    We're committed to making our workshop worthwhile for every participant. If you're not satisfied, here's how we handle cancellations and refunds:
                                </p>

                                {/* Refund Policy Points */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-8"
                                >
                                    <div className="space-y-4">
                                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                            <p className="font-semibold text-green-800 mb-2">✓ Full Refund - Cancel Early</p>
                                            <p className="text-gray-700">
                                                Cancel up to <strong>48 hours before the start date</strong> – you'll receive a full refund (taxes and GST are non‑recoverable).
                                            </p>
                                        </div>

                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                            <p className="font-semibold text-red-800 mb-2">✗ No Refund - Excessive Absences</p>
                                            <p className="text-gray-700">
                                                Miss more than one day without notice – no refund will be issued.
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                            <p className="font-semibold text-blue-800 mb-2">🎓 Free Follow-Up Session</p>
                                            <p className="text-gray-700">
                                                Didn't pick up the skills? Contact us within <strong>3 days of the final session</strong> for a free one‑on‑one follow‑up.
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                            <p className="font-semibold text-yellow-800 mb-2">⚠ Refund After Follow-Up</p>
                                            <p className="text-gray-700">
                                                Still not satisfied after the extra session – you may request a refund of the workshop fee minus taxes and GST, processed within <strong>5‑7 business days</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* How to Request */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            📧
                                        </span>
                                        How to Request a Refund
                                    </h2>
                                    <div className="pl-10 text-gray-700 space-y-3">
                                        <p>
                                            To request a refund or support, email <a href="mailto:support@memoryMASTERS.in" className="text-purple-600 hover:text-purple-700 font-semibold">support@memoryMASTERS.in</a> with "<strong>Refund Request – Workshop</strong>" and your order number.
                                        </p>
                                        <p>
                                            We'll get back to you within <strong>24 hours</strong>.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Contact */}
                                <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        Need Help?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about our Refund Policy, please contact us:
                                    </p>
                                    <div className="space-y-2 text-gray-700">
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">Email:</span>
                                            <a href="mailto:support@memoryMASTERS.in" className="text-purple-600 hover:text-purple-700">
                                                support@memoryMASTERS.in
                                            </a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">Phone:</span>
                                            <a href="tel:+918019623477" className="text-purple-600 hover:text-purple-700">
                                                +91 80196 23477
                                            </a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">WhatsApp:</span>
                                            <a href="https://wa.me/918019623477" className="text-purple-600 hover:text-purple-700">
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

export default RefundPolicy;
