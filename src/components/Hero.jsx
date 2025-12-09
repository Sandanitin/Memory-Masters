import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Stunning Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Main Gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 25%, #4a2c7a 50%, #2563eb 100%)'
                    }}
                />

                {/* Animated Mesh Gradient Orbs */}
                <motion.div
                    className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                        filter: 'blur(80px)'
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                        filter: 'blur(80px)'
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                        background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.2 + Math.random() * 0.3,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Glowing Lines */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                    <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Glowing Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block mb-6"
                        >
                            <span className="relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20 shadow-xl">
                                <span className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full opacity-20 blur-sm animate-pulse" />
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                                </span>
                                <span className="relative">World&apos;s Longest-running Online Memory Workshop</span>
                            </span>
                        </motion.div>

                        {/* Main Heading with Glow Effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h1 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight tracking-tight">
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-white drop-shadow-lg">
                                        MEMORY
                                    </span>
                                </span>
                                <br />
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg text-5xl md:text-7xl">
                                        MASTERS
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl opacity-30" />
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-base md:text-lg text-white/80 mb-6 font-medium max-w-xl mx-auto lg:mx-0"
                        >
                            Empowering students with scientifically-backed memory strategies. Transform the way you approach textbooks, exams, and lifelong knowledge.
                            Join <span className="text-yellow-400 font-bold">1000+</span> Students Who Transformed Their Academic Performance.
                        </motion.p>

                        {/* Animated Benefits Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-2 mb-6 max-w-lg mx-auto lg:mx-0"
                        >
                            {[
                                { icon: '📚', text: 'Remember More in Less Time', color: 'from-purple-500/20 to-purple-600/20' },
                                { icon: '🎯', text: '10X Concentration Power', color: 'from-blue-500/20 to-blue-600/20' },
                                { icon: '⚡', text: 'Speed Up Learning', color: 'from-yellow-500/20 to-orange-500/20' },
                                { icon: '🏆', text: 'Excel in Academics', color: 'from-green-500/20 to-emerald-500/20' }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative group bg-gradient-to-br ${benefit.color} backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:border-white/30 transition-all duration-300`}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative flex items-center gap-2">
                                        <span className="text-xl">{benefit.icon}</span>
                                        <span className="text-white/90 font-medium text-xs">{benefit.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Premium CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="max-w-md mx-auto lg:mx-0"
                        >
                            <motion.button
                                className="w-full relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-2xl shadow-orange-500/40"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    🚀 Register Now for Memory MASTERS
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                                    animate={{
                                        x: ['-100%', '100%'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{ opacity: 0.3 }}
                                />
                            </motion.button>
                            <p className="text-center text-sm text-white/70 mt-4 flex items-center justify-center gap-1">
                                <span className="text-green-400">✓</span> Live Training for Parents & Students
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Stunning Image Collage */}
                    <div className="relative hidden lg:block h-[650px]">
                        {/* Main Glow Behind Images */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl" />

                        {/* Main Image: Happy Student */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring" }}
                            className="absolute top-8 right-8 w-80 h-80 rounded-3xl overflow-hidden shadow-2xl z-20 group"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent z-10" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl opacity-50 blur group-hover:opacity-70 transition-opacity" />
                            <img
                                src="/assets/student-studying.png"
                                alt="Happy Student Studying"
                                className="relative w-full h-full object-cover rounded-3xl border-4 border-white/30"
                            />
                        </motion.div>

                        {/* Secondary Image: Brain Power */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6, type: "spring" }}
                            className="absolute top-48 left-0 w-64 h-64 rounded-full overflow-hidden shadow-2xl z-10 group"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-50 blur animate-pulse" />
                            <motion.div
                                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{ transformOrigin: 'center center' }}
                            >
                                <img
                                    src="/assets/brain-power.png"
                                    alt="Brain Power Abstract"
                                    className="w-full h-full object-cover"
                                    style={{ transform: 'scale(1.1)' }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Tertiary Image: Success Trophy */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8, type: "spring" }}
                            className="absolute bottom-12 right-24 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl z-30 group"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-2xl opacity-60 blur group-hover:opacity-80 transition-opacity" />
                            <img
                                src="/assets/success-trophy.png"
                                alt="Academic Success Trophy"
                                className="relative w-full h-full object-cover rounded-2xl border-4 border-white/30"
                            />
                        </motion.div>

                        {/* Floating Stats Badges */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="absolute top-4 left-20 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl z-40"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🎓</span>
                                <div>
                                    <p className="text-lg font-black text-gray-900">1K+</p>
                                    <p className="text-xs text-gray-500">Students</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="absolute bottom-32 left-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl px-4 py-3 shadow-xl z-40"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="flex items-center gap-2 text-white"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-2xl">📈</span>
                                <div>
                                    <p className="text-lg font-black">47%</p>
                                    <p className="text-xs opacity-90">Focus Boost</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="absolute top-72 right-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl px-4 py-3 shadow-xl z-40"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="flex items-center gap-2 text-white">
                                <span className="text-2xl">🏆</span>
                                <div>
                                    <p className="text-lg font-black">100+</p>
                                    <p className="text-xs opacity-90">Toppers</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Bar at Bottom - Mobile Friendly */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="lg:hidden flex flex-wrap justify-center gap-6 mt-12 text-white"
                >
                    {[
                        { value: '1K+', label: 'Students', icon: '🎓' },
                        { value: '47%', label: 'Focus Boost', icon: '📈' },
                        { value: '100+', label: 'Toppers', icon: '🏆' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-2xl block mb-1">{stat.icon}</span>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-sm opacity-80">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
