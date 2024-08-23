 document.getElementById("registration").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const email = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value.trim();
    const country = document.getElementById("country").value.trim();
    const state = document.getElementById("state").value.trim();
	
	
    // Construct API URL with form data
    const apiUrl = `http://desktop-ftt0p6s:5555/invoke/microCenter.services:registration?firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&address=${address}&city=${city}&zipCode=${zipCode}&email=${email}&passwordValue=${passwordValue}&country=${country}&state=${state}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Display the status message on the web page
            alert("StatusMessage: " + JSON.stringify(data.StatusMessage));
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});