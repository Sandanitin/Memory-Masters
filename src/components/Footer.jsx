import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Workshop', href: '#workshop' },
        { name: 'About', href: '/about', isRoute: true },
        { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
        { name: 'Terms & Conditions', href: '/terms-conditions', isRoute: true },
        { name: 'Cancellation & Refunds', href: '/refund-policy', isRoute: true },
        { name: 'FAQ', href: '#faq' },
        { name: 'Shipping', href: '/shipping', isRoute: true }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/918019623477',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Top CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 py-12">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                                Ready to Transform Your Memory?
                            </h3>
                            <p className="text-white/80">
                                Join 1000+ students who have already improved their academic performance
                            </p>
                        </div>
                        <motion.button
                            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                🚀 Register Now @ ₹699
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                style={{ opacity: 0.4 }}
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-yellow-400 hover:border-orange-400 transition-all">
                                    <img
                                        src="/assets/MM Logo-3.png"
                                        alt="Memory MASTERS Logo"
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Founded by Kishore Kaki, Memory MASTERS is dedicated to empowering students with scientifically-backed memory strategies.
                            </p>
                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-400">
                                    🔒 Secure Payment
                                </span>
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-400">
                                    ✅ 100% Guarantee
                                </span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">🔗</span>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        {link.isRoute ? (
                                            <Link
                                                to={link.href}
                                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                                            >
                                                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-purple-500 transition-colors" />
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                                            >
                                                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-purple-500 transition-colors" />
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">📞</span>
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg">📧</span>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href="mailto:memoryMASTERS.in@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                            memoryMASTERS.in@gmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg">📱</span>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <a href="tel:+918019623477" className="text-gray-300 hover:text-white transition-colors">
                                            +91 80196 23477
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg">🕒</span>
                                    <div>
                                        <p className="text-sm text-gray-500">Working Hours</p>
                                        <p className="text-gray-300">Mon-Sat: 9AM - 6PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center text-orange-400">🌐</span>
                                Follow Us
                            </h4>
                            <div className="flex gap-3 mb-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className="text-gray-400 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm">
                                Stay connected for tips, updates, and exclusive offers!
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-200">
                                <span>© 2025 Memory MASTERS. All rights reserved.</span>
                                <span className="hidden md:inline">•</span>
                                <span>Designed and developed by</span>
                                <a
                                    href="https://www.vikrin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold hover:from-purple-500 hover:to-blue-500 transition-all"
                                >
                                    Vikrin
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
