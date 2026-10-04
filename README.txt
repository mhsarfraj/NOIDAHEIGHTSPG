NOIDA HEIGHTS PG — CARSNOIDA-STYLE THEME

This version keeps the website completely static:
- Double-click index.html to view the site.
- No CMD, Python, Node.js, XAMPP or local server is needed.
- All property details are built into index.html.
- Google Sheets is used ONLY for enquiry submissions.

FILES
index.html
style.css
script.js
Google_Sheets_Code.gs
images/

ONE-TIME GOOGLE SHEETS SETUP
1. Create a Google Sheet.
2. Extensions → Apps Script.
3. Paste Google_Sheets_Code.gs.
4. Run setup() once and allow permissions.
5. Deploy → New deployment → Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Copy the URL ending in /exec.
9. The Google Apps Script /exec URL has already been inserted into script.js.
   You only need to verify that the Apps Script deployment is public: Who has access → Anyone.

After that, enquiries submitted on the static site are posted to the Enquiries sheet.

IMPORTANT
Do NOT use a /dev URL. Use the deployed /exec Web App URL.
The site does not native HTML form property data from Google Sheets; only enquiry submissions use Google Sheets.

THEME
The visual direction is adapted from the supplied newcars.zip theme:
navy/white/green palette, compact navigation, structured cards, filter-style snapshot bar, clean typography, dense information layout and responsive mobile design.

IMAGES
The gallery includes the supplied NOIDA HEIGHTS room images plus the additional images from images.zip. Replace any image you do not want by deleting it from images/ and updating the corresponding HTML image path.


IMPORTANT: This version does NOT use fetch/CORS for enquiries. It uses a normal HTML POST to the Google Apps Script /exec URL, so index.html can be opened directly by double-clicking it.


TROUBLESHOOTING 403
If the /exec URL itself shows HTTP 403 when opened in a normal browser tab, the Google Apps Script deployment permissions are the problem, not this website. In Apps Script: Deploy → Manage deployments → edit the Web app deployment → Execute as: Me → Who has access: Anyone → Deploy. If you changed the code after deploying, redeploy/create a new version. Then open the /exec URL directly; it should show the JSON message “NOIDA HEIGHTS PG enquiry endpoint is live”.

FORM FIX
The enquiry inputs include proper HTML name attributes (name, phone, email, room, moveInDate, message), so the Apps Script doPost(e) receives the submitted values correctly.
