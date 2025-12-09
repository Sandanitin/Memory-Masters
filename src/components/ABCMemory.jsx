import React from 'react';
import { motion } from 'framer-motion';

const ABCMemory = () => {
    const abcItems = [
        {
            letter: 'A',
            title: 'ADOPT',
            subtitle: 'Proven Strategies',
            description: 'Adopt proven Strategy Applications to your study process that will help you to Retain every Subject with Ease',
            gradient: 'from-purple-600 via-purple-500 to-indigo-600',
            bgPattern: 'bg-purple-500/10',
            icon: '🎯',
            highlights: ['Strategy Applications', 'Easy Retention', 'All Subjects']
        },
        {
            letter: 'B',
            title: 'BOOST',
            subtitle: 'Cognitive Power',
            description: 'Boost your Cognitive Abilities. Remember more in less time without being baffled',
            gradient: 'from-blue-600 via-blue-500 to-cyan-500',
            bgPattern: 'bg-blue-500/10',
            icon: '🚀',
            highlights: ['Cognitive Boost', 'Less Time', 'More Memory']
        },
        {
            letter: 'C',
            title: 'CONCENTRATE',
            subtitle: 'Focused Mind',
            description: 'Give your Concentration an extraordinary push and keep all Distractions away',
            gradient: 'from-orange-500 via-orange-400 to-yellow-500',
            bgPattern: 'bg-orange-500/10',
            icon: '🧘',
            highlights: ['Deep Focus', 'No Distractions', 'Peak Performance']
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Glowing Orbs */}
            <motion.div
                className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
                        📚 THE FOUNDATION
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 text-white">
                        Let&apos;s start with the{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                ABC of Memory!
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* ABC Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {abcItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`} />

                            {/* Card */}
                            <div className={`relative h-full bg-gradient-to-br ${item.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
                                {/* Background Pattern */}
                                <div className="absolute inset-0">
                                    <div className={`absolute top-0 right-0 w-48 h-48 ${item.bgPattern} rounded-full blur-2xl`} />
                                    <div className={`absolute bottom-0 left-0 w-32 h-32 ${item.bgPattern} rounded-full blur-xl`} />
                                </div>

                                {/* Content */}
                                <div className="relative p-8">
                                    {/* Letter Badge */}
                                    <motion.div
                                        className="absolute top-6 right-6 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <span className="text-4xl font-black text-white">{item.letter}</span>
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        className="text-7xl mb-6"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", delay: 0.3 + index * 0.2 }}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-4xl font-heading font-black text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 font-medium mb-4">{item.subtitle}</p>

                                    {/* Description */}
                                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.highlights.map((highlight, hIndex) => (
                                            <span
                                                key={hIndex}
                                                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium border border-white/20"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-[100px]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="max-w-3xl mx-auto mb-8">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                            Elevate your Studying process and Academic performance
                            <br />
                            <span className="text-white/70">through our</span>{' '}
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                Unique & Proven Strategies
                            </span>
                        </h3>
                    </div>

                    <motion.button
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl shadow-orange-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <span className="text-2xl">🌟</span>
                            Join Memory MASTERS!
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            style={{ opacity: 0.4 }}
                        />
                    </motion.button>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <span className="text-green-400">✓</span> 1000+ Students
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <span className="text-green-400">✓</span> Live Training
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <span className="text-green-400">✓</span> Instant Access
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ABCMemory;
