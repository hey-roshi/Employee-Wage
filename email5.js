function validateEmailUC5(email) {
    let regexUC5 = /^[a-zA-Z0-9._+-]+(\.[a-zA-Z0-9._+-]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    if (!regexUC5.test(email)) {
        return "Invalid Email! Ensure the optional TLD is correct and the country code (if present) has 2 characters.";
    }
    return "Valid Email!";
}

// Example
console.log(validateEmailUC5("abc.xyz@bridgelabz.co.in"));    // Valid
console.log(validateEmailUC5("abc.xyz@bridgelabz.co"));       // Valid
console.log(validateEmailUC5("abc.xyz@bridgelabz.co.in.us")); // Invalid
console.log(validateEmailUC5("abc@bridgelabz.co"));           // Valid
