import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationModal from './RegistrationModal';

const FixedCTA = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only show/hide if user has scrolled past 100px
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    setIsScrollingDown(true);
                } else {
                    // Scrolling up
                    setIsScrollingDown(false);
                }
            } else {
                // At the top, show the bar
                setIsScrollingDown(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isVisible && isScrollingDown && (
                    <motion.div
                        key="fixed-cta-bar"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 shadow-2xl"
                    >
                        <div className="container mx-auto px-3 md:px-4 py-2 md:py-4">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                                {/* Close Button - Mobile */}
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="absolute top-1 right-1 md:top-2 md:right-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors text-xs"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>

                                {/* Text Content */}
                                <div className="text-center md:text-left text-white flex-1 pr-6 md:pr-0">
                                    <h3 className="text-base md:text-lg lg:text-xl font-heading font-bold mb-0.5 md:mb-1">
                                        Ready to Transform Your Memory?
                                    </h3>
                                    <p className="text-white/90 text-xs md:text-sm lg:text-base hidden sm:block">
                                        Join 1000+ students who have already improved their academic performance
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="flex items-center gap-2 md:gap-3">
                                    <motion.button
                                        onClick={() => setIsRegistrationOpen(true)}
                                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg md:rounded-xl shadow-lg shadow-orange-500/30 whitespace-nowrap"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10 flex items-center gap-1 md:gap-2 text-sm md:text-base lg:text-lg">
                                            🚀 Register @ ₹1
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            style={{ opacity: 0.3 }}
                                        />
                                    </motion.button>

                                    {/* Close Button - Desktop */}
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="hidden md:flex w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors"
                                        aria-label="Close"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
            />
        </>
    );
};

export default FixedCTA;
