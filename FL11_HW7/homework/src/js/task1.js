const USEREMAIL = 'user@gmail.com';
const ADMINEMAIL = 'admin@gmail.com';
let userPass = 'UserPass';
let adminPass = 'AdminPass';
let strMail = '';
let strPass = '';
let userPassword = '';
let confirmPass = '';
let oldPassword = '';
let userMail = prompt('Please enter your email', 'somebody@example.com');
let userMailMinlength = 5;
let UserPassMinlength = 4;
// Check login and password
if (userMail === strMail || userMail === null) {
alert('Canceled.');
} else if (userMail.length < userMailMinlength) {
alert('I dont know any emails having name length less than 6 symbols');
} else if (userMail===USEREMAIL || userMail===ADMINEMAIL) {
    userPassword = prompt('Please enter your password', 'password');
    // checking the password correspondence email
    if (userMail === 'user@gmail.com' && userPassword === userPass) { 
    confirmPass = confirm('Do you want to change your password?');
    } else if (userMail === 'admin@gmail.com' && userPassword === adminPass) {
    confirmPass = confirm('Do you want to change your password?');
    } else {
    alert('Wrong password');
    }
    // checking what button "OK" or "CANCEL" was clicked
    if (confirmPass === true) {
    oldPassword = prompt('Enter the old password ', 'old password');
        // checking the password correspondence email again (for USER)
        if (userMail === 'user@gmail.com' && oldPassword === userPass) {
        let newUserPass = prompt('Please enter your new password', 'new password');
            if (newUserPass.length < UserPassMinlength ) {
            alert('It’s too short password. Sorry.');
            } else if (newUserPass.length >= UserPassMinlength) {
            let newUserPassAgain = prompt('Please enter your new password again', 'new password');
                if (newUserPass !== newUserPassAgain) {
                alert('You wrote the wrong password.');
                } else if (newUserPass===newUserPassAgain) {
                alert('You have successfully changed your password.');
                userPass = newUserPass;
                }
            }
          // checking the password correspondence email again (for ADMIN)
        } else if (userMail === 'admin@gmail.com' && oldPassword === adminPass) {
        let newAdminPass = prompt('Please enter your new password', 'new password');
            if (newAdminPass.length < UserPassMinlength ) {
            alert('It’s too short password. Sorry.');
            } else if (newAdminPass.length >= UserPassMinlength) {
            let newAdminPassAgain = prompt('Please enter your new password again', 'new password');
                if (newAdminPass !== newAdminPassAgain) {
                alert('You wrote the wrong password.');
                } else if (newAdminPass===newAdminPassAgain) {
                alert('You have successfully changed your password.');
                adminPass = newAdminPass;
                }
            }
        }  
    } else if (confirmPass === false) {
    alert('You have failed the change.');
    }    
} else {
alert('I don’t know you');
}
