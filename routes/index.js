const router = require("express").Router();
const fetchSheet = require("../sheets.js");
const googleSheetId = "1r04j0ghIXlbJAw2awi6Bao5vEXibGOMNzA1xR2wdONA";

router.get("/*", (req, res) => {
    console.log("/ route hit...")
    fetchSheet(googleSheetId, data => {
        res.status(200).json(JSON.stringify(data));
    });
})

module.exports = router;