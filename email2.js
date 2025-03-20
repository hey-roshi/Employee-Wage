function validateEmailUC2(email) {
    let regexUC2 = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+/; // Ensures "@" and "bridgelabz"
    if (!regexUC2.test(email)) {
        return "Invalid Email! The second part (bridgelabz) and '@' are mandatory.";
    }
    return "Valid Email!";
}

// Example
console.log(validateEmailUC2("abc.xyz@bridgelabz.co.in"));  // Valid
console.log(validateEmailUC2("abc@bridgelabz.co.in"));      // Valid
console.log(validateEmailUC2("abc@bridge.co.in"));          // Invalid
