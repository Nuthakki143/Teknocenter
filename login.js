
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


});
});


function generateAlphanumeric() {
    const length = 6; // Change the length as needed
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    document.getElementById('alphanumeric').textContent = result;
}

function submitCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const generatedCaptcha = document.getElementById('alphanumeric').textContent;
    if (userInput === generatedCaptcha) {
        alert('Captcha matched!');
    } else {
        alert('Captcha does not match. Please try again.');
        generateAlphanumeric(); // Regenerate captcha upon incorrect entry
    }
}

// Generate alphanumeric string when the page first loads
generateAlphanumeric();
