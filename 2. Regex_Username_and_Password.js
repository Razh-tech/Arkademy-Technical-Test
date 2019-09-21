//by Radendy Bahtiar - Sept, 21st '19


function validateUsername() {
  var myUsername = document.getElementById('username').value;
  var req = /^(?=.*[a-z]).+$/;

  console.log(myUsername);
  if(myUsername.length < 5) {
    alert('Please enter at least 5 characters!');
    return false;
  } else if(myUsername.length > 9) {
    alert('Maximum characters allowed is 9!');
    return false;
  } else if(!req.test(myUsername)) {
    alert('Only lowercase characters is allowed!');
  } else {
    alert('Valid');
  }
}


function validatePassword() {
    var myPassword = document.getElementById('password').value;
    var regex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-]).+$/;

    console.log(myPassword);
    if(myPassword.length != 10) {
        alert('10 digits of characters is required for password!');
        return false;
    } else if(!regex.test(myPassword)) {
        alert('Your password must contain at least one uppercase, one integer, and one special character');
        return false;
    } else{
        alert('Access Granted');
    }
}
