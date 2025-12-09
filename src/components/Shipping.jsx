import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Shipping = () => {
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
                                Instant Digital Delivery
                            </h1>
                            <p className="text-white/80 text-lg">
                                No Shipping Required – Start Learning Immediately!
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
                                    When you sign up for the Memory MASTERS workshop, there's no waiting for a box to arrive—everything is digital, so you can start learning the moment you click "Register." Here's how it works:
                                </p>

                                {/* Instant Access */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            ⚡
                                        </span>
                                        Instant Access After Payment
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed pl-10">
                                        After you complete the payment, you'll receive a confirmation email within a few minutes. That email contains a secure login link to our member portal, where all the workshop materials live.
                                    </p>
                                </motion.div>

                                {/* What You Get */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            📦
                                        </span>
                                        What's Inside Your Member Portal
                                    </h2>
                                    <div className="pl-10 space-y-4">
                                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <h3 className="font-semibold text-gray-900 mb-2">🎥 Live Session Links</h3>
                                            <p className="text-gray-700">
                                                Click to join the daily video calls right from your browser.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <h3 className="font-semibold text-gray-900 mb-2">🎬 Recorded Sessions</h3>
                                            <p className="text-gray-700">
                                                Each day's class is recorded and uploaded within 24 hours, so you can watch at your own pace if you miss a live slot.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <h3 className="font-semibold text-gray-900 mb-2">📄 Downloadable Resources</h3>
                                            <p className="text-gray-700">
                                                PDFs, cheat‑sheets, and practice worksheets are available for instant download and can be saved to your device or printed out.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <h3 className="font-semibold text-gray-900 mb-2">🎁 Bonus Content</h3>
                                            <p className="text-gray-700">
                                                Extra mnemonics, audio drills, and revision playlists are added to the portal as the workshop progresses.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Access Anywhere */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                            🌍
                                        </span>
                                        Access From Any Device
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed pl-10 mb-4">
                                        Because everything is hosted in the cloud, you can access the material from any device—laptop, tablet, or smartphone—anywhere you have an internet connection.
                                    </p>
                                    <div className="pl-10 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                                        <p className="text-gray-700">
                                            <span className="font-semibold text-gray-900">🔒 Security:</span> We use SSL‑encrypted servers and two‑factor authentication to keep your account safe, and we never share your personal data with third parties.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Benefits */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-purple-600"
                                >
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        ✨ The Beauty of Digital Delivery
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 font-bold">✓</span>
                                            <span><strong>Instant delivery</strong> – start immediately after payment</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 font-bold">✓</span>
                                            <span><strong>Zero shipping fees</strong> – save money on delivery costs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 font-bold">✓</span>
                                            <span><strong>Unlimited access</strong> – review content as long as you need</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 font-bold">✓</span>
                                            <span><strong>Eco-friendly</strong> – no physical materials, no waste</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                {/* Support */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                        Need Technical Help?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        If you run into any technical hiccups, just shoot us an email and we'll get you back on track within a few hours.
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
                                    </div>
                                    <p className="text-gray-600 mt-4 italic">
                                        Happy learning! 🎓
                                    </p>
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

export default Shipping;
