import React from 'react';
import { motion } from 'framer-motion';

const Instructor = () => {
    const credentials = [
        { icon: '🎓', value: '1,00,000+', label: 'Students Helped' },
        { icon: '⏱️', value: '4,500+', label: 'Hours Training' },
        { icon: '🏆', value: 'MU Rank', label: 'Holder' },
        { icon: '📚', value: '20 Books', label: 'in 45 Days' }
    ];

    const trainingPoints = [
        {
            icon: '🧠',
            title: 'Two Foundations of Super Memory',
            description: 'that you can Adapt to your Studies instantly'
        },
        {
            icon: '💡',
            title: 'Memorize Difficult Concepts',
            description: 'Understand & Memorize in the Easiest way possible'
        },
        {
            icon: '🎯',
            title: 'Instant Concentration Booster',
            description: 'Techniques to study with undivided Attention'
        }
    ];

    return (
        <section id="workshop" className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/50 to-blue-50/50" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                        🌟 MEET YOUR MENTOR
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        To be the Best, you have to{' '}
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            LEARN from the BEST!
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Instructor Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative group">
                            {/* Glowing Border */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-3xl opacity-50 blur-lg group-hover:opacity-70 transition-opacity" />

                            {/* Image Container */}
                            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/instructor-kishore-kaki.png"
                                    alt="Kishore Kaki - Founder & Lead Trainer"
                                    className="w-full h-[500px] object-cover object-top"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent" />

                                {/* Name Badge */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-heading font-bold text-white mb-2">
                                            KISHORE KAKI
                                        </h3>
                                        <p className="text-white/90 font-medium">
                                            Founder & Lead Trainer
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Credential Badges */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-xl shadow-lg"
                            >
                                <span className="font-bold">3.5+ Years</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, type: "spring" }}
                                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl shadow-lg"
                            >
                                <span className="font-bold">3rd Std to PG</span>
                            </motion.div>
                        </div>

                        {/* Credentials Grid */}
                        <div className="grid grid-cols-4 gap-3 mt-8">
                            {credentials.map((cred, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white rounded-xl p-3 shadow-lg text-center hover:shadow-xl transition-shadow"
                                >
                                    <span className="text-2xl block mb-1">{cred.icon}</span>
                                    <p className="font-bold text-gray-900 text-sm">{cred.value}</p>
                                    <p className="text-xs text-gray-500">{cred.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Training Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Training Card */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 rounded-3xl blur opacity-20" />
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🎬</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        LIVE TRAINING ENTAILS
                                    </h3>
                                </div>

                                <div className="space-y-6 mb-8">
                                    {trainingPoints.map((point, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + index * 0.15 }}
                                            className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-purple-200 transition-colors group"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">
                                                {point.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg mb-1">{point.title}</h4>
                                                <p className="text-gray-600">{point.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>



                                {/* CTA */}
                                <motion.button
                                    className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg shadow-purple-500/30"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        ✨ Learn from Kishore Kaki
                                    </span>
                                </motion.button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Founder & Lead Trainer • Memory Transformation Expert
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;
