import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsConditions = () => {
    const sections = [
        {
            title: 'Acceptance of Terms',
            content: 'By accessing and using Memory Masters services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
            title: 'Service Description',
            content: 'Memory Masters provides online and offline memory training programs, workshops, and educational content. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.'
        },
        {
            title: 'Registration and Account',
            content: 'To access certain features, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.'
        },
        {
            title: 'Payment Terms',
            content: 'Payment for our services must be made in full at the time of registration unless otherwise specified. All fees are non-refundable except as provided in our Refund Policy. Prices are subject to change without notice.'
        },
        {
            title: 'User Responsibilities',
            content: 'You are responsible for maintaining the confidentiality of your account credentials, for all activities under your account, and for attending scheduled sessions. You agree to use our services only for lawful purposes and in accordance with these Terms.'
        },
        {
            title: 'Intellectual Property',
            content: 'All content, materials, and techniques provided through Memory Masters services are protected by intellectual property rights. You may not reproduce, distribute, or create derivative works without our express written permission.'
        },
        {
            title: 'Limitation of Liability',
            content: 'Memory Masters shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability shall not exceed the amount paid by you for the services.'
        },
        {
            title: 'Privacy',
            content: 'Your use of Memory Masters services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.'
        },
        {
            title: 'Termination',
            content: 'We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.'
        },
        {
            title: 'Changes to Terms',
            content: 'We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of the service after such modifications constitutes your acceptance of the updated Terms.'
        },
        {
            title: 'Governing Law',
            content: 'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.'
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
                                    Welcome to Memory Masters. These Terms and Conditions outline the rules and regulations for the use of Memory Masters' services.
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

                                <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        Questions or Concerns?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about these Terms and Conditions, please contact us:
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
