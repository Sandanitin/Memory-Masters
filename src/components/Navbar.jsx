import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (link) => {
        setIsMobileMenuOpen(false);

        if (link.to) {
            // Navigate to route
            navigate(link.to);
            // Scroll to top when navigating to home
            if (link.to === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (link.id) {
            // If we're not on home page, go home first
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                // Already on home, just scroll
                const element = document.getElementById(link.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home', to: '/' },
        { id: 'services', label: 'Services' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'workshop', label: 'Workshop' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
        { id: 'faq', label: 'FAQ' }
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-purple-500/5'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {
                                navigate('/');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <div className="relative">
                                {/* Professional highlight effect */}
                                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 shadow-lg border-2 border-yellow-400 hover:border-orange-400 transition-all">
                                    <img
                                        src="/assets/MM Logo-3.png"
                                        alt="Memory MASTERS Logo"
                                        className="h-10 md:h-14 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.id || link.label}
                                    onClick={() => handleNavigation(link)}
                                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all relative group ${link.label === 'Workshop'
                                        ? isScrolled
                                            ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold shadow-md'
                                            : 'bg-white/20 backdrop-blur-sm text-white font-bold'
                                        : isScrolled
                                            ? 'text-gray-700 hover:text-purple-600'
                                            : 'text-white/80 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.label}
                                    {link.label !== 'Workshop' && (
                                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full`} />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <motion.button
                                onClick={() => setIsRegistrationOpen(true)}
                                className="hidden md:flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg shadow-orange-500/30 text-base md:text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Register Now</span>
                                <span className="relative z-10 bg-white/20 px-2 md:px-3 py-0.5 md:py-1 rounded text-sm md:text-base">₹699</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ opacity: 0.3 }}
                                />
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-sm'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="relative w-5 h-4">
                                    <motion.span
                                        className={`absolute left-0 w-full h-0.5 rounded-full transition-colors ${isScrolled ? 'bg-gray-700' : 'bg-white'
                                            }`}
                                        animate={{
                                            top: isMobileMenuOpen ? '50%' : '0%',
                                            rotate: isMobileMenuOpen ? 45 : 0,
                                            translateY: isMobileMenuOpen ? '-50%' : '0%'
                                        }}
                                    />
                                    <motion.span
                                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded-full transition-colors ${isScrolled ? 'bg-gray-700' : 'bg-white'
                                            }`}
                                        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                                    />
                                    <motion.span
                                        className={`absolute left-0 w-full h-0.5 rounded-full transition-colors ${isScrolled ? 'bg-gray-700' : 'bg-white'
                                            }`}
                                        animate={{
                                            bottom: isMobileMenuOpen ? '50%' : '0%',
                                            rotate: isMobileMenuOpen ? -45 : 0,
                                            translateY: isMobileMenuOpen ? '50%' : '0%'
                                        }}
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="p-6">
                                <div className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.button
                                            key={link.id || link.label}
                                            onClick={() => handleNavigation(link)}
                                            className="w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {link.label}
                                        </motion.button>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <motion.button
                                        onClick={() => {
                                            setIsRegistrationOpen(true);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg text-lg"
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            🚀 Register Now @ ₹699
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
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

export default Navbar;
