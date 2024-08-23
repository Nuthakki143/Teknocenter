
        $(document).ready(function () {$("#createAccountBtn").click(function () {
            // Validate each input field
            var firstName = $("#firstName").val();
            if (firstName.trim() === "") {
                alert("First Name is required");
                return false;
            }

            var lastName = $("#lastName").val();
            if (lastName.trim() === "") {
                alert("Last Name is required");
                return false;
            }
         

            var phoneNumber = $("#phoneNumber").val();
            if (phoneNumber.trim() === "") {
                alert("Phone Number is required");
                return false;
            }
            if (!/^[0-9]+$/.test(phoneNumber)) {
                alert("Please enter only numeric values for the phone number.");
                return false;

            } else if (phoneNumber.length < 10) {
                alert("Phone number should be at least 10 digits long.");
                return false;

            }
            var address = $("#address").val();
            if (address.trim() === "") {
                alert("Address is required");
                return false;
            }

            var city = $("#city").val();
            if (city.trim() === "") {
                alert("City is required");
                return false;
            }
            var country = $("#country").val();
            if (country.trim() === "None") {
                alert("country is required");
                return false;
            }
            var state = $("#state").val();
            if (state.trim() === "None") {
                alert("state is required");
                return false;
            }
            var zipCode = $("#zipCode").val();
            var numericValue = zipCode.replace(/\D/g, '');
            if (zipCode !== numericValue) {
                alert("Zip code must contain only numbers");
                return false;
            }
            $("#zipCode").val(numericValue);
            if (numericValue.trim() === "") {
                alert("Zip code is required");
                return false;
            }
            var email = $("#email").val();
            if (email.trim() === "") {
                alert("Email is required");
                return false;
            }

            if (!(email.endsWith('@gmail.com') || email.endsWith('@outlook.com'))) {
                alert("Please enter a valid Gmail or Outlook address");
                return false;
            }
            var passwordValue = $("#password").val();
            if (passwordValue.trim() === "") {
                alert("Password is required");
                return false;
            }

            var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>0-9]).{8,}$/;
            var passwordValue = $("#password").val();
            if (passwordValue.trim() === "") {
                alert("Password is required");
                return false;
            }
            var passwordValue = $("#password").val();
            if (passwordValue.trim() === "") {
                alert("Password is required");
                return false;
            }

            var uppercaseRegex = /[A-Z]/;
            var lowercaseRegex = /[a-z]/;
            var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
            var numberRegex = /[0-9]/;

            if (!uppercaseRegex.test(passwordValue)) {
                $("#password").get(0).setCustomValidity('Password must contain at least one uppercase letter.');
                alert('Password must contain at least one uppercase letter.');
                return false;
            }

            if (!lowercaseRegex.test(passwordValue)) {
                $("#password").get(0).setCustomValidity('Password must contain at least one lowercase letter.');
                alert('Password must contain at least one lowercase letter.');
                return false;
            }

            if (!specialCharRegex.test(passwordValue)) {
                $("#password").get(0).setCustomValidity('Password must contain at least one special character.');
                alert('Password must contain at least one special character.');
                return false;
            }

            if (!numberRegex.test(passwordValue)) {
                $("#password").get(0).setCustomValidity('Password must contain at least one number.');
                alert('Password must contain at least one number.');
                return false;
            }

            // Additional conditions
            if (passwordValue.length < 8) {
                $("#password").get(0).setCustomValidity('Password must be at least 8 characters long.');
                alert('Password must be at least 8 characters long.');
                return false;
            }


            var confirmPassword = $("#confirmPassword").val();
            if (confirmPassword.trim() === "") {
                alert("Re-enter Password is required");
                return false;
            }


            var password = $("#password").val();
            var confirmPassword = $("#confirmPassword").val();

            if (password !== confirmPassword) {
                alert("Passwords don't match");
                return false; // Prevent form submission
            }
            const apiUrl = "http://desktop-ftt0p6s:5555/invoke/microCenter.services:registration";

            // Construct the request data
            const requestData = {
                firstName: firstName,
                lastName: lastName,
                country: country,
                phoneNumber: phoneNumber,
                address: address,
                state: state,
                city: city,
                zipCode: zipCode,
                email: email,
                passwordValue: passwordValue
            };

            // Make a POST request to the registration endpoint
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    // Display the status message on the web page
                    const jsonOutputElement = document.getElementById("jsonOutput");
                    let outputString = " " + JSON.stringify(data.StatusMessage);
                    jsonOutputElement.innerHTML = outputString;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                })



        })}
        )




    