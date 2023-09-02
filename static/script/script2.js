function displayScore(event) {
    event.preventDefault();  // Prevent the default form submission

    var form = document.getElementById("student-form");
    var formData = new FormData(form);

    var resultDiv = document.getElementById("result");

    // Validate the form inputs
    if (formData.get("name") === "" || formData.get("roll-number") === "" || formData.get("score") === "" || formData.get("status") === "") {
        resultDiv.innerHTML = "Please fill out all fields.";
        return;
    }

    fetch('/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            resultDiv.innerHTML = "Error: " + data.error;
        } else {
            resultDiv.innerHTML = "Data stored successfully!";
            // You can clear the form inputs here if needed
            form.reset();
        }
    })
    .catch(error => {
        resultDiv.innerHTML = "Error: " + error;
    });
}

// Attach the submit event listener to the form
var form = document.getElementById("student-form");
form.addEventListener("submit", displayScore);
