import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
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
                                Privacy Policy
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
                                    At Memory Masters, we take the privacy of our participants seriously. This Privacy Policy explains how we collect, use, and protect the personal information you provide when you register for our workshop.
                                </p>

                                {/* What We Collect */}
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
                                        Information We Collect
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed pl-10">
                                        We collect only the data needed to run the workshop: name, email address, phone number, and payment details.
                                    </p>
                                </motion.div>

                                {/* How We Use It */}
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
                                        How We Use Your Information
                                    </h2>
                                    <div className="pl-10 space-y-3 text-gray-700">
                                        <p>This information is used solely for the following purposes:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>To confirm your registration and send you workshop materials</li>
                                            <li>To communicate schedule changes, reminders, and post‑workshop follow‑up sessions</li>
                                            <li>To process payments and issue refunds according to our Cancellation & Refund Policy</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Data Sharing */}
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
                                        We Never Share Your Data
                                    </h2>
                                    <div className="pl-10 text-gray-700 space-y-3">
                                        <p className="font-semibold text-gray-900">
                                            We never sell, rent, or otherwise share your personal data with third parties.
                                        </p>
                                        <p>
                                            The only exceptions are when required by law or when we engage trusted service providers (e.g., payment processors) who handle data under strict confidentiality agreements and only for the purpose of completing the transaction.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Data Security */}
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
                                        Data Security
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed pl-10">
                                        Your data is stored securely on encrypted servers. You may request to view, update, or delete your information at any time by contacting <a href="mailto:support@memorymasters.in" className="text-purple-600 hover:text-purple-700 font-semibold">support@memorymasters.in</a>.
                                    </p>
                                </motion.div>

                                {/* Consent */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-purple-600"
                                >
                                    <p className="text-gray-700 font-medium">
                                        By registering for the workshop, you consent to the collection and use of your data as outlined above.
                                    </p>
                                </motion.div>

                                {/* Contact */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        Questions About Privacy?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about our privacy practices, please reach out to us—we're happy to help.
                                    </p>
                                    <div className="space-y-2 text-gray-700">
                                        <p className="flex items-center gap-2">
                                            <span className="font-semibold">Email:</span>
                                            <a href="mailto:support@memorymasters.in" className="text-purple-600 hover:text-purple-700">
                                                support@memorymasters.in
                                            </a>
                                        </p>
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

export default PrivacyPolicy;
