import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: 'Kashvi Gangar',
            role: 'Board Exam Topper - 92%',
            avatar: '👩‍🎓',
            color: 'from-purple-500 to-indigo-500',
            text: 'I have always struggled with my studies. It took me long hours to grasp even the easiest of concepts. My 10th boards were nearing and I had no idea how I would pass. Then, my mom enrolled me for Memory MASTERS workshop and that was the breakthrough I needed. With the techniques taught in the workshop and Kimi Mam\'s constant guidance, I secured an unbelievable 92% marks in my board exams!',
            rating: 5,
            highlight: '92% in Boards'
        },
        {
            name: 'Aditi Dave',
            role: 'Student',
            avatar: '👧',
            color: 'from-blue-500 to-cyan-500',
            text: 'Initially, it used to take me 6 to 7 hours to learn 10 answers. But now, thanks to this Course, I can do it in just 1 hour! Also, studying doesn\'t feel boring anymore. It\'s way more fun and gives me a burst of energy.',
            rating: 5,
            highlight: '7 hrs → 1 hr'
        },
        {
            name: 'Srujan S.G.',
            role: 'College Student',
            avatar: '👨‍🎓',
            color: 'from-emerald-500 to-teal-500',
            text: 'After completing the Memory MASTERS Series, I can now speed-read and retain my answers faster. I have also observed a significant improvement in my weekly college tests. Thank you Kimi Mam and team for such an amazing course.',
            rating: 5,
            highlight: 'Speed Reading'
        },
        {
            name: 'Mother of Shanaya Bavishi',
            role: 'Parent',
            avatar: '👩',
            color: 'from-orange-500 to-rose-500',
            text: 'To be honest, my daughter would struggle a lot with studies and would forget everything. But after this workshop, she is literally able to remember everything well and I can see a huge difference in her scores.',
            rating: 5,
            highlight: 'Memory Boost'
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                {/* Stars/Particles */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

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
                        💬 STUDENT SUCCESS STORIES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                        Heartful messages from our{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            MENTEES
                        </span>
                    </h2>
                    <p className="text-xl text-white/70">Real results from real students</p>
                </motion.div>

                {/* Main Testimonial Card */}
                <div className="max-w-5xl mx-auto relative">
                    <div className="relative">
                        {/* Glowing Background */}
                        <div className={`absolute -inset-2 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-3xl blur-xl opacity-30`} />

                        {/* Card */}
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-[auto,1fr] gap-8 items-center"
                                >
                                    {/* Left Side - Avatar & Info */}
                                    <div className="flex flex-col items-center text-center md:text-left">
                                        <motion.div
                                            className={`w-24 h-24 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-5xl shadow-2xl mb-4`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.2 }}
                                        >
                                            {testimonials[currentIndex].avatar}
                                        </motion.div>

                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-white/60 text-sm mb-3">
                                            {testimonials[currentIndex].role}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className="text-yellow-400 text-xl"
                                                >
                                                    ⭐
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Highlight Badge */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.5 }}
                                            className={`bg-gradient-to-r ${testimonials[currentIndex].color} px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg`}
                                        >
                                            {testimonials[currentIndex].highlight}
                                        </motion.div>
                                    </div>

                                    {/* Right Side - Quote */}
                                    <div className="relative">
                                        {/* Quote Icon */}
                                        <div className="absolute -top-4 -left-4 text-6xl text-white/10 font-serif">
                                            &ldquo;
                                        </div>

                                        <p className="text-lg md:text-xl text-white/90 leading-relaxed italic pl-8">
                                            {testimonials[currentIndex].text}
                                        </p>

                                        <div className="absolute -bottom-4 right-0 text-6xl text-white/10 font-serif">
                                            &rdquo;
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        {/* Progress Dots */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(index);
                                    }}
                                    className={`transition-all duration-500 rounded-full ${index === currentIndex
                                        ? 'w-10 h-3 bg-gradient-to-r from-yellow-400 to-orange-400'
                                        : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Auto-play Indicator */}
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-white/50 text-sm hover:text-white/70 transition-colors"
                        >
                            {isAutoPlaying ? '⏸ Auto-playing' : '▶ Click to auto-play'}
                        </button>
                    </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="hidden md:flex justify-center gap-4 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(index);
                            }}
                            className={`group relative p-4 rounded-xl transition-all duration-300 ${index === currentIndex
                                ? 'bg-white/20 border-2 border-white/40'
                                : 'bg-white/5 border border-white/10 hover:bg-white/10'
                                }`}
                            whileHover={{ y: -5 }}
                        >
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-2xl mb-2`}>
                                {testimonial.avatar}
                            </div>
                            <p className="text-white/70 text-sm font-medium">{testimonial.name.split(' ')[0]}</p>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
