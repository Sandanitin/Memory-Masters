# Google Sheets Integration Setup Guide

## 🎯 Objective
Store successful payment data automatically in Google Sheets for record-keeping and analysis.

---

## 📊 Google Sheets Structure

Create a new Google Sheet with the following columns:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Timestamp | First Name | Last Name | Email | Mobile | Standard | City | Payment ID | Amount |

---

## 🔧 Step-by-Step Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "+ Blank" to create a new spreadsheet
3. Name it: **"Memory MASTERS - Registrations"**
4. Add the following headers in Row 1:
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Last Name`
   - D1: `Email`
   - E1: `Mobile`
   - F1: `Standard`
   - G1: `City`
   - H1: `Payment ID`
   - I1: `Amount`

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    var rowData = [
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.mobile || '',
      data.standard || '',
      data.city || '',
      data.paymentId || '',
      data.amount || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'row': sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        mobile: '9876543210',
        standard: 'Grade 8th - 10th',
        city: 'Mumbai',
        paymentId: 'pay_test123456',
        amount: 1
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click **Save** (💾 icon)
5. Name your project: **"Memory MASTERS Registration Handler"**

### Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description:** "Payment data collection"
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Authorize access:**
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

### Step 4: Update Your .env File

1. Open `.env` file in your project
2. Replace the Google Sheets URL:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Save the file
4. **Restart your dev server** for changes to take effect

---

## 🧪 Testing the Integration

### Test from Apps Script Editor:

1. In Apps Script editor, select the `testDoPost` function from dropdown
2. Click **Run** (▶️ icon)
3. Check your Google Sheet - a test row should appear

### Test from Your Application:

1. Start your dev server: `npm run dev`
2. Complete a test payment
3. Check your Google Sheet for the new entry

---

## 📝 Data Format Reference

The script expects data in this JSON format:

```json
{
  "timestamp": "2024-12-09T15:00:00.000Z",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "standard": "Grade 8th - 10th",
  "city": "Mumbai",
  "paymentId": "pay_xxxxxxxxxxxxx",
  "amount": 1
}
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "403 Forbidden" or "Authorization required"
**Solution:**
- Redeploy the script with "Who has access: Anyone"
- Make sure you authorized the script properly
- Try creating a new deployment

### Issue 2: "Script not found"
**Solution:**
- Verify the deployment URL is correct
- Make sure you copied the **Web App URL**, not the script editor URL
- Check if the deployment is active

### Issue 3: "Data not appearing in sheet"
**Solution:**
- Run the `testDoPost()` function to verify script works
- Check Apps Script logs: View → Logs
- Verify the sheet name matches the active sheet

### Issue 4: "CORS errors"
**Solution:**
- Google Apps Script automatically handles CORS
- If issues persist, redeploy the script
- Clear browser cache and try again

### Issue 5: "Timeout errors"
**Solution:**
- Google Apps Script has a 30-second timeout
- The current script is optimized and should work fine
- If issues persist, check your internet connection

---

## 🔐 Security Considerations

### ✅ Safe Practices:
- The script runs under your Google account
- Only you can see the spreadsheet (unless you share it)
- The web app URL is public but doesn't expose sensitive data
- Data is transmitted over HTTPS

### ⚠️ Important Notes:
- Anyone with the URL can submit data to your sheet
- Consider adding validation in the script if needed
- Regularly backup your spreadsheet
- Monitor for unusual activity

### 🛡️ Optional: Add Basic Validation

Add this code before `sheet.appendRow(rowData)` to validate data:

```javascript
// Validate email format
if (!data.email || !data.email.includes('@')) {
  throw new Error('Invalid email address');
}

// Validate mobile number (10 digits)
if (!data.mobile || data.mobile.length !== 10) {
  throw new Error('Invalid mobile number');
}

// Validate payment ID
if (!data.paymentId || !data.paymentId.startsWith('pay_')) {
  throw new Error('Invalid payment ID');
}
```

---

## 📊 Advanced Features (Optional)

### Auto-formatting the Sheet:

Add this code to the end of your `doPost` function:

```javascript
// Format the new row
var lastRow = sheet.getLastRow();
var range = sheet.getRange(lastRow, 1, 1, 9);

// Apply formatting
range.setFontSize(10);
range.setVerticalAlignment('middle');

// Format timestamp column
sheet.getRange(lastRow, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');

// Format amount column
sheet.getRange(lastRow, 9).setNumberFormat('₹#,##0.00');
```

### Email Notifications on New Entry:

Add this function to get email alerts:

```javascript
function sendNotificationEmail(data) {
  var recipient = 'your-email@example.com';
  var subject = 'New Registration - Memory MASTERS';
  var body = `
    New registration received:
    
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Mobile: ${data.mobile}
    Standard: ${data.standard}
    City: ${data.city}
    Payment ID: ${data.paymentId}
    Amount: ₹${data.amount}
    
    Timestamp: ${data.timestamp}
  `;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in `doPost`:
```javascript
// After sheet.appendRow(rowData);
sendNotificationEmail(data);
```

---

## 🔄 Updating the Script

If you need to modify the script:

1. Make changes in the Apps Script editor
2. Click **Save**
3. Click **Deploy** → **Manage deployments**
4. Click ✏️ (Edit) next to your deployment
5. Change **Version** to "New version"
6. Click **Deploy**
7. The URL remains the same - no need to update `.env`

---

## 📈 Analyzing Your Data

### Useful Google Sheets Formulas:

**Count total registrations:**
```
=COUNTA(A2:A) - 1
```

**Sum total revenue:**
```
=SUM(I2:I)
```

**Count by standard:**
```
=COUNTIF(F2:F, "Grade 8th - 10th")
```

**Most common city:**
```
=MODE(G2:G)
```

---

## ✅ Setup Checklist

- [ ] Google Sheet created with proper headers
- [ ] Apps Script code pasted and saved
- [ ] Script deployed as Web app
- [ ] Access set to "Anyone"
- [ ] Web App URL copied
- [ ] `.env` file updated with URL
- [ ] Dev server restarted
- [ ] Test function executed successfully
- [ ] Test payment completed
- [ ] Data appeared in Google Sheet

---

## 🆘 Troubleshooting Steps

If data is not being saved:

1. **Check browser console** for error messages
2. **Check Apps Script logs:**
   - Open Apps Script editor
   - Click **Executions** (clock icon on left)
   - Look for recent executions and errors
3. **Verify the URL** in `.env` is correct
4. **Test the script** using `testDoPost()` function
5. **Check sheet permissions** - make sure you own the sheet
6. **Redeploy** the script with a new version

---

## 📞 Additional Resources

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Web Apps Guide](https://developers.google.com/apps-script/guides/web)
- [Spreadsheet Service](https://developers.google.com/apps-script/reference/spreadsheet)

---

**Last Updated:** December 9, 2024
