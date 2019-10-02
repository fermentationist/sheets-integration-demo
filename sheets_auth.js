const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "./auth/token.json";
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

const getSpreadsheet = async (spreadSheetId) => {
     // Load client secrets from a local file.
     const authentication = await fs.readFile("./auth/credentials.json", async (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Sheets API.
        return await authorize(JSON.parse(content));
    });
    return await fetchSheet(authentication, spreadSheetId);
}

/** 
* Create an OAuth2 client with the given credentials, and then execute the
given callback function.
* @param {Object} credentials The authorization client credentials.
*/
const authorize = async credentials => {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
  console.log("TCL: oAuth2Client", oAuth2Client)

  // Check if we have previously stored a token.
  return await fs.readFile(TOKEN_PATH, async (err, token) => {
    if (err) return await getNewToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
    return oAuth2Client;
  });
}

/** Get and store new token after prompting for user authorization, and then
* execute the given callback with the authorized OAuth2 client.
* @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 */
const getNewToken = async oAuth2Client => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return await rl.question('Enter the code from that page here: ', async code => {
        rl.close();
        return await oAuth2Client.getToken(code, async (err, token) => {
            if (err) return console.error('Error while trying to retrieve access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
                console.log(err ? err : `Token stored to ${TOKEN_PATH}`);
            });
            return await oAuth2Client;
        });
    });
}

/**
* To be used as the callback for getSpreadsheet
* @param {google.auth.OAuth2} auth The OAuth2 client.
* @param {string} spreadsheetId The id of the requested Google Sheet.
*/
const fetchSheet = async (auth, spreadsheetId) => {
    const sheets = google.sheets({version: 'v4', auth});
    const requestedSheet = await sheets.spreadsheets.get({spreadsheetId, key: API_KEY}, (err, res) => {
        return err ? console.log(err, "\nFailed to retrieve spreadsheet -", spreadsheetId) : res;
    });
    return await requestedSheet;
}

module.exports = getSpreadsheet;
