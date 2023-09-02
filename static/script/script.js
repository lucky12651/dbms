function displayScore() {
  var name = document.getElementById("name").value;
  var rollNumber = document.getElementById("roll-number").value;
  var resultDiv = document.getElementById("result");

  fetch('/get_student_score', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&roll_number=${rollNumber}`,
  })
  .then(response => response.json())
  .then(data => {
      if (data.error) {
          resultDiv.innerHTML = "Error: " + data.error;
      } else {
          resultDiv.innerHTML = "Name: " + data.name + "<br>" + "Roll Number: " + data.rollNumber + "<br>" + "Score: " + data.score + "<br>" + "Status: " + data.status;
      }
  })
  .catch(error => {
      resultDiv.innerHTML = "Error: " + error;
  });
}
