process.stdout.write('\033c');// clear terminal
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fetchSheet = require("./sheets.js");
const cors = require("cors");

const GOOGLE_SHEET_ID = "1r04j0ghIXlbJAw2awi6Bao5vEXibGOMNzA1xR2wdONA";
const PORT = process.env.PORT || 3000;
const CLIENT_ORIGIN = process.env.NODE_ENV !== "production" ? "http://localhost:9000" : "https://bfsheets.herokuapp.com";

const app = express();// instantiate Express app

//encoding middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// middleware - enable cors
app.use(cors({origin: CLIENT_ORIGIN}));

// routes
app.use(express.static("public"));

app.get("/api", (req, res) => {
    fetchSheet(GOOGLE_SHEET_ID, data => {
        res.status(200).json(JSON.stringify(data));
    });
});
app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./dist/index.html"));
});

// module.exports = app;

app.listen(PORT, () => console.log(`Please pay no attention to the Express app listenting on port ${PORT}` ));