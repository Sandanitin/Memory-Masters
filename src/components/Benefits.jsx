import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const problems = [
        { text: 'Works Really Hard to Stay Ahead in Academics', icon: '😰' },
        { text: 'Stressed of Vast Curriculums to cover', icon: '📚' },
        { text: 'Struggling with Low Motivation', icon: '😔' },
        { text: 'Easily Distracted while Studying', icon: '🎮' },
        { text: 'Not able to Concentrate for Long Hours', icon: '😵' },
        { text: 'Unhappy with their Memory Retention Power', icon: '🧠' }
    ];

    const solutions = [
        { text: 'Unlock your Full Memory Potential', icon: '🧠', gradient: 'from-purple-500 to-indigo-500' },
        { text: 'Improve your Reading Speed', icon: '📖', gradient: 'from-blue-500 to-cyan-500' },
        { text: 'Increase Understanding & Grasping', icon: '💡', gradient: 'from-yellow-500 to-orange-500' },
        { text: 'Manage your Time like a Pro', icon: '⏰', gradient: 'from-green-500 to-emerald-500' },
        { text: 'Make Studies Interesting', icon: '🎯', gradient: 'from-rose-500 to-pink-500' }
    ];

    const features = [
        { icon: '💡', title: 'Memory, Study Skills', subtitle: '& Concentration', gradient: 'from-purple-500 to-indigo-500' },
        { icon: '👥', title: '1000+ Students', subtitle: 'Benefitted', gradient: 'from-blue-500 to-cyan-500' },
        { icon: '⏱️', title: '10 HOURS', subtitle: 'Online Training', gradient: 'from-orange-500 to-yellow-500' },
        { icon: '🛠️', title: 'PRACTICAL', subtitle: 'Tools & Techniques', gradient: 'from-green-500 to-emerald-500' }
    ];

    return (
        <section id="benefits" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />

            <div className="container relative z-10">
                {/* Problem Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                            🤔 SOUND FAMILIAR?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold">
                            ARE YOU A <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">PARENT</span> whose CHILD...
                            <br />
                            OR A <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">STUDENT</span> WHO…
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-500/0 rounded-xl" />
                                <div className="relative flex items-center gap-4 p-4 bg-white border-l-4 border-red-400 rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <span className="text-3xl">{problem.icon}</span>
                                    <p className="text-gray-700 font-medium">{problem.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mt-10"
                    >
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg shadow-purple-500/30">
                            <span className="text-2xl">✅</span>
                            If YES, we can help you put an END to these!
                        </div>
                    </motion.div>
                </motion.div>

                {/* Solution Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Glowing Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 rounded-[2.5rem] blur opacity-20" />

                    <div className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-[2rem] p-8 md:p-12 shadow-xl border border-purple-100">
                        <div className="text-center mb-10">
                            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                                🚀 YOUR TRANSFORMATION STARTS HERE
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold">
                                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    MEMORY MASTERS
                                </span>
                                <br />
                                <span className="text-gray-800">IS YOUR TRANSFORMATIVE SOLUTION TO…</span>
                            </h2>
                        </div>

                        {/* Solutions Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                                    <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                        <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                                            {solution.icon}
                                        </div>
                                        <p className="text-gray-800 font-bold text-lg">{solution.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features Strip */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all text-center">
                                        <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform`}>
                                            {feature.icon}
                                        </div>
                                        <p className="font-bold text-gray-900 text-sm">{feature.title}</p>
                                        <p className="text-gray-500 text-xs">{feature.subtitle}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <motion.button
                                className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-lg shadow-orange-500/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <span className="text-2xl">🎟️</span>
                                    Buy Now @ ₹1/-
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ opacity: 0.3 }}
                                />
                            </motion.button>
                            <p className="text-gray-500 text-sm mt-4">
                                🔥 Limited Time Offer • 90% OFF
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;
