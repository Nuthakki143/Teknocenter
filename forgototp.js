
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
    var otp=$("#otpnumber").val();
    if(otp.trim() === "") {
        alert("OTP is required");
        return false;
    }

  
    
    });
    });
    
    function generateOTP() {
        // Length of the OTP
        var otpLength = 6;
        var otp = '';
       
        // Generating random digits
        for (var i = 0; i < otpLength; i++) {
          otp += Math.floor(Math.random() * 10);
        }
       
        // Displaying the OTP
        document.getElementById('otpDisplay').innerText = 'Generated OTP: ' + otp;
      }