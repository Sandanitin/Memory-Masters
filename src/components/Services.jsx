import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: '🧪',
            title: 'Remember Formulae & Chemistry Terms',
            description: 'Master complex formulas and chemistry terminology with proven memory techniques',
            gradient: 'from-purple-500 to-indigo-500',
            color: 'purple'
        },
        {
            icon: '📅',
            title: 'Remember Dates and Numbers',
            description: 'Never forget important dates, numbers, and historical events again',
            gradient: 'from-blue-500 to-cyan-500',
            color: 'blue'
        },
        {
            icon: '⚡',
            title: 'Speed Reading',
            description: 'Dramatically increase your reading speed while maintaining comprehension',
            gradient: 'from-orange-500 to-yellow-500',
            color: 'orange'
        },
        {
            icon: '🔄',
            title: 'How to Revise',
            description: 'Learn effective revision strategies that make information stick',
            gradient: 'from-green-500 to-emerald-500',
            color: 'green'
        },
        {
            icon: '📖',
            title: 'Remember Definitions',
            description: 'Memorize definitions effortlessly with our unique techniques',
            gradient: 'from-pink-500 to-rose-500',
            color: 'pink'
        },
        {
            icon: '❓',
            title: 'Remember Questions & Answers',
            description: 'Ace your exams by mastering Q&A retention techniques',
            gradient: 'from-violet-500 to-purple-500',
            color: 'violet'
        }
    ];

    return (
        <section id="services" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

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
                        🎯 OUR SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Master Every Aspect of{' '}
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Learning
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Comprehensive memory training programs designed to boost your academic performance
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />

                            {/* Card Content */}
                            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                {/* Icon */}
                                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Learn More Arrow */}
                                <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                        Learn More
                                    </span>
                                    <motion.span
                                        className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl shadow-orange-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <span className="text-2xl">🚀</span>
                            Start Your Memory Transformation
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{ opacity: 0.3 }}
                        />
                    </motion.button>
                    <p className="text-gray-500 text-sm mt-4">
                        ✓ All services included in the program
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
