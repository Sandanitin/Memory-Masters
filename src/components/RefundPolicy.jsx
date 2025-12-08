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
                                Refund Policy
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
                                    At Memory Masters, we strive to provide high-quality educational services. This Refund Policy outlines the conditions under which refunds may be requested and processed.
                                </p>

                                {/* Refund Eligibility */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            1
                                        </span>
                                        Refund Eligibility
                                    </h2>
                                    <div className="pl-10 space-y-4">
                                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                            <p className="font-semibold text-green-800 mb-2">✓ Full Refund Available</p>
                                            <p className="text-gray-700">
                                                Refund requests made <strong>before the first session</strong> of the workshop or training program will receive a 100% refund, minus any payment processing fees.
                                            </p>
                                        </div>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                            <p className="font-semibold text-yellow-800 mb-2">⚠ Partial Refund</p>
                                            <p className="text-gray-700">
                                                Refund requests made <strong>within 24 hours of the first session</strong> may be eligible for a 50% refund at our discretion, considering the circumstances.
                                            </p>
                                        </div>
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                            <p className="font-semibold text-red-800 mb-2">✗ No Refund</p>
                                            <p className="text-gray-700">
                                                No refunds will be provided after <strong>24 hours of the first session</strong> or after completion of the program.
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
                                            2
                                        </span>
                                        How to Request a Refund
                                    </h2>
                                    <div className="pl-10 space-y-3 text-gray-700">
                                        <p>To request a refund, please follow these steps:</p>
                                        <ol className="list-decimal list-inside space-y-2 ml-4">
                                            <li>Contact us via email at <a href="mailto:contact@memorymasters.com" className="text-purple-600 hover:text-purple-700 font-semibold">contact@memorymasters.com</a></li>
                                            <li>Include your full name, registration details, and reason for refund request</li>
                                            <li>Provide proof of payment (transaction ID or receipt)</li>
                                            <li>Submit your request within the eligible timeframe</li>
                                        </ol>
                                    </div>
                                </motion.div>

                                {/* Processing Time */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            3
                                        </span>
                                        Processing Time
                                    </h2>
                                    <p className="pl-10 text-gray-700">
                                        Approved refunds will be processed within <strong>7-10 business days</strong>. The refund will be credited to the original payment method used during registration. Please note that it may take additional time for the refund to appear in your account, depending on your bank or payment provider.
                                    </p>
                                </motion.div>

                                {/* Special Circumstances */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            4
                                        </span>
                                        Special Circumstances
                                    </h2>
                                    <div className="pl-10 space-y-3 text-gray-700">
                                        <p>We understand that exceptional circumstances may arise. In cases of:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Medical emergencies (requires documentation)</li>
                                            <li>Technical issues on our end preventing service delivery</li>
                                            <li>Cancellation of workshop by Memory Masters</li>
                                        </ul>
                                        <p className="mt-3">
                                            We will review refund requests on a case-by-case basis and may offer alternative solutions such as rescheduling or account credits.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Non-Refundable */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            5
                                        </span>
                                        Non-Refundable Items
                                    </h2>
                                    <div className="pl-10 text-gray-700">
                                        <p className="mb-3">The following are not eligible for refunds:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Downloadable materials or resources already accessed</li>
                                            <li>Completed programs or workshops</li>
                                            <li>Payment processing fees</li>
                                            <li>Special promotional offers or discounted programs (unless specified otherwise)</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Contact */}
                                <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        Questions About Refunds?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about our Refund Policy or need assistance with a refund request, please contact us:
                                    </p>
                                    <div className="space-y-2 text-gray-700">
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">Email:</span>
                                            <a href="mailto:contact@memorymasters.com" className="text-purple-600 hover:text-purple-700">
                                                contact@memorymasters.com
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
