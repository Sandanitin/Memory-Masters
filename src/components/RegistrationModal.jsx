import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { sendPaymentReceipt } from '../services/emailService';
import { saveToGoogleSheets } from '../services/sheetsService';

const RegistrationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        standard: 'Grade 1st - 7th',
        instituteName: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile || !formData.instituteName || !formData.city) {
            toast.error('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Mobile validation (10 digits)
        if (formData.mobile.length !== 10 || !/^\d+$/.test(formData.mobile)) {
            toast.error('Please enter a valid 10-digit mobile number');
            return;
        }

        // Initialize Razorpay payment
        const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

        if (!razorpayKeyId) {
            toast.error('Payment gateway not configured. Please contact support.');
            console.error('Razorpay Key ID not found in environment variables');
            return;
        }

        const options = {
            key: razorpayKeyId,
            amount: 100, // Amount in paise (₹1)
            currency: 'INR',
            name: 'Memory MASTERS',
            description: 'Memory MASTERS Basic Registration',
            image: '/assets/MM Logo-3.png',
            handler: async function (response) {
                // Payment successful
                console.log('Payment successful:', response);

                const paymentId = response.razorpay_payment_id;
                const customerName = `${formData.firstName} ${formData.lastName}`;

                // Show success message
                toast.success('Payment successful! Processing your registration...');

                try {
                    // Send payment receipt email
                    await sendPaymentReceipt({
                        customerName: customerName,
                        customerEmail: formData.email,
                        customerMobile: formData.mobile,
                        paymentId: paymentId,
                        amount: 1,
                        standard: formData.standard,
                        instituteName: formData.instituteName,
                        city: formData.city
                    });

                    toast.success('Payment receipt sent to your email!');
                } catch (emailError) {
                    console.error('Error sending email:', emailError);
                    toast.error('Payment successful, but failed to send email receipt.');
                }

                try {
                    // Save to Google Sheets
                    await saveToGoogleSheets({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        mobile: formData.mobile,
                        standard: formData.standard,
                        instituteName: formData.instituteName,
                        city: formData.city,
                        paymentId: paymentId,
                        amount: 1
                    });

                    console.log('Payment data saved to Google Sheets');
                } catch (sheetsError) {
                    console.error('Error saving to Google Sheets:', sheetsError);
                    // Don't show error to user as payment was successful
                }

                // Close modal and reset form after a delay
                setTimeout(() => {
                    onClose();
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        mobile: '',
                        standard: 'Grade 1st - 7th',
                        instituteName: '',
                        city: ''
                    });
                }, 2000);
            },
            prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                contact: formData.mobile
            },
            notes: {
                standard: formData.standard,
                city: formData.city
            },
            theme: {
                color: '#9333ea' // Purple color matching the theme
            },
            modal: {
                ondismiss: function () {
                    toast.error('Payment cancelled');
                }
            }
        };

        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', function (response) {
            console.error('Payment failed:', response.error);
            toast.error(`Payment failed: ${response.error.description}`);
        });

        rzp.open();
    };

    const standards = [
        'Student',
        'Institute',
        'Grade 1st - 7th',
        'Grade 8th - 10th',
        'Junior College',
        'Pursuing Bachelors',
        'Pursuing MASTERS',
        'Competitive Exams',
        'Professional'
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 p-4 rounded-t-2xl relative sticky top-0 z-10">
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                                >
                                    ✕
                                </button>
                                <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                                    Memory MASTERS BASIC
                                </h2>
                                <div className="flex items-center gap-2 text-white/90 text-sm">
                                    <span>🔒 Secure Checkout</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6">
                                {/* Form Section */}
                                <div>
                                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                                        Customer Information
                                    </h3>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name Fields */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email ID<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Mobile No.<span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-2">
                                                <div className="flex items-center gap-2 px-3 py-3 bg-gray-50 border border-gray-300 rounded-lg">
                                                    🇮🇳 <span className="text-sm">+91</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    placeholder="10-digit mobile number"
                                                    maxLength="10"
                                                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Standard */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Standard<span className="text-red-500">*</span>
                                            </label>
                                            <div className="space-y-2">
                                                {standards.map((standard) => (
                                                    <label key={standard} className="flex items-center gap-3 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="standard"
                                                            value={standard}
                                                            checked={formData.standard === standard}
                                                            onChange={handleChange}
                                                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                                        />
                                                        <span className="text-gray-700">{standard}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Institute/School/College Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Name of Institute/School/College<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="instituteName"
                                                value={formData.instituteName}
                                                onChange={handleChange}
                                                placeholder="Enter your institute/school/college name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        {/* City */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex gap-4 pt-4">
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                            >
                                                ← Back
                                            </button>
                                            <button
                                                type="submit"
                                                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
                                            >
                                                Proceed to pay
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Order Summary */}
                                <div className="md:col-span-1">
                                    <div className="bg-gray-50 rounded-xl p-6 sticky top-4">
                                        <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                                            Order Summary for{' '}
                                            <span className="text-purple-600">Memory MASTERS [Basic]</span>
                                        </h3>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between text-gray-700">
                                                <span>Subtotal (1 item)</span>
                                                <span>₹ 1.00</span>
                                            </div>
                                        </div>

                                        <div className="border-t pt-4">
                                            <div className="flex justify-between text-xl font-bold text-gray-900">
                                                <span>Order Total</span>
                                                <span>₹ 1.00</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                                            <p className="text-sm text-green-800">
                                                ✓ Instant access to workshop materials
                                            </p>
                                            <p className="text-sm text-green-800 mt-2">
                                                ✓ Lifetime access to recordings
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
