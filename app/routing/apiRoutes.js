
// Dependencies
const data = require("../data/friends");

module.exports = function (app) {

    // Display a JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        return res.json(data)
    });
    
    // Handle incoming survey results and handle the compatibilty logic
    app.post("/api/friends", function(req, res) {
        
        // Store new user object
        let newUser = req.body;
        
        // Store new user score
        let userScore = newUser.scores;
        console.log("userScore = " + userScore);

        // Create variables to hold best match data
        let matchIndex = 0;
        let minDifference = 500;
        
        let tilde = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

        // Iterate thu friends data to access score
        for (let i = 0; i < data.length; i ++) {
            
            // Store each friend score array
            let friendScore = data[i].scores;

            // Reset diff & total difference
            let totalDifference = 0;   
            let diff = 0;

            // Iterate thru each friend score array for compatibility logic
            for (let j = 0; j < friendScore.length; j ++) {
                
                // Calculate absolute difference between each user score and friend score
                diff = Math.abs(friendScore[j] - userScore[j]);
                totalDifference += diff;
                
            }

            // Testing / Debug
            console.log(tilde);
            console.log(` Name: ${data[i].name}\n Photo: ${data[i].photo}\n Total Diff: ${totalDifference}`);
                        
            // Determine lowest total difference and set as best match
            if (totalDifference < minDifference) {

                // If new lowest difference then set match index to current friend
                matchIndex = i;

                // If new lowest difference then set minDifference to current lowest totalDifference
                minDifference = totalDifference;
                
            }
        }

        // Push newUser to data array
        data.push(newUser);

        // Send browser the best match data
        res.status(200).json(data[matchIndex]);
        console.log(tilde);
        console.log("Closest Match = " , data[matchIndex]);
        
    });
}

