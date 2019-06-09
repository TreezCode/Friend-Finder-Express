
// Onclick function for submit button
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Input validation
    let valid = true;

    $(".form-control").each(function() {
        if ($(this).val() === "") {
            valid = false;
        }
    });

    if (valid) {

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
    
            $("#name").text(data.name);
            $("#photo").attr("src". data.photo);
            $("#match-modal").modal("toggle");
                
        });
    } else {
        // Alert if survey in not complete
        alert("Incomplete Survey!")
    }
});