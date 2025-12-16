#!/usr/bin/env node
/**
 * Test Zoho India SMTP Configuration
 */

const testData = {
    customerName: "Test User",
    customerEmail: "sainithin95054@gmail.com",
    customerMobile: "9876543210",
    paymentId: "pay_test_" + Date.now(),
    amount: "1",
    standard: "10th Grade",
    instituteName: "Test Institute",
    city: "Hyderabad"
};

console.log('🧪 Testing Zoho India SMTP Configuration...');
console.log('📧 Sending to:', testData.customerEmail);
console.log('📡 API URL: http://localhost:3001/api/send-payment-receipt\n');

fetch('http://localhost:3001/api/send-payment-receipt', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData)
})
    .then(response => response.json())
    .then(data => {
        console.log('\n' + '='.repeat(60));
        if (data.success) {
            console.log('✅ SUCCESS! Email sent via Zoho India SMTP');
            console.log('📬 Message ID:', data.messageId);
            console.log('\n✅ Zoho configuration is working correctly!');
            console.log('SMTP Server: smtppro.zoho.in:465 (SSL)');
        } else {
            console.log('❌ FAILED:', data.message);
            console.log('Error:', data.error);
        }
        console.log('='.repeat(60) + '\n');
        console.log('📧 Check email inbox at sainithin95054@gmail.com');
    })
    .catch(error => {
        console.error('\n❌ Request Error:', error.message);
    });
