/**
 * Test Google Sheets Integration
 * Run: node test-google-sheets.js
 */

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzFjAN0lcnUwmhslgWVhXwVa4-7CrU8fIk3z_l_9PcraaFJmU-akJ-IxFcQwKYnQA9h/exec';

const testPaymentData = {
    customerName: "Test Student",
    customerEmail: "sainithin95054@gmail.com",
    customerMobile: "9876543210",
    standard: "10th Grade",
    instituteName: "Test School",
    city: "Hyderabad",
    paymentId: "pay_test_" + Date.now(),
    amount: "99",
    transactionDate: new Date().toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
    })
};

console.log('📊 Testing Google Sheets integration...');
console.log('Sending data:', testPaymentData);
console.log('');

fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    body: JSON.stringify(testPaymentData),
    headers: {
        'Content-Type': 'text/plain;charset=utf-8',
    },
})
    .then(response => response.json())
    .then(data => {
        console.log('✅ Success! Data sent to Google Sheets:');
        console.log(data);
        console.log('');
        console.log('📊 Check your Google Sheet to verify the data!');
    })
    .catch(error => {
        console.error('❌ Error:', error.message);
        console.log('');
        console.log('Note: If you see CORS error, the data might still be saved.');
        console.log('Check your Google Sheet to verify!');
    });
