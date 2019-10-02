process.stdout.write('\033c');// clear terminal
const express = require("express");
const bodyParser = require("body-parser");
const fetchSheet = require("./sheets.js");

const googleSheetId = "1r04j0ghIXlbJAw2awi6Bao5vEXibGOMNzA1xR2wdONA";
const PORT = process.env.PORT || 3000;

const app = express();// instantiate Express app

//encoding middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use(express.static("public"));
app.get("/*", (req, res) => {
    fetchSheet(googleSheetId, data => {
        res.status(200).json(JSON.stringify(data));
    });
});

// module.exports = app;

app.listen(PORT, () => console.log(`Please pay no attention to the Express app listenting on port ${PORT}` ));