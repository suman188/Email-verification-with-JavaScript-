// Conditions
// Input Email
// Length of the email > 11
// After "." only 2 or 3 characters are allowed
// Minimum 3 characters between "@" and "."
// exampels: "vinaysuman.123@gmail.com":->

const email = prompt("Enter an email address");
const emailLength = email.length;
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");
const lastIndexOf = emailLength - 1

// checking for invalid email...
if (emailLength < 11 || lastIndexOf - dotIndex < 2 || lastIndexOf - dotIndex >3 || lastIndexOf - atIndex < 3){
    console.log("Invalid email");
}else{
    console.log("Valid email");
}
