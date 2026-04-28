const SPREADSHEET_ID = "1-t6ZiWaGAsOq04tJhqsJem7AlhKJAjrC6zwP4Lrk7pc";
const SHEET_NAME = "Shiphouse Applications";

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(spreadsheet);
    const fields = Array.isArray(payload.fields) ? payload.fields : [];
    const headers = [
      "Submitted at",
      "Founder name",
      "Email",
      "Company",
      ...fields.map((field) => field.label),
    ];
    ensureHeaders_(sheet, headers);

    const row = [
      payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
      payload.name || "",
      payload.email || "",
      payload.company || "",
      ...fields.map((field) => normalizeValue_(field.value)),
    ];
    sheet.appendRow(row);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: error.message });
  }
}

function doGet() {
  return json_({ ok: true, message: "Shiphouse application endpoint is running." });
}

function getOrCreateSheet_(spreadsheet) {
  const existing = spreadsheet.getSheetByName(SHEET_NAME);
  return existing || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    return;
  }

  const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const missingHeaders = headers.filter((header) => !existingHeaders.includes(header));

  if (missingHeaders.length > 0) {
    sheet.getRange(1, existingHeaders.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }
}

function normalizeValue_(value) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (value === null || value === undefined) {
    return "";
  }

  return String(value);
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
