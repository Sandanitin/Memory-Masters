import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: 'Information We Collect',
            content: 'We collect information that you provide directly to us, including name, email address, phone number, and payment information when you register for our programs. We also collect information about your usage of our services to improve your experience.'
        },
        {
            title: 'How We Use Your Information',
            content: 'We use the information we collect to provide, maintain, and improve our services, process your registrations and payments, send you technical notices and support messages, and communicate with you about products, services, and events.'
        },
        {
            title: 'Information Sharing',
            content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.'
        },
        {
            title: 'Data Security',
            content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.'
        },
        {
            title: 'Your Rights',
            content: 'You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving promotional communications from us by following the unsubscribe instructions in those communications.'
        },
        {
            title: 'Cookies',
            content: 'We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
        },
        {
            title: 'Children\'s Privacy',
            content: 'Our services are intended for use by students of all ages under parental guidance. We do not knowingly collect personal information from children under 13 without parental consent.'
        },
        {
            title: 'Changes to This Policy',
            content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'
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
                                    At Memory Masters, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                                </p>

                                <div className="space-y-8">
                                    {sections.map((section, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
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
                                        Contact Us
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
