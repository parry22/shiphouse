# Google Sheets Backend

Use this with the easy Google Apps Script route.

1. Open the Google Sheet you want to receive submissions.
2. Open `Extensions > Apps Script`.
3. Paste the contents of `Code.gs`.
4. Make sure `SPREADSHEET_ID` matches your Google Sheet ID.
5. Click `Deploy > New deployment`.
6. Select `Web app`.
7. Set `Execute as` to `Me`.
8. Set `Who has access` to `Anyone`.
9. Deploy and authorize the script.
10. Copy the web app URL.
11. Paste that URL into `window.SHIPHOUSE_FORM_ENDPOINT` in `apply/index.html`.
