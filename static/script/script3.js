        // Add an event listener to the "Show Table" button
        document.getElementById("show-table-btn").addEventListener("click", function () {
            fetch('/show_table')
                .then(response => response.text())
                .then(html => {
                    document.getElementById("result").innerHTML = html;
                })
                .catch(error => {
                    document.getElementById("result").innerHTML = "Error: " + error;
                });
        });
