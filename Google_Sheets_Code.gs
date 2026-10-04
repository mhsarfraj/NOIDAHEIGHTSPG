/* NOIDA HEIGHTS PG — Google Sheets enquiry receiver
   1. Create a Google Sheet.
   2. Extensions -> Apps Script.
   3. Paste this code.
   4. Save, then Deploy -> New deployment -> Web app.
   5. Execute as: Me
   6. Who has access: Anyone
   7. Copy the /exec URL into script.js.
*/

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Enquiries');
  if (!sh) sh = ss.insertSheet('Enquiries');
  sh.clear();
  sh.appendRow(['Timestamp','Name','Phone','Email','Room Preference','Move-in Date','Message','Status']);
  sh.setFrozenRows(1);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ok:true, message:'NOIDA HEIGHTS PG enquiry endpoint is live'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Enquiries');
  if (!sh) {
    sh = ss.insertSheet('Enquiries');
    sh.appendRow(['Timestamp','Name','Phone','Email','Room Preference','Move-in Date','Message','Status']);
  }

  const p = e && e.parameter ? e.parameter : {};
  sh.appendRow([
    new Date(),
    p.name || '',
    p.phone || '',
    p.email || '',
    p.room || '',
    p.moveInDate || '',
    p.message || '',
    'New'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
