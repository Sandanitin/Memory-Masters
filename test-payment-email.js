#!/usr/bin/env node
/**
 * Quick test script to verify email API is working
 * Run: node test-payment-email.js
 */

const testPaymentData = {
    customerName: "Test User",
    customerEmail: "sainithin95054@gmail.com", // Change to your email
    customerMobile: "9876543210",
    paymentId: "pay_test_" + Date.now(),
    amount: "99",
    standard: "10th Grade",
    city: "Hyderabad"
};

console.log('🧪 Testing email API...');
console.log('Sending to:', testPaymentData.customerEmail);

fetch('http://localhost:3001/api/send-payment-receipt', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(testPaymentData)
})
    .then(response => response.json())
    .then(data => {
        console.log('✅ Success:', data);
        console.log('\n📧 Check your email inbox!');
    })
    .catch(error => {
        console.error('❌ Error:', error);
    });
