process.stdout.write('\033c');// clear terminal
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();// instantiate Express app

//encoding middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use(express.static("public"));
app.use("/api", routes);

// module.exports = app;

app.listen(PORT, () => console.log(`Please pay no attention to the Express app listenting on port ${PORT}` ));