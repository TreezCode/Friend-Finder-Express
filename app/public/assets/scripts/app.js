
// Onclick function for submit button
$("#submit").on("click", function(event) {
    event.preventDefault();

    let valid = true;

    // User input validation
    if ($("#name-input").val() === "" || $("#photo-input").val() === "") {
        valid = false;
    } else if ($("#q1").val() === "" || $("#q2").val() === "" || $("#q3").val() === "" || $("#q4").val() === "" || $("#q5").val() === "" || $("#q6").val() === "" ||$("#q7").val() === "" || $("#q8").val() === "" || $("#q9").val() === "" || $("#q10").val() === "") {       
        valid = false;
    }

    if (valid === true) {

        // Cap user input
        let userInput = {
            name : $("#name-input").val().trim(),
            photo : $("#photo-input").val().trim(),
            scores : [
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
                $("#q5").val().trim(),
                $("#q6").val().trim(),
                $("#q7").val().trim(),
                $("#q8").val().trim(),
                $("#q9").val().trim(),
                $("#q10").val().trim(),
            ]
        };
    
        console.log("userInput = " + JSON.stringify(userInput));
    
        // Ajax call to add new user to friends list
        $.post("/api/friends", userInput, function(data) {

            // Testing / Debug
            console.log(data);
            
            $("#match-name").text(data.name);
            $("#match-photo").attr("src", data.photo);
            $("#match-modal").modal("toggle");

        });
    } else {
        // Alert if survey in not complete
        alert("Incomplete Survey!")
    }
});