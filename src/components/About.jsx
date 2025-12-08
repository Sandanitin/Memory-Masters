import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900" />

                    {/* Animated Background Elements */}
                    <motion.div
                        className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                        animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />

                    <div className="container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center text-white"
                        >
                            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">
                                About{' '}
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                    Memory Masters
                                </span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto">
                                Empowering students with scientifically-backed memory strategies
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-white">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
                                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        Our Mission
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                                    Founded by Kishore Kaki, Memory Masters is dedicated to empowering students with scientifically-backed memory strategies. Our mission is to transform the way learners approach textbooks, exams, and lifelong knowledge.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-5xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                                Meet Our{' '}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Founder
                                </span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Founder Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-3xl blur opacity-50" />
                                    <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/assets/instructor-kimi-shah.png"
                                            alt="Kishore Kaki - Founder"
                                            className="w-full h-[400px] object-cover object-top"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-6">
                                            <h3 className="text-2xl font-heading font-bold text-white">
                                                Kishore Kaki
                                            </h3>
                                            <p className="text-white/90">Founder & Lead Trainer</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Founder Quote & Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20" />
                                        <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                                            <div className="text-6xl text-purple-600 mb-4">"</div>
                                            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                                                I've seen first-hand how a few simple techniques can turn a struggling student into a confident learner. At Memory Masters we teach those techniques, so every student can experience that 'aha!' moment.
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                                                <p className="font-bold text-gray-900">Kishore Kaki</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-white">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                What We{' '}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Believe In
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: '🎯',
                                    title: 'Student-Centric',
                                    description: 'Every technique is designed with the student\'s success in mind',
                                    gradient: 'from-purple-500 to-indigo-500'
                                },
                                {
                                    icon: '🔬',
                                    title: 'Science-Backed',
                                    description: 'Our methods are grounded in proven memory science and research',
                                    gradient: 'from-blue-500 to-cyan-500'
                                },
                                {
                                    icon: '💪',
                                    title: 'Practical Results',
                                    description: 'Focus on real-world application and measurable improvements',
                                    gradient: 'from-orange-500 to-yellow-500'
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                        <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
                    <div className="container">
                        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                            {[
                                { value: '100,000+', label: 'Students Trained' },
                                { value: '4,500+', label: 'Training Hours' },
                                { value: '100%', label: 'Dedication' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-5xl font-black mb-2">{stat.value}</div>
                                    <div className="text-white/80 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
