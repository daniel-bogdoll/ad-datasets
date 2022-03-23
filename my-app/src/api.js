var XMLHttpRequest = require('xhr2');

// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
    console.log((this))
}

// Send a request
xhttp.open("GET", 'https://api.semanticscholar.org/graph/v1/paper/DOI:10.1109/cvpr42600.2020.00271/citations');
xhttp.send();