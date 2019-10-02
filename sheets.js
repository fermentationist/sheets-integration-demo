const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const handled = require("handled");// aliased as ø

const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const RANGE = "A:H";

const fetchSheet = (spreadsheetId, callback) => {
    const sheets = google.sheets({version: 'v4', auth: API_KEY});
    sheets.spreadsheets.values.get({
        spreadsheetId,
        range:RANGE,
        majorDimension: "ROWS",
    }, (err, res) => {
        if (err) {
            return console.log("\nFailed to retrieve spreadsheet\n", err);
        }
        return callback(res.data && res.data.values);
    });
}

module.exports = fetchSheet.ø;
