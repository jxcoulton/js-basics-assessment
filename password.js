// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Welcome! Please enter you password.`, (password) => {
    if (password.length < 10) {
        console.log(`That password is not long enough.`)
    } else {
        console.log(`Thank you! that password is correct.`)
    }

  rl.close();
});