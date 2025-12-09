import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Who can attend this workshop?',
            answer: 'This workshop is designed for students of all ages (from Class 5 onwards) and parents who want to help their children excel in academics. Whether you\'re preparing for board exams, competitive exams, or just want to improve your study skills, this workshop is for you.',
            icon: '👥'
        },
        {
            question: 'Is this workshop online or offline?',
            answer: 'This is a completely online workshop conducted via Zoom. You can attend from the comfort of your home with just a laptop/phone and internet connection.',
            icon: '💻'
        },
        {
            question: 'What will I learn in this 2-hour workshop?',
            answer: 'You will learn foundational memory techniques, concentration boosting strategies, speed reading fundamentals, and practical methods to memorize difficult concepts with ease. All techniques are instantly applicable to your studies.',
            icon: '📚'
        },
        {
            question: 'Will I get any study materials?',
            answer: 'Yes! All participants will receive digital study materials, practice worksheets, and access to recorded sessions for future reference.',
            icon: '📝'
        },
        {
            question: 'What is the refund policy?',
            answer: 'We offer a 100% money-back guarantee if you\'re not satisfied with the workshop. Simply contact us within 24 hours of the workshop completion.',
            icon: '💰'
        },
        {
            question: 'How do I join after payment?',
            answer: 'After successful payment, you will receive a confirmation email with the Zoom link and joining instructions. You\'ll also receive reminder emails before the workshop.',
            icon: '🔗'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

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
                        ❓ GOT QUESTIONS?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600">Got questions? We&apos;ve got answers!</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="group"
                            >
                                <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${openIndex === index
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl shadow-purple-500/20'
                                    : 'bg-white shadow-lg hover:shadow-xl'
                                    }`}>
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full p-6 text-left flex items-center gap-4"
                                    >
                                        <span className={`text-3xl transition-transform duration-300 ${openIndex === index ? 'scale-110' : ''
                                            }`}>
                                            {faq.icon}
                                        </span>
                                        <span className={`flex-1 text-lg font-semibold transition-colors ${openIndex === index ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                                                ? 'bg-white/20 text-white'
                                                : 'bg-purple-100 text-purple-600'
                                                }`}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pl-[76px]">
                                                    <p className="text-white/90 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30" />
                        <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                            <p className="text-lg text-gray-700 mb-6">
                                Still have questions? We&apos;re here to help!
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.a
                                    href="mailto:info@memoryMASTERS.com"
                                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>📧</span> Email Us
                                </motion.a>
                                <motion.a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>📞</span> Call Us
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
