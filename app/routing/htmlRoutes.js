
// Dependencies
const path = require("path");

module.exports = function (app) {

    // Include default catch all route that displays home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    // Include route to display the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}


