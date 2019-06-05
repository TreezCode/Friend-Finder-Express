
// Include GET route to display a JSON of all possible friends
app.get("/api/friends", function(req, res) {
    return res.json()
});

// Include POST route to handle incoming survey results and handle the compatibilty logic
app.post("/api/friends", function(req, res) {
    
});