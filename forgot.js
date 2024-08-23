
$(document).ready(function () {
$("#createAccountBtn").click(function () {
 // Validate each input field


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
var passwordValue = $("#confirmPassword").val();
if (passwordValue.trim() === "") {
 alert("Re-enter Password is required");
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
    

});
});

