function validateEmailUC4(email) {
    let regexUC4 = /^[a-zA-Z0-9._+-]+(\.[a-zA-Z0-9._+-]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexUC4.test(email)) {
        return "Invalid Email! Ensure the optional 'xyz' part uses only _, +, -, or .";
    }
    return "Valid Email!";
}

// Example
console.log(validateEmailUC4("abc.xyz@bridgelabz.co.in"));    // Valid
console.log(validateEmailUC4("abc+xyz@bridgelabz.co.in"));    // Valid
console.log(validateEmailUC4("abc#xyz@bridgelabz.co.in"));    // Invalid
console.log(validateEmailUC4("abc@bridgelabz.co.in"));        // Valid
